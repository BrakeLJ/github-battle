import React, { Component } from 'react';
import { fetchPopularRepos } from '../utils/api';
import LanguagesNav from './LanguagesNav';

class Popular extends Component {
  constructor() {
    super();

    this.state = {
      selectedLanguage: 'All',
      repos: null,
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
      repos: null,
    });

    fetchPopularRepos(selectedLanguage)
      .then(repos => {
        this.setState({
          repos,
          error: null,
        });
      })
      .catch(() => {
        console.warn('Error fetching repos', error);
        this.setState({
          error: 'There was an error fetching the repositories',
        });
      });
  };
  isLoading = () => {
    return this.state.repos === null && this.state.error === null;
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
        {repos && <pre>{JSON.stringify(repos, null, 2)}</pre>}
      </div>
    );
  }
}

export default Popular;
