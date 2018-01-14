import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom'

import Container from './components/Container'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router >
      <Container />
    </Router >,
    document.getElementById('app')
  )
})
