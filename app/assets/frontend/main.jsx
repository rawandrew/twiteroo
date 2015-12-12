import React from 'react'
import ReactDOM from 'react-dom'

import { Router, Route, Link } from 'react-router'

import Index from './components/Index'

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

let documentReady = () => {
  let reactNode = document.getElementById('react');
  if (reactNode) {
    ReactDOM.render(
      <Router component={App}>
        <Router path="/" component={Index} />
      </Router>, reactNode);
  }
};

$(documentReady);