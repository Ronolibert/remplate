import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';

require('./stylesheets/main.scss');

const Homepage = () => (
  <div>
    <Nav />
    <Hero />
  </div>
);

ReactDOM.render(<Homepage />, document.getElementById('app'));
