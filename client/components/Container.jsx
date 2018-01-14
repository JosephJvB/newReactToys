import { Fragment } from 'react'
import h from 'react-hyperscript'
import { Route } from 'react-router-dom'

import App from './App'
import Linker from './Linker'

const Container = () => {
  return (
    h(Fragment, [
      h(Route, {'exact path': '/', 'component': App}),
      h(Route, {'path': '/linked', 'component': Linker})
    ])
  )
}

export default Container
