import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input from './Input';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  /**
   * there are two higher order components wrapping a component after calling connect. The first level of HOC allows you to access the props, and the second level allows you to access the contents of the component that was called with the output of connect.
   */
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

describe('redux props', () => {
  test('has success piece of state as prop', () => {
    // const success = true;
    // const wrapper = setup({ success });
    const store = storeFactory({ success: true });
    /**
     * there are two higher order components wrapping a component after calling connect. The first level of HOC allows you to access the props, and the second level allows you to access the contents of the component that was called with the output of connect.
     */
    const wrapper = shallow(<Input store={store} />).dive();
    expect(wrapper.props().success).toBe(true);
  });
  test('"guessword" action creator is a function prop', () => {
    const store = storeFactory();
    const wrapper = shallow(<Input store={store} />).dive();
    expect(wrapper.props().guessWord).toBeInstanceOf(Function);
  });
});
