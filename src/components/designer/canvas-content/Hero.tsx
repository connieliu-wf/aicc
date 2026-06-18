import React from 'react';
import { palette, badge, createContainerStyle } from './shared';

interface HeroProps {
  isMobile: boolean;
  isTablet: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isMobile, isTablet }) => {
  const containerStyle = createContainerStyle(isMobile);

  const InfoItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{ width: 10, height: 10, borderRadius: 0, background: palette.primary }} />
      <div>
        <div style={{ fontSize: 12, color: palette.textMuted, letterSpacing: 0.3, textTransform: 'uppercase' }}>{label}</div>
        <div style={{ fontSize: 14 }}>{value}</div>
      </div>
    </div>
  );

  const Tile: React.FC<{ color: string }> = ({ color }) => (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: color,
        borderRadius: 0
      }}
    />
  );

  const Mosaic = () => {
    const c = {
      yellow: '#FCD34D',
      navy: '#122B57',
      blue: '#93C5FD',
      teal: '#34D399',
      orange: '#FB923C'
    };
    return (
      <div
        style={{ 
          display: 'grid',
          gridTemplateColumns: `repeat(6, ${isMobile ? 34 : isTablet ? 48 : 56}px)`,
          gridTemplateRows: `repeat(6, ${isMobile ? 34 : isTablet ? 48 : 56}px)`,
          gap: isMobile ? 8 : 10
        }}
      >
        <Tile color={c.yellow} />
        <Tile color="#fff" />
        <Tile color={c.navy} />
        <Tile color={c.blue} />
        <Tile color={c.yellow} />
        <Tile color={c.orange} />

        <Tile color={c.navy} />
        <Tile color={c.yellow} />
        <Tile color={c.blue} />
        <Tile color={c.teal} />
        <Tile color={c.orange} />
        <Tile color={c.navy} />

        <Tile color={c.blue} />
        <Tile color={c.navy} />
        <Tile color="#fff" />
        <Tile color={c.yellow} />
        <Tile color={c.teal} />
        <Tile color={c.orange} />

        <Tile color={c.orange} />
        <Tile color={c.teal} />
        <Tile color={c.navy} />
        <Tile color={c.blue} />
        <Tile color={c.yellow} />
        <Tile color={c.navy} />

        <Tile color={c.blue} />
        <Tile color={c.yellow} />
        <Tile color={c.orange} />
        <Tile color={c.teal} />
        <Tile color={c.navy} />
        <Tile color={c.blue} />

        <Tile color={c.navy} />
        <Tile color={c.orange} />
        <Tile color={c.blue} />
        <Tile color={c.yellow} />
        <Tile color={c.teal} />
        <Tile color={c.orange} />
      </div>
    );
  };

  return (
    <div
      style={{
        position: 'relative',
        padding: isMobile ? '40px 0 24px' : '64px 0 40px'
      }}
    >
      <div style={containerStyle}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.2fr 1fr', gap: isMobile ? 20 : 32, alignItems: 'center' }}>
          {/* Left text block */}
          <div>
            {badge('Live session', palette.accent)}
            <h1
              style={{
                margin: '12px 0 12px',
                fontSize: isMobile ? 34 : isTablet ? 44 : 56,
                lineHeight: 1.06,
                letterSpacing: -0.6
              }}
            >
              Collaborate easier between teams to get the best of the platform.
            </h1>
            <div
              style={{ 
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, minmax(0,1fr))',
                gap: isMobile ? 12 : 16,
                marginTop: 18
              }}
            >
              <InfoItem label="Location" value="Amsterdam, Netherlands" />
              <InfoItem label="Date" value="November 17th, 2025" />
              <InfoItem label="Time" value="10:00am (PST)" />
            </div>
          </div>
          {/* Right mosaic */}
          <div style={{ justifySelf: isMobile ? 'start' : 'end' }}>
            <Mosaic />
          </div>
        </div>
      </div>
    </div>
  );
};

