import React from 'react';
import PropTypes from 'prop-types';

const PlayerPreview = ({ username, onReset, label }) => {
  return <div className='column player'>{username}</div>;
};

PlayerPreview.propTypes = {
  label: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default PlayerPreview;
