import React from 'react';
import { palette, GlassCard, createContainerStyle } from '../shared';
import { Nav } from '../Nav';
import { Footer } from '../Footer';

interface StylesDraftPageProps {
  isMobile: boolean;
}

export const StylesDraftPage: React.FC<StylesDraftPageProps> = ({ isMobile }) => {
  const containerStyle = createContainerStyle(isMobile);

  return (
    <>
      <Nav containerStyle={containerStyle} />
      <div style={{ ...containerStyle, padding: '72px 0' }}>
        <h1 style={{ margin: 0, fontSize: 40 }}>[Draft] Styles</h1>
        <p style={{ color: palette.textMuted, marginTop: 10 }}>Exploring tones, gradients, and surfaces.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 14, marginTop: 20 }}>
          {['#122B57','#1B2E63','#26437A','#2E528F','#3B67A8','#4D7DC1'].map((c, i) => (
            <div key={i} style={{ height: 80, borderRadius: 0, background: c }} />
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, marginTop: 20 }}>
          <GlassCard style={{ height: 180, background: '#DBEAFE' }}>{null}</GlassCard>
          <GlassCard style={{ height: 180, background: '#FDE68A' }}>{null}</GlassCard>
          <GlassCard style={{ height: 180, background: '#FCA5A5' }}>{null}</GlassCard>
        </div>
      </div>
      <Footer isMobile={isMobile} />
    </>
  );
};

