import React from 'react';

export const palette = {
  bg: '#F6F8FC',
  text: '#0B1220',
  textMuted: '#5C6470',
  primary: '#4F46E5',
  primaryAlt: '#22D3EE',
  cardBg: '#FFFFFF',
  cardStroke: '#E8ECF3',
  accent: '#F59E0B',
  danger: '#EF4444'
};

export const useResponsive = (containerWidth: number) => {
  const isMobile = containerWidth < 640;
  const isTablet = containerWidth >= 640 && containerWidth < 960;
  return { isMobile, isTablet };
};

export const createContainerStyle = (isMobile: boolean): React.CSSProperties => ({
  maxWidth: 1120,
  margin: '0 auto',
  padding: isMobile ? '0 16px' : '0 24px'
});

export const badge = (text: string, color: string) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 10px',
      fontSize: 12,
      letterSpacing: 0.2,
      borderRadius: 0,
      background: 'transparent',
      border: `1px solid ${color}`,
      color
    }}
  >
    <span
      style={{
        display: 'inline-block',
        width: 6,
        height: 6,
        borderRadius: 0,
        background: color
      }}
    />
    {text}
  </span>
);

export const GlassCard: React.FC<{ children: React.ReactNode; style?: React.CSSProperties }> = ({ children, style }) => (
  <div
    style={{
      background: palette.cardBg,
      border: `1px solid ${palette.cardStroke}`,
      borderRadius: 0,
      boxShadow: 'none',
      ...style
    }}
  >
    {children}
  </div>
);

