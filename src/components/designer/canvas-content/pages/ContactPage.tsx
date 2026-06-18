import React from 'react';
import { palette, GlassCard, createContainerStyle } from '../shared';
import { Nav } from '../Nav';
import { Footer } from '../Footer';

interface ContactPageProps {
  isMobile: boolean;
}

export const ContactPage: React.FC<ContactPageProps> = ({ isMobile }) => {
  const containerStyle = createContainerStyle(isMobile);

  return (
    <>
      <Nav containerStyle={containerStyle} />
      <div style={{ ...containerStyle, padding: '72px 0' }}>
        <h1 style={{ margin: 0, fontSize: 40, letterSpacing: -0.2 }}>Contact us</h1>
        <p style={{ color: palette.textMuted, marginTop: 10, maxWidth: 560 }}>
          We'd love to hear from you. Fill out the form and our team will get back to you within 2 business days.
        </p>
        <GlassCard style={{ marginTop: 20, padding: 20 }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16 }}>
            <div>
              <label style={{ display: 'block', fontSize: 12, color: palette.textMuted, marginBottom: 6 }}>First name</label>
              <input style={{ width: '100%', padding: 12, borderRadius: 0, border: `1px solid ${palette.cardStroke}`, background: palette.cardBg, color: palette.text }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 12, color: palette.textMuted, marginBottom: 6 }}>Last name</label>
              <input style={{ width: '100%', padding: 12, borderRadius: 0, border: `1px solid ${palette.cardStroke}`, background: palette.cardBg, color: palette.text }} />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{ display: 'block', fontSize: 12, color: palette.textMuted, marginBottom: 6 }}>Email</label>
              <input type="email" style={{ width: '100%', padding: 12, borderRadius: 0, border: `1px solid ${palette.cardStroke}`, background: palette.cardBg, color: palette.text }} />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{ display: 'block', fontSize: 12, color: palette.textMuted, marginBottom: 6 }}>Message</label>
              <textarea rows={6} style={{ width: '100%', padding: 12, borderRadius: 0, border: `1px solid ${palette.cardStroke}`, background: palette.cardBg, color: palette.text }} />
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 16 }}>
            <button 
              style={{ 
                color: '#FFFFFF',
                fontWeight: 700,
                background: palette.primary,
                border: 'none',
                padding: '12px 16px',
                borderRadius: 0,
                cursor: 'pointer'
              }}
            >
              Send message
            </button>
          </div>
        </GlassCard>
      </div>
      <Footer isMobile={isMobile} />
    </>
  );
};

