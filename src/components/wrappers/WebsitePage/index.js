import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import Footer from '../../commons/Footer';
import Menu from '../../commons/Menu';
import Modal from '../../commons/Modal';
import { Box } from '../../foundation/layout/Box';
import FormCadastro from '../../patterns/FormCadastro';
import SEO from '../../commons/SEO';

export const WebsitePageContext = createContext({
  toggleModalCadastro: () => {},
});

export default function WebSitePageWrapper({
  children,
  seoProps,
  pageBoxProps,
  menuProps,
}) {
  const [isModalOpen, setModalState] = useState(false);
  // eslint-disable-next-line no-console
  console.log(pageBoxProps);
  return (
    <WebsitePageContext.Provider
      value={{
        toggleModalCadastro: () => {
          setModalState(!isModalOpen);
        },
      }}
    >
      <SEO {...seoProps} />
      <Box display="flex" flex="1" flexDirection="column" {...pageBoxProps}>
        <Modal isOpen={isModalOpen} onClose={() => setModalState(false)}>
          {(propsDoModal) => <FormCadastro propsDoModal={propsDoModal} />}
        </Modal>
        {menuProps.display && (
          <Menu onCadastrarClick={() => setModalState(true)} />
        )}

        {children}
        <Footer />
      </Box>
    </WebsitePageContext.Provider>
  );
}

WebSitePageWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {},
  menuProps: {
    display: true,
  },
};

WebSitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  pageBoxProps: PropTypes.shape({
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  children: PropTypes.node.isRequired,
};
