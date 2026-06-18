import React from 'react';
import { palette } from './shared';
import { createContainerStyle } from './shared';

interface NavProps {
  containerStyle: React.CSSProperties;
}

export const Nav: React.FC<NavProps> = ({ containerStyle }) => (
  <div
    style={{
      position: 'relative',
      background: '#FFFFFF',
      borderBottom: `1px solid ${palette.cardStroke}`
    }}
  >
    <div style={{ ...containerStyle, display: 'flex', alignItems: 'center', height: 64 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div
          style={{ 
            width: 28,
            height: 28,
            borderRadius: 0,
            background: palette.primary
          }}
        />
        <span style={{ fontWeight: 700, letterSpacing: 0.4, fontSize: 16 }}>Aether</span>
      </div>
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 14 }}>
        <a style={{ color: palette.textMuted, textDecoration: 'none', fontSize: 14 }} href="#">Product</a>
        <a style={{ color: palette.textMuted, textDecoration: 'none', fontSize: 14 }} href="#">Solutions</a>
        <a style={{ color: palette.textMuted, textDecoration: 'none', fontSize: 14 }} href="#">Pricing</a>
        <a style={{ color: palette.textMuted, textDecoration: 'none', fontSize: 14 }} href="#">Resources</a>
        <div
          style={{ 
            height: 28,
            width: 1,
            background: palette.cardStroke,
            margin: '0 6px'
          }}
        />
        <button
          style={{
            color: palette.text,
            fontSize: 14,
            background: 'transparent',
            border: `1px solid ${palette.cardStroke}`,
            padding: '8px 12px',
            borderRadius: 0,
            cursor: 'pointer'
          }}
        >
          Sign in
        </button>
        <button
          style={{
            color: '#FFFFFF',
            fontWeight: 700,
            fontSize: 14,
            background: palette.primary,
            border: 'none',
            padding: '10px 14px',
            borderRadius: 0,
            cursor: 'pointer'
          }}
        >
          Get started
        </button>
      </div>
    </div>
  </div>
);

