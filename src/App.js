import React, { Component } from 'react';
import './App.css';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import { connect } from 'react-redux';
import { getSecretWord } from './actions';
import Input from './Input';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  success: state.success,
  guessedWords: state.guessedWords,
  secretWord: state.secretWord
});
export default connect(mapStateToProps, { getSecretWord })(App);
