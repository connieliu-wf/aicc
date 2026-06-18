import React from 'react';
import { palette, GlassCard, createContainerStyle } from './shared';

interface ShowcaseProps {
  isMobile: boolean;
  isTablet: boolean;
}

export const Showcase: React.FC<ShowcaseProps> = ({ isMobile, isTablet }) => {
  const containerStyle = createContainerStyle(isMobile);

  return (
    <div style={{ padding: '16px 0 72px' }}>
      <div style={containerStyle}>
        <h2 style={{ margin: '0 0 16px', fontSize: 28 }}>Recent work</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isTablet || isMobile ? '1fr' : '2fr 1fr',
            gap: isMobile ? 12 : 16
          }}
        >
          <GlassCard>
            <div
              style={{
                height: 320,
                borderRadius: 0,
                background: '#EEF2FF',
                border: `1px solid ${palette.cardStroke}`
              }}
            />
            <div style={{ padding: 16, borderTop: `1px solid ${palette.cardStroke}` }}>
              <strong>Nova Agency</strong>
              <div style={{ color: palette.textMuted, fontSize: 14, marginTop: 4 }}>Brand, Web, Motion</div>
            </div>
          </GlassCard>
          <div style={{ display: 'grid', gap: isMobile ? 12 : 16 }}>
            <GlassCard>
              <div style={{ height: 150, borderRadius: 0, background: '#E0F2FE' }} />
              <div style={{ padding: 16, borderTop: `1px solid ${palette.cardStroke}` }}>
                <strong>Kairo Studio</strong>
                <div style={{ color: palette.textMuted, fontSize: 14, marginTop: 4 }}>Ecomm, Brand</div>
              </div>
            </GlassCard>
            <GlassCard>
              <div style={{ height: 150, borderRadius: 0, background: '#F3E8FF' }} />
              <div style={{ padding: 16, borderTop: `1px solid ${palette.cardStroke}` }}>
                <strong>Orbit Labs</strong>
                <div style={{ color: palette.textMuted, fontSize: 14, marginTop: 4 }}>Product, Web</div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
};

