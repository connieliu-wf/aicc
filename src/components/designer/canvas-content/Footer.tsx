import React from 'react';
import { palette, createContainerStyle } from './shared';

interface FooterProps {
  isMobile: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isMobile }) => {
  const containerStyle = createContainerStyle(isMobile);

  return (
    <div
      style={{
        padding: '32px 0',
        borderTop: `1px solid ${palette.cardStroke}`
      }}
    >
      <div style={{ ...containerStyle, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ color: palette.textMuted, fontSize: 14 }}>© 2025 Aether Inc.</div>
        <div style={{ display: 'flex', gap: 14 }}>
          <a href="#" style={{ color: palette.textMuted, textDecoration: 'none', fontSize: 14 }}>Privacy</a>
          <a href="#" style={{ color: palette.textMuted, textDecoration: 'none', fontSize: 14 }}>Terms</a>
          <a href="#" style={{ color: palette.textMuted, textDecoration: 'none', fontSize: 14 }}>Status</a>
        </div>
      </div>
    </div>
  );
};

