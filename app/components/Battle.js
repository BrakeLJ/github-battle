import React, { Component } from 'react';

import Instructions from './Instructions';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';

class Battle extends Component {
  constructor() {
    super();
    this.state = {
      playerOne: null,
      playerTwo: null,
    };
  }
  handleSubmit = (id, player) => {
    this.setState({
      [id]: player,
    });
  };

  render() {
    const { playerOne, playerTwo } = this.state;
    return (
      <React.Fragment>
        <Instructions />

        <div className='players-container'>
          <h1 className='center-text header-lg'>Players</h1>
          <div className='row space-around'>
            {playerOne === null ? (
              <PlayerInput
                label='Player One'
                onSubmit={player => this.handleSubmit('playerOne', player)}
              />
            ) : (
              <PlayerPreview
                username={playerOne}
                label='Player One'
                onReset={() => ({})}
              />
            )}

            {!playerTwo && (
              <PlayerInput
                label='Player Two'
                onSubmit={player => this.handleSubmit('playerTwo', player)}
              />
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Battle;
