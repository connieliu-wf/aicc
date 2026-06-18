import React from 'react';
import { palette, GlassCard, createContainerStyle } from './shared';

interface TestimonialProps {
  isMobile: boolean;
}

export const Testimonial: React.FC<TestimonialProps> = ({ isMobile }) => {
  const containerStyle = createContainerStyle(isMobile);

  return (
    <div style={{ padding: '12px 0 72px' }}>
      <div style={containerStyle}>
        <GlassCard style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 2fr', gap: isMobile ? 12 : 20, padding: isMobile ? 16 : 24 }}>
          <div>
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: 0,
                background: palette.primary,
                marginBottom: 12
              }}
            />
            <div style={{ fontWeight: 700 }}>Alex Rivera</div>
            <div style={{ color: palette.textMuted, fontSize: 14 }}>Creative Director, Orbit</div>
          </div>
          <div>
            <div style={{ fontSize: 18, lineHeight: 1.6 }}>
              "Aether lets our team ideate, animate, and deliver in one flow. It feels like the tool gets out of the way
              and the craft takes over."
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

