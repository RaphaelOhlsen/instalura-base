import React from 'react';
import FAQQuestionScreen from '../../src/components/screens/FAQQuestionScreen';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

function FAQInternalScreen({ category, question }) {
  return <FAQQuestionScreen question={question} category={category} />;
}

export default websitePageHOC(FAQInternalScreen, {
  pageWrapperProps: {
    pageBoxProps: {
      backgroundImage: 'url(/images/bubbles.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right',
    },
  },
});

export async function getStaticProps({ params }) {
  const faqCategories = await fetch(
    'https://instalura-api.vercel.app/api/content/faq',
  ).then(async (serverRes) => {
    const res = await serverRes.json();
    return res.data;
  });

  const dadosDaPagina = faqCategories.reduce(
    (acc, faqCategory) => {
      const foundQuestion = faqCategory.questions.find((question) => {
        if (question.slug === params.slug) {
          return true;
        }
        return false;
      });

      if (foundQuestion) {
        return {
          ...acc,
          category: faqCategory,
          question: foundQuestion,
        };
      }
      return acc;
    },
    { category: {}, question: {} },
  );
  return {
    props: {
      category: dadosDaPagina.category,
      question: dadosDaPagina.question,
      pageWrapperProps: {
        seoProps: {
          headTitle: dadosDaPagina.question.title,
        },
      },
    },
  };
}

// export async function getStaticPaths() {
//   const faqCategories = await fetch(
//     'https://instalura-api.vercel.app/api/content/faq'
//   ).then(async (serverRes) => {
//     const res = await serverRes.json();
//     return res.data;
//   });

//   console.log('faqCategories: ', faqCategories.questions);
//   const paths = faqCategories.reduce((acc, faqCategory) => {
//     const questionsPaths = faqCategory.questions.map((question) => ({
//       params: { slug: question.slug },
//     }));
//     return [...acc, ...questionsPaths];
//   }, []);

export async function getStaticPaths() {
  const faqCategories = await fetch(
    'https://instalura-api.vercel.app/api/content/faq',
  ).then(async (serverRes) => {
    const res = await serverRes.json();
    return res.data;
  });

  const slugsArray = faqCategories.reduce((acc, faqCategory) => {
    const questionsPaths = faqCategory.questions.map(
      (question) => question.slug,
    );
    return [...acc, ...questionsPaths];
  }, []);

  const filterSlugsArray = slugsArray.filter(
    (slug, index) => slugsArray.indexOf(slug) === index,
  );

  const paths = filterSlugsArray.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

FAQInternalScreen.propTypes = FAQQuestionScreen.propTypes;
