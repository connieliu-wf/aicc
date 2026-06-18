import React from 'react';
import { Nav } from '../Nav';
import { Hero } from '../Hero';
import { Features } from '../Features';
import { Showcase } from '../Showcase';
import { Testimonial } from '../Testimonial';
import { CTA } from '../CTA';
import { Footer } from '../Footer';

interface HomePageProps {
  isMobile: boolean;
  isTablet: boolean;
}

export const HomePage: React.FC<HomePageProps> = ({ isMobile, isTablet }) => {
  const containerStyle = React.useMemo(() => ({
    maxWidth: 1120,
    margin: '0 auto',
    padding: isMobile ? '0 16px' : '0 24px'
  }), [isMobile]);

  return (
    <>
      <Nav containerStyle={containerStyle} />
      <Hero isMobile={isMobile} isTablet={isTablet} />
      <Features isMobile={isMobile} isTablet={isTablet} />
      <Showcase isMobile={isMobile} isTablet={isTablet} />
      <Testimonial isMobile={isMobile} />
      <CTA isMobile={isMobile} />
      <Footer isMobile={isMobile} />
    </>
  );
};

