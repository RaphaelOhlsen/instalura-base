import React from 'react';
import FAQScreen from '../../src/components/screens/FAQScreen';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

function FAQPage({ faqCategories }) {
  return <FAQScreen faqCategories={faqCategories} />;
}

FAQPage.propTypes = FAQScreen.propTypes;

export default websitePageHOC(FAQPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Perguntas Frequentes',
    },
    pageBoxProps: {
      backgroundImage: 'url(/images/bubbles.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right',
    },
  },
});

export async function getStaticProps() {
  const faqCategories = await fetch(
    'https://instalura-api.vercel.app/api/content/faq'
  ).then(async (res) => {
    const response = await res.json();
    return response.data;
  });

  return {
    props: {
      faqCategories,
    },
  };
}
