import React from 'react';
import { palette, GlassCard, createContainerStyle } from '../shared';
import { Nav } from '../Nav';
import { Footer } from '../Footer';

interface PasswordPageProps {
  isMobile: boolean;
}

export const PasswordPage: React.FC<PasswordPageProps> = ({ isMobile }) => {
  const containerStyle = createContainerStyle(isMobile);

  return (
    <>
      <Nav containerStyle={containerStyle} />
      <div style={{ ...containerStyle, padding: '96px 0', display: 'flex', justifyContent: 'center' }}>
        <GlassCard style={{ padding: 28, width: 420 }}>
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                width: 54,
                height: 54,
                margin: '0 auto 8px',
                borderRadius: 0,
                background: palette.accent
              }}
            />
            <h2 style={{ margin: '6px 0 0' }}>Enter password</h2>
            <p style={{ color: palette.textMuted, margin: '6px 0 16px' }}>This page is protected.</p>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: 12, color: palette.textMuted, marginBottom: 6 }}>Password</label>
            <input type="password" style={{ width: '100%', padding: 12, borderRadius: 0, border: `1px solid ${palette.cardStroke}`, background: palette.cardBg, color: palette.text }} />
          </div>
          <button
            style={{
              marginTop: 14,
              width: '100%',
              color: '#FFFFFF',
              fontWeight: 700,
              background: palette.primary,
              border: 'none',
              padding: '12px 16px',
              borderRadius: 0,
              cursor: 'pointer'
            }}
          >
            Continue
          </button>
        </GlassCard>
      </div>
      <Footer isMobile={isMobile} />
    </>
  );
};

