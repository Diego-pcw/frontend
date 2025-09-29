// src/context/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { authService } from '../services/auth.service';
import type { User } from '../types';

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  refreshProfile: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type ApiPayload = {
  user?: User;
  data?: User | Record<string, unknown>;
  [key: string]: any;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const refreshProfile = useCallback(async (): Promise<void> => {
    setLoading(true);
    try {
      const res = await authService.profile();
      const payload: ApiPayload | null = res?.data ?? null;
      let u: User | null = null;

      if (!payload) {
        u = null;
      } else if (payload.user) {
        u = payload.user as User;
      } else if (payload.data && typeof payload.data === 'object' && !Array.isArray(payload.data)) {
        u = payload.data as User;
      } else {
        u = payload as User;
      }

      setUser(u);
    } catch {
      localStorage.removeItem('token');
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let mounted = true;

    const init = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        if (mounted) {
          setUser(null);
          setLoading(false);
        }
        return;
      }
      try {
        await refreshProfile();
      } catch {
        // ignore
      }
    };

    init();

    const handleExternalLogout = () => {
      localStorage.removeItem('token');
      setUser(null);
      setLoading(false);
    };
    window.addEventListener('auth:logout', handleExternalLogout);

    return () => {
      mounted = false;
      window.removeEventListener('auth:logout', handleExternalLogout);
    };
  }, [refreshProfile]);

  const login = useCallback(async (email: string, password: string) => {
    setLoading(true);
    try {
      const res = await authService.login(email, password);
      const token = res.data?.token;
      if (token) {
        localStorage.setItem('token', token);
      }
      await refreshProfile();
    } finally {
      setLoading(false);
    }
  }, [refreshProfile]);

  const logout = useCallback(async () => {
    try {
      await authService.logout();
    } catch {
      // ignore
    } finally {
      localStorage.removeItem('token');
      setUser(null);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, refreshProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
};
