import React from 'react';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

const LoginScreen = () => <div>Página de Login</div>;

export default websitePageHOC(LoginScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Login',
    },
    menuProps: {
      display: false,
    },
  },
});
