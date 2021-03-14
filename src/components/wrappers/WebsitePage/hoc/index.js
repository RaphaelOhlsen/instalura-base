import React from 'react';
import WebSitePageWrapper from '..';
import WebsiteGlobalProvider from '../provider';

export default function websitePageHOC(PageComponent, { pageWrapperProps }) {
  return (props) => (
    <WebsiteGlobalProvider>
      <WebSitePageWrapper {...pageWrapperProps}>
        <PageComponent {...props} />
      </WebSitePageWrapper>
    </WebsiteGlobalProvider>
  );
}
