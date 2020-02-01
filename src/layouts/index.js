import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import '../assets/css/custom.scss';

const Layout = ({ children }) => (
  <div>
    <Helmet title="ElectricMagnetic Projects" />
    {children()}
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;
