import React, { useEffect, useState } from 'react';
import FAQScreen from '../../src/components/screens/FAQScreen';

const FAQPage = ({ faqCategories }) => (
  // const [faqCategories, setFaqCategories] = useState([]);

  // useEffect(() => {
  //   fetch('https://instalura-api.vercel.app/api/content/faq')
  //     .then((serverResponse) => serverResponse.json())
  //     .then((convertedResponse) => convertedResponse.data)
  //     .then((response) => {
  //       setFaqCategories(response);
  //     });
  // }, []);

  <FAQScreen faqCategories={faqCategories} />
);
export async function getStaticProps() {
  const faqCategories = await fetch(
    'https://instalura-api.vercel.app/api/content/faq'
  )
    .then((serverResponse) => serverResponse.json())
    .then((convertedResponse) => convertedResponse.data);

  return {
    props: {
      faqCategories,
    },
  };
}

export default FAQPage;
