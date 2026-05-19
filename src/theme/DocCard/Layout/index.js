import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {ThemeClassNames} from '@docusaurus/theme-common';
import Heading from '@theme/DocCard/Heading';

function Container({className, href, children}) {
  return (
    <Link
      href={href}
      className={clsx(
        'card padding--lg',
        ThemeClassNames.docs.docCard.container,
        className,
      )}>
      {children}
    </Link>
  );
}

export default function DocCardLayout({item, className, href, icon, title}) {
  return (
    <Container href={href} className={className}>
      <Heading item={item} icon={icon} title={title} />
    </Container>
  );
}
