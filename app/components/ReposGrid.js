import React from 'react';
import PropTypes from 'prop-types';
import {
  FaUser,
  FaStar,
  FaCodeBranch,
  FaExclamationTriangle,
} from 'react-icons/fa';

const ReposGrid = ({ repos }) => {
  return (
    <ul className='grid space-around'>
      {repos.map((repo, i) => {
        const { name, owner, html_url, stargazers_count, forks, open_issues } =
          repo;
        const { login, avatar_url } = owner;

        return (
          <li key={html_url} className='repo bg-light'>
            <h4 className='header-lg center-text'>#{i + 1}</h4>
            <img
              src={avatar_url}
              alt={`Avatar for ${login}`}
              className='avatar'
            />
            <h2 className='center-text'>
              <a href={html_url} className='link'>
                {login}
              </a>
            </h2>
            <ul className='card-list'>
              <li>
                <FaUser color='rgb(255, 191, 116' size={22} />
                <a href={`https://github.com/${login}`}>{login}</a>
              </li>
              <li>
                <FaStar size={22} color='rgb(255, 215, 0)' />
                {stargazers_count.toLocaleString()} stars
              </li>
              <li>
                <FaCodeBranch size={22} color='rgb(129, 195, 245)' />
                {forks.toLocaleString()} forks
              </li>
              <li>
                <FaExclamationTriangle size={22} color='rgb(2241, 138, 147)' />
                {open_issues.toLocaleString()} open issues
              </li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

ReposGrid.propTypes = {
  repos: PropTypes.array.isRequired,
  // selectedLanguage: PropTypes.string.isRequired,
};

export default ReposGrid;
