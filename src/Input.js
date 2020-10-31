import React from 'react';
import { connect } from 'react-redux';

const Input = ({ success }) => {
  const contents = success ? null : (
    <form className='form-inline'>
      <input
        data-test='input-box'
        className='mb-2 mx-sm-3'
        type='text'
        placeholder='enter guess'
      />
      <button
        data-test='submit-button'
        className='btn btn-primary mb-2'
        type='submit'
      >
        Submit
      </button>
    </form>
  );
  return <div data-test='component-input'> {contents}</div>;
};

const mapStateToProps = (state) => ({
  success: state.successReducer
});

export default connect(mapStateToProps)(Input);
