// src/components/Layout.tsx
import React from 'react';
import Header from './Header';
import { Outlet, Link } from 'react-router-dom';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="app-layout">
      <Header />
      
      <main 
        className="main-layout"
        style={{
          marginLeft: window.innerWidth > 1024 ? '280px' : '0',
          marginTop: window.innerWidth <= 1024 ? '64px' : '0',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div style={{ flex: 1 }}>
          <Outlet />
          {children}
        </div>
        
        {/* Footer */}
        <footer 
          style={{
            background: '#1e293b',
            color: '#e2e8f0',
            padding: '48px 32px 24px',
            marginTop: 'auto'
          }}
        >
          <div 
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px'
            }}
          >
            {/* Columna 1: Información Municipal */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span style={{ fontSize: '32px' }}>🏛️</span>
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: '700', margin: '0' }}>MUNICGAL</h3>
                  <p style={{ fontSize: '12px', opacity: '0.8', margin: '0' }}>Portal Digital</p>
                </div>
              </div>
              <p style={{ fontSize: '14px', lineHeight: '1.6', opacity: '0.9' }}>
                Municipalidad Distrital de Coronel Gregorio Albarracín Lanchipa.
                Comprometidos con el desarrollo sostenible y el bienestar de nuestros ciudadanos.
              </p>
              <div style={{ marginTop: '16px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <div style={{ 
                  background: '#334155',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  fontSize: '12px'
                }}>
                  📍 Tacna, Perú
                </div>
                <div style={{ 
                  background: '#334155',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  fontSize: '12px'
                }}>
                  📞 +51 935 915 159 <br />
                  📞 +51 925 409 626 <br />
                  📞 +51 992 725 511
                </div>
              </div>
            </div>

            {/* Columna 2: Enlaces Rápidos */}
            <div>
              <h4 style={{ 
                fontSize: '16px', 
                fontWeight: '600', 
                marginBottom: '16px',
                color: '#f59e0b'
              }}>
                🔗 Enlaces Rápidos
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Link to="/" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '14px' }}>🏠 Inicio</Link>
                <Link to="/comunicados" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '14px' }}>📢 Comunicados</Link>
                <Link to="/formularios" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '14px' }}>📊 Formularios</Link>
                <Link to="/formularios/create" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '14px' }}>📝 Registro Avícola</Link>
              </div>
            </div>

            {/* Columna 3: Proyecto Avícola */}
            <div>
              <h4 style={{ 
                fontSize: '16px', 
                fontWeight: '600', 
                marginBottom: '16px',
                color: '#0ea5e9'
              }}>
                🐔 Proyecto Avícola
              </h4>
              <p style={{ fontSize: '13px', lineHeight: '1.5', opacity: '0.9', marginBottom: '12px' }}>
                Mejoramiento de los Servicios de Apoyo al Desarrollo Productivo 
                en la Cadena Productiva Avícola del distrito.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ fontSize: '12px', opacity: '0.8' }}>✅ 500+ Productores beneficiados</div>
                <div style={{ fontSize: '12px', opacity: '0.8' }}>✅ Capacitación especializada</div>
                <div style={{ fontSize: '12px', opacity: '0.8' }}>✅ Mejora genética y reproductiva</div>
              </div>
            </div>

            {/* Columna 4: Google Maps */}
            <div>
              <h4 style={{ 
                fontSize: '16px', 
                fontWeight: '600', 
                marginBottom: '16px',
                color: '#22c55e'
              }}>
                📍 Ubicación
              </h4>
              <div style={{ borderRadius: 8, overflow: 'hidden', border: '2px solid #334155' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3793.5597025829643!2d-70.25805852390843!3d-18.04562608240871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915ac90158534ec1%3A0xe48f3d4f4deb2de4!2sPalacio%20De%20La%20Juventud!5e0!3m2!1ses!2spe!4v1759278547899!5m2!1ses!2spe"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Municipal"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Línea separadora */}
          <div style={{ 
            height: '1px', 
            background: '#475569', 
            margin: '32px 0 24px',
            maxWidth: '1200px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}></div>

          {/* Footer Bottom */}
          <div style={{ 
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div style={{ fontSize: '12px', opacity: '0.7' }}>
              © 2025 Municipalidad Distrital de Coronel Gregorio Albarracín Lanchipa. 
              Todos los derechos reservados.
            </div>
            
            <div style={{ display: 'flex', gap: '16px', fontSize: '12px' }}>
              <a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>📋 Términos de Uso</a>
              <a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>🔒 Política de Privacidad</a>
              <a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>📞 Contacto</a>
            </div>
          </div>
        </footer>
      </main>

      <style>{`
        @media (max-width: 768px) {
          footer > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          
          footer > div:last-child {
            flex-direction: column !important;
            text-align: center !important;
            gap: 12px !important;
          }
        }

        footer a:hover {
          color: #f59e0b !important;
        }
      `}</style>
    </div>
  );
}
