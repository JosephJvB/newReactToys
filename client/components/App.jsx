import React, { Fragment } from 'react'
import h from 'react-hyperscript'

import Hypertester from './Hypertester'

const App = () => {
  const str = 'joe likes to learn and he learns best by doing'
  return (
    h(Fragment, [
      h('h1', {'className': 'title is-1'}, 'react'),
      h('h1', { 'className': 'title is-4' }, 'is cool'),
      h(Hypertester, {'str': str})
    ])
  )
}

export default App
