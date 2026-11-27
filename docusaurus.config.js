// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Awareness Project',
  tagline: 'Be Aware. Think Deeper. Decide Smarter',
  favicon: 'img/favicon.ico',
  future: {v4: true},
  url: 'https://theawarenessproject.in',
  baseUrl: '/',
  organizationName: 'TheBlueSignal',
  projectName: 'the-awareness-project',
  onBrokenLinks: 'throw',
  i18n: {defaultLocale: 'en', locales: ['en']},
  plugins: ['./plugins/awareness-search'],
  presets: [
    ['classic', {
      docs: {sidebarPath: './sidebars.js'},
      blog: {
        showReadingTime: true,
        feedOptions: {type: ['rss', 'atom'], xslt: true},
        editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        onInlineTags: 'warn',
        onInlineAuthors: 'warn',
        onUntruncatedBlogPosts: 'warn',
      },
      theme: {customCss: './src/css/custom.css'},
    }],
  ],
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {defaultMode: 'light', disableSwitch: false, respectPrefersColorScheme: false},
    navbar: {
      title: 'The Awareness Project',
      logo: {alt: 'The Awareness Project logo', src: 'img/logo.svg', srcDark: 'img/logodark.svg'},
      items: [
        {
          href: 'https://whatsapp.com/channel/0029Vb7GLFI3AzNVHlcg903x',
          label: 'Get Daily Insights on WhatsApp',
          position: 'left',
          className: 'nav-whatsapp-link',
        },
        {
          href: 'https://thebluesignal.com',
          label: 'The Blue Signal',
          position: 'right',
          className: 'nav-company-link',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'right',
          label: 'Explore Modules',
          className: 'nav-explore-link',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'The Awareness Project',
          items: [{html: 'A free digital safety education platform by The Blue Signal.'}],
        },
        {
          title: 'Explore',
          items: [
            {label: 'Explore Modules', to: '/docs/intro'},
            {label: 'Get Daily Byte-Sized Insights', href: 'https://whatsapp.com/channel/0029Vb7GLFI3AzNVHlcg903x'},
          ],
        },
        {
          title: 'The Blue Signal',
          items: [
            {label: 'About The Blue Signal', href: 'https://thebluesignal.com'},
            {label: 'About Founder', href: 'https://adhinvs.com'},
          ],
        },
        {
          title: 'Contact',
          items: [
            {label: 'Contact Us', href: 'mailto:thebluesignalofficial@gmail.com'},
            {label: 'Become a contributor', href: 'mailto:thebluesignalofficial@gmail.com'},
            {label: 'Report an Issue', href: 'mailto:thebluesignalofficial@gmail.com'},
          ],
        },
      ],
      copyright: '<div style="margin-top: 1.5rem;">An Initiative by The Blue Signal © 2026.</div>',
    },
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
  },
};

export default config;
