import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../../theme/Logo';
import Text from '../../foundation/Text';
import Button from '../Button';
import { MenuWrapper } from './styles';

const Menu = ({ onCadastrarClick }) => {
  const links = [
    { text: 'Home', url: '/' },
    { text: 'Perguntas Frequentes', url: '/faq' },
    { text: 'Sobre', url: '/sobre' },
  ];
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map((link, index) => (
          <li key={`link__${index}`}>
            <Text variant="smallestException" tag="a" href={link.url}>
              {link.text}
            </Text>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button ghost variant="secondary.main" href="/app/login">
          Entrar
        </Button>
        <Button variant="primary.main" onClick={onCadastrarClick}>
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
};

export default Menu;

Menu.propTypes = {
  onCadastrarClick: PropTypes.func.isRequired,
};
