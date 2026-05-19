import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';

export default function DocCardHeadingText({title}) {
  return (
    <span className={clsx(ThemeClassNames.docs.docCard.title)}>
      {title}
    </span>
  );
}
