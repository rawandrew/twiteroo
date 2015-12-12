import React from 'react'
import ReactDOM from 'react-dom'

import { Router, Route, Link } from 'react-router'
import { history } from 'react-router/lib/HashHistory'

import Index from './components/Index'

class App extends React.Comment {
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
      <Router history={history}>
        <Router component={App}>
          <Router path="/" component={Index} />
        </Route>
      </Route>, reactNode);
  }
};

$(documentReady);