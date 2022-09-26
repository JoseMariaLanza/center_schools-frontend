import React from 'react';
import PropTypes from 'prop-types';
import ResponsiveAppBar from '../../components/ResponsiveAppBar';

function Layout({ children }) {
  return (
    <>
      <ResponsiveAppBar />
      <main>
        {children}
      </main>
    </>
  );
}

Layout.defaultProps = {
  children: null,
};

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
