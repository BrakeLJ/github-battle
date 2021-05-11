import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlayerInput extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.username);
  };

  handleChange = e => {
    this.setState({
      username: e.target.value,
    });
  };

  render() {
    return (
      <form className='column player' onSubmit={this.handleSubmit}>
        <label htmlFor='username' className='player-label'>
          {this.props.label}
        </label>
        <div className='row player-inputs'>
          <input
            type='text'
            id='username'
            className='input-light'
            placeholder='github username'
            autoComplete='off'
            value={this.state.username}
            onChange={this.handleChange}
          />
          <button
            type='submit'
            className='btn btn-dark'
            disabled={!this.state.username}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

PlayerInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
export default PlayerInput;
