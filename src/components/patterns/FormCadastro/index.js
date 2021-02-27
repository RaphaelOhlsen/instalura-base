import React, { useState } from 'react';
import Button from '../../commons/Button';
import Text from '../../foundation/Text';
import TextField from '../../forms/TextField';
import { Box } from '../../foundation/layout/Box';
import { Grid } from '../../foundation/layout/Grid';

const FormContent = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
  });

  const isFormInvalid = userInfo.name.length === 0 || userInfo.email === 0;

  function handleChange(ev) {
    const fieldName = ev.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: ev.target.value,
    });
  }
  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        setUserInfo({ name: '', email: '' });
      }}
    >
      <Text variant="title" tag="h1" color="tertiary.main">
        Pronto para saber da vida dos outros?
      </Text>
      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.light"
        marginBottom="32px"
      >
        Você está a um passo de saber tudo que está rolando no bairro, complete
        seu cadastro
      </Text>
      <div>
        <TextField
          placeholder="Email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          placeholder="Usuário"
          name="name"
          value={userInfo.name}
          onChange={handleChange}
        />
      </div>
      <Button
        variant="primary.main"
        type="submit"
        disabled={isFormInvalid}
        fullWidth
      >
        Cadastrar
      </Button>
    </form>
  );
};

// eslint-disable-next-line react/prop-types
const FormCadastro = ({ propsDoModal }) => (
  <Grid.Row marginLeft={0} marginRight={0} flex={1} justifyContent="flex-end">
    <Grid.Col
      display="flex"
      paddingRight={{ md: '0' }}
      flex={1}
      value={{ xs: 12, md: 5, lg: 4 }}
    >
      <Box
        boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        flex={1}
        padding={{
          xs: '16px',
          md: '85px',
        }}
        backgroundColor="white"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...propsDoModal}
      >
        <propsDoModal.CloseButton />
        {/* <Box
          position="absolute"
          top={{
            xs: '10px',
            md: '10px',
          }}
          right={{
            xs: '20px',
            md: '10px',
          }}
          onClick={() => onClose()}
          cursor="pointer"
        >
          <img src="/images/closeButton.svg" alt="botoa de fechar" />
        </Box> */}
        <FormContent />
      </Box>
    </Grid.Col>
  </Grid.Row>
);

export default FormCadastro;
