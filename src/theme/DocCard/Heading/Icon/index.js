import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';

export default function DocCardHeadingIcon() {
  return (
    <span className={clsx(ThemeClassNames.docs.docCard.icon, 'doc-card-book-icon')}>
      <svg
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true">
        <path d="M12 7.5c-2.1-1.6-5.2-2-8-1.2v13c2.8-.8 5.9-.4 8 1.2 2.1-1.6 5.2-2 8-1.2v-13c-2.8-.8-5.9-.4-8 1.2Z" />
        <path d="M12 7.5v13" />
      </svg>
    </span>
  );
}
