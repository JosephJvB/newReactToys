import React, { Fragment } from 'react'
import h from 'react-hyperscript'

import Hypertester from './Hypertester'

const App = () => {
  return (
    h(Fragment, [
      h('h1', 'react'),
      h('h1', 'is cool'),
      h(Hypertester)
    ])
  )
}

export default App
