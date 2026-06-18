import React from 'react';
import { palette, GlassCard, createContainerStyle } from './shared';

interface CTAProps {
  isMobile: boolean;
}

export const CTA: React.FC<CTAProps> = ({ isMobile }) => {
  const containerStyle = createContainerStyle(isMobile);

  return (
    <div style={{ padding: '12px 0 80px' }}>
      <div style={containerStyle}>
        <GlassCard style={{ padding: isMobile ? 16 : 28, display: 'flex', alignItems: isMobile ? 'stretch' : 'center', justifyContent: 'space-between', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 12 : 0 }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: 22, letterSpacing: 0.2, marginBottom: 6 }}>Ready to build?</div>
            <div style={{ color: palette.textMuted, fontSize: 14 }}>Start free. No credit card required.</div>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
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
              Create account
            </button>
            <button 
              style={{ 
                color: palette.text,
                background: 'transparent',
                border: `1px solid ${palette.cardStroke}`,
                padding: '12px 16px',
                borderRadius: 0,
                cursor: 'pointer'
              }}
            >
              Talk to sales
            </button>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

