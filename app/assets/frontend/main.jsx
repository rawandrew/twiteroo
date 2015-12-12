import React from 'react'
import ReactDOM from 'react-dom'

import { Router, Route, Link } from 'react-router'
import { history } from 'react-history'

import Index from './components/Index'

let documentReady = () => {
  let reactNode = document.getElementById('react');
  if (reactNode) {
    ReactDOM.render(<Index />, reactNode);
  }
};

$(documentReady);