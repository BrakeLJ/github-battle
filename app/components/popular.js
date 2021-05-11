import React, { Component } from 'react';
import { fetchPopularRepos } from '../utils/api';
import LanguagesNav from './LanguagesNav';
import ReposGrid from './ReposGrid';

class Popular extends Component {
  constructor() {
    super();

    this.state = {
      selectedLanguage: 'All',
      repos: {},
      error: null,
    };
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage = selectedLanguage => {
    this.setState({
      selectedLanguage,
      error: null,
    });

    if (!this.state.repos[selectedLanguage]) {
      fetchPopularRepos(selectedLanguage)
        .then(data => {
          this.setState(({ repos }) => ({
            repos: {
              ...repos,
              [selectedLanguage]: data,
            },
          }));
        })
        .catch(() => {
          console.warn('Error fetching repos', error);
          this.setState({
            error: 'There was an error fetching the repositories',
          });
        });
    }
  };

  //returns true if the stat of the repos and null is true
  //Using this method as opposed to setting a new piece of state called isLoading
  isLoading = () => {
    const { selectedLanguage, repos, error } = this.state;

    return !repos[selectedLanguage] && error === null;
  };

  render() {
    const { selectedLanguage, repos, error } = this.state;
    return (
      <div>
        <LanguagesNav
          selected={selectedLanguage}
          onUpdateLanguage={this.updateLanguage}
        />
        {this.isLoading() && <p>LOADING</p>}
        {error && <p>{error}</p>}
        {repos[selectedLanguage] && (
          <ReposGrid
            repos={repos[selectedLanguage]}
            selectedLanguage={selectedLanguage}
          />
        )}
      </div>
    );
  }
}

export default Popular;
