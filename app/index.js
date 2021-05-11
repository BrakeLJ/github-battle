import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Popular from './components/popular';
import Battle from './components/Battle';

//Component
//State
//Lifecycle
//UI

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Battle />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
