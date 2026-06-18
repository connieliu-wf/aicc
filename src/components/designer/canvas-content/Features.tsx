import React from 'react';
import { palette, badge, GlassCard, createContainerStyle } from './shared';

interface FeaturesProps {
  isMobile: boolean;
  isTablet: boolean;
}

const FeatureCard: React.FC<{ title: string; desc: string; tag?: string }> = ({ title, desc, tag }) => (
  <GlassCard style={{ padding: 20 }}>
    {tag && <div style={{ marginBottom: 12 }}>{badge(tag, palette.primary)}</div>}
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: 0,
          background: palette.primary
        }}
      />
      <h3 style={{ margin: 0, fontSize: 18 }}>{title}</h3>
    </div>
    <p style={{ margin: 0, color: palette.textMuted, fontSize: 14, lineHeight: 1.6 }}>{desc}</p>
  </GlassCard>
);

export const Features: React.FC<FeaturesProps> = ({ isMobile, isTablet }) => {
  const containerStyle = createContainerStyle(isMobile);

  return (
    <div style={{ padding: '8px 0 56px' }}>
      <div style={containerStyle}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
            gap: isMobile ? 12 : 18
          }}
        >
          <FeatureCard title="Creative-first canvas" desc="Design with a fluid composition surface that never boxes you in." tag="Design" />
          <FeatureCard title="Motion made simple" desc="Keyframe anything. Timeline controls and presets speed up iteration." tag="Animate" />
          <FeatureCard title="Data-aware blocks" desc="Connect your content, ship faster, keep everything in sync." tag="CMS" />
          <FeatureCard title="Collab live" desc="Share links, review comments, and ship together." />
          <FeatureCard title="Ship anywhere" desc="Export clean code or publish to our global edge network." />
          <FeatureCard title="Plugins API" desc="Extend the editor and automate your workflow with a modern API." />
        </div>
      </div>
    </div>
  );
};

