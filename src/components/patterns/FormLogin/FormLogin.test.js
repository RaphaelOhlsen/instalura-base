import React from 'react';
import user from '@testing-library/user-event';
import FormLogin from './index';
import {
  render, act, screen, waitFor,
} from '../../../infra/test/testUtils';

const onSubmit = jest.fn((e) => e.preventDefault());

describe('<FormLogin />', () => {
  describe('when form fields are valid', () => {
    test('complete the submission', async () => {
      await act(async () => render(
        <FormLogin
          onSubmit={onSubmit}
        />,
      ));

      const button = screen.getByRole('button');
      expect(button).toBeDisabled();

      const inputUsuario = screen.getByPlaceholderText('Usuário');
      user.type(inputUsuario, 'someusername');
      await waitFor(() => expect(inputUsuario).toHaveValue('someusername'));

      const inputSenha = screen.getByPlaceholderText('Senha');
      user.type(inputSenha, 'somepassword');
      await waitFor(() => expect(inputSenha).toHaveValue('somepassword'));

      expect(button).not.toBeDisabled();

      user.click(button);

      screen.debug();

      expect(onSubmit).toHaveBeenCalledTimes(1);
    });
  });

  describe('when form fields ara invalid', () => {
    test('displays the respective errors', async () => {
      render(<FormLogin onSubmit={onSubmit} />);

      const inputUsuario = screen.getByPlaceholderText('Usuário');
      inputUsuario.focus();
      inputUsuario.blur();

      await waitFor(() => screen.getByRole('alert'));

      expect(screen.getByRole('alert')).toHaveTextContent('Preencha ao memos com 3 caracteres');
    });
  });
});
