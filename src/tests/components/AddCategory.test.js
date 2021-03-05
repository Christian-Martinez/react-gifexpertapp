import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
  //jest tiene la referencia para evaluar la sgte funcion
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    //reinicialize y limpie
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'Hola Mundo';
    //tiene q enviar ssi el evento target porq la funcion handleInputChange lo espera
    input.simulate('change', { target: { value } });
    expect(wrapper.find('p').text().trim()).toBe(value);
  });

  test('NO debe de postear la información con submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test('debe de llamar al setcategoies y limpiar la caja de texto', () => {
    const value = 'Hola Mundo';
    wrapper.find('input').simulate('change', { target: { value } });
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(setCategories).toHaveBeenCalled();
    //si solo llamaron una vez
    //expect(setCategories).toHaveBeenCalledTimes(1);
    //si se llamo a una funcion
    //expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    //se espera un string vacio ''
    expect(wrapper.find('input').prop('value')).toBe('');
  });
});
