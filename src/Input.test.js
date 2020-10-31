import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input from './Input';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};
describe('render', () => {
  describe('word has not been guessed', () => {
    let wrapper1;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper1 = setup(initialState);
    });
    test('renders component without error', () => {
      const component = findByTestAttr(wrapper1, 'component-input');
      expect(component.length).toBe(1);
    });
    test('renders input box', () => {
      const inputBox = findByTestAttr(wrapper1, 'input-box');
      expect(inputBox.length).toBe(1);
    });
    test('renders submit button', () => {
      const submitButton = findByTestAttr(wrapper1, 'submit-button');
      expect(submitButton.length).toBe(1);
    });
  });
  describe('word has been guessed', () => {
    let wrapper2;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper2 = setup(initialState);
    });
    test('renders component without error', () => {
      const component = findByTestAttr(wrapper2, 'component-input');
      expect(component.length).toBe(1);
    });
    test('does not render input box', () => {
      const inputBox = findByTestAttr(wrapper2, 'input-box');
      expect(inputBox.length).toBe(0);
    });
    test('does not render submit button', () => {
      const submitButton = findByTestAttr(wrapper2, 'submit-button');
      expect(submitButton.length).toBe(0);
    });
  });
});

describe('update state', () => {});
