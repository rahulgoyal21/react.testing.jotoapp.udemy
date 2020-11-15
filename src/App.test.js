import React from 'react';
import { shallow } from 'enzyme';
import { storeFactory } from '../test/testUtils';
import App, { UnconnectedApp } from './App';

const setup = (state = {}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<App store={store} />).dive();
  return wrapper;
};

describe('redux properties', () => {
  test('has access to "success" state', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.props().success;
    expect(successProp).toBe(success);
  });
  test('has access to "secretWord" state', () => {
    const secretWord = 'party';
    const wrapper = setup({ secretWord });
    const secretWordProp = wrapper.props().secretWord;
    expect(secretWordProp).toBe(secretWord);
  });
  test('has access to "guessedWords" state', () => {
    const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }];
    const wrapper = setup({ guessedWords });
    const guessedWordsProp = wrapper.props().guessedWords;
    expect(guessedWordsProp).toEqual(guessedWords);
  });
  test('"getSecretWord" action creator is a function on the props', () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.props().getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});

test('"getSecretWord" runs on App mount', () => {
  const getSecretWordMock = jest.fn();
  const props = {
    getSecretWord: getSecretWordMock,
    success: false,
    guessedWords: []
  };

  //setup app component with getSecretWordMock as the getSecretWord prop
  const wrapper = shallow(<UnconnectedApp {...props} />);

  //run lifecyle method
  wrapper.instance().componentDidMount();

  //check to see if mock run
  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;

  expect(getSecretWordCallCount).toBe(1);
});
