import { act, renderHook } from '@testing-library/react-hooks';
import { useForm } from './index';

describe('UseForm()', () => {
  describe('when user types', () => {
    test('change the value', () => {
      const { result } = renderHook(() => useForm({
        initialValues: {
          nome: 'Raphael',
        },
      }));
      const initialValues = { nome: 'Raphael' };
      expect(result.current.values).toEqual(initialValues);

      const ev = {
        target: {
          getAttribute: () => 'nome',
          value: 'Raphael Bernardo',
        },
      };
      act(() => {
        result.current.handleChange(ev);
      });
      expect(result.current.values).toEqual({ nome: 'Raphael Bernardo' });
    });
  });
});
