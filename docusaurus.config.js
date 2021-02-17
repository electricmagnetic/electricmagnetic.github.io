module.exports = {
  title: 'ElectricMagnetic',
  tagline: 'Open Source Projects',
  url: 'https://electricmagnetic.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'electricmagnetic',
  projectName: 'electricmagnetic.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'ElectricMagnetic',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'repositories/',
          activeBasePath: 'repositories',
          label: 'Repositories',
          position: 'left',
        },
        {
          href: 'https://electricmagnetic.net',
          label: 'Website',
          position: 'right',
        },
        {
          href: 'https://github.com/electricmagnetic',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} ElectricMagnetic. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/electricmagnetic/electricmagnetic.github.io/edit/dev/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
