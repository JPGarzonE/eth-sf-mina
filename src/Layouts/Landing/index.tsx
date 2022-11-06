import React, { ReactNode } from 'react';

import { LandingFooter, LandingFooterLogo, LandingMain } from './styles';

interface Props {
  children?: ReactNode;
}

export default function LandingLayout({ children }: Props) {
  return (
    <React.Fragment>
      <LandingMain>{children}</LandingMain>
      <LandingFooter>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Powered by Harpo <LandingFooterLogo>⚡️💡⚡️</LandingFooterLogo>
        </a>
      </LandingFooter>
    </React.Fragment>
  );
}
