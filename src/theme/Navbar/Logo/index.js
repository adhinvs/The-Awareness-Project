import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useThemeConfig} from '@docusaurus/theme-common';
import ThemedImage from '@theme/ThemedImage';

export default function NavbarLogo() {
  const {navbar} = useThemeConfig();
  const logo = navbar.logo;
  const logoLink = useBaseUrl(logo?.href || '/');

  return (
    <Link className="navbar__brand awareness-brand" to={logoLink}>
      {logo && (
        <ThemedImage
          className="navbar__logo"
          sources={{
            light: useBaseUrl(logo.src),
            dark: useBaseUrl(logo.srcDark || logo.src),
          }}
          alt={logo.alt || 'The Awareness Project logo'}
        />
      )}
      <span className="awareness-brand__lockup">
        <span className="awareness-brand__name">
          The <span>Awareness</span> Project
        </span>
        <span className="awareness-brand__tagline">
          People <i /> Behaviour <i /> Digital Safety
        </span>
      </span>
    </Link>
  );
}
