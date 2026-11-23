import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import Text from '@theme/DocCard/Heading/Text';

const domainIconClasses = [
  'icon-who-you-are-what-you-have',
  'icon-social-engineering-manipulation-tactics',
  'icon-scams-fraudulent-schemes',
  'icon-deceptive-communication',
  'icon-ai-bias-algorithmic-influence',
  'icon-dark-patterns-manipulative-design',
  'icon-marketing-advertising-manipulation',
  'icon-surveillance-privacy-theft',
  'icon-financial-economic-exploitation',
  'icon-harassment-abuse-harm',
  'icon-psychological-behavioral-manipulation',
  'icon-psychological-behavioural-manipulation',
  'icon-specialized-threats-vulnerable-groups',
  'icon-specialised-threats-vulnerable-groups',
  'icon-when-it-happens-to-you',
  'icon-country-specific-threats-scams-resources',
  'icon-your-digital-protection-habits',
];

export default function DocCardHeading({item, title}) {
  const itemPath = `${item?.docId ?? ''} ${item?.href ?? ''}`;
  const iconClass = domainIconClasses.find(
    (name) => item?.className?.includes(name) || itemPath.includes(name.slice(5)),
  );

  return (
    <h2
      className={clsx(ThemeClassNames.docs.docCard.heading, 'doc-card-heading')}
      title={title}>
      <span className={clsx('doc-card-domain-icon', iconClass)} aria-hidden="true" />
      <Text item={item} title={title} />
    </h2>
  );
}
