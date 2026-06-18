import React from 'react';
import { palette, GlassCard, createContainerStyle } from '../shared';
import { Nav } from '../Nav';
import { Footer } from '../Footer';

interface TestimonialsPageProps {
  isMobile: boolean;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ isMobile }) => {
  const containerStyle = createContainerStyle(isMobile);

  return (
    <>
      <Nav containerStyle={containerStyle} />
      <div style={{ ...containerStyle, padding: '72px 0' }}>
        <h1 style={{ margin: 0, fontSize: 40 }}>Testimonials</h1>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 18, marginTop: 20 }}>
          {[1,2,3,4].map((i) => (
            <GlassCard key={i} style={{ padding: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: 0, background: palette.primary }} />
                <div>
                  <div style={{ fontWeight: 700 }}>Customer {i}</div>
                  <div style={{ color: palette.textMuted, fontSize: 12 }}>Founder, Studio {i}</div>
                </div>
              </div>
              <div style={{ fontSize: 16, lineHeight: 1.6 }}>
                "Aether helped us launch faster than ever. The motion tools are a game changer."
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
      <Footer isMobile={isMobile} />
    </>
  );
};

