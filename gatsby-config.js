module.exports = {
  siteMetadata: {
    title: 'electricmagnetic.io',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Open+Sans:400,400i:latin-ext', 'Gelasio:400:latin-ext'],
        },
      },
    },
  ],
};
