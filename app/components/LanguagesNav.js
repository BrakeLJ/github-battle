import React from 'react';
import PropTypes from 'prop-types';

const LanguagesNav = ({ selected, onUpdateLanguage }) => {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

  return (
    <ul className='flex-center'>
      {languages.map(language => {
        return (
          <li key={language}>
            <button
              style={
                language === selected ? { color: 'rgb(187, 46, 31' } : null
              }
              className='btn-clear nav-link'
              onClick={() => onUpdateLanguage(language)}
            >
              {language}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

LanguagesNav.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpdateLanguage: PropTypes.func.isRequired,
};

export default LanguagesNav;
