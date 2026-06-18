import React from 'react';
import { palette, createContainerStyle } from '../shared';
import { Nav } from '../Nav';
import { Footer } from '../Footer';

interface NotFoundPageProps {
  isMobile: boolean;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ isMobile }) => {
  const containerStyle = createContainerStyle(isMobile);

  return (
    <>
      <Nav containerStyle={containerStyle} />
      <div style={{ ...containerStyle, padding: '120px 0', textAlign: 'center' }}>
        <div style={{ fontSize: 80, fontWeight: 800, letterSpacing: -2, marginBottom: 8, color: '#ffffff' }}>404</div>
        <div style={{ color: palette.textMuted, marginBottom: 20 }}>The page you're looking for doesn't exist.</div>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
          <a
            href="#"
            style={{
              color: '#FFFFFF',
              fontWeight: 700,
              background: palette.primary,
              border: 'none',
              padding: '12px 16px',
              borderRadius: 0,
              textDecoration: 'none'
            }}
          >
            Go home
          </a>
          <a
            href="#"
            style={{
              color: palette.text,
              background: 'transparent',
              border: `1px solid ${palette.cardStroke}`,
              padding: '12px 16px',
              borderRadius: 0,
              textDecoration: 'none'
            }}
          >
            Contact support
          </a>
        </div>
      </div>
      <Footer isMobile={isMobile} />
    </>
  );
};

