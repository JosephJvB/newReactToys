import { Fragment } from 'react'
import h from 'react-hyperscript'

import Hypertester from './Hypertester'

const App = () => {
  const yaCompLookin = () => h(Fragment, ['hehe this is a component but its really just a callback saved to a variable hehe'])
  const str = 'joe likes to learn and he learns best by doing'
  return (
    h(Fragment, [
      h('h1', {'className': 'title is-1'}, 'react'),
      h('h1', { 'className': 'title is-4' }, 'is cool'),
      h(Hypertester, {'str': str}),
      h(yaCompLookin),
      h(Hypertester, {'str': 'Ash catches pokemon and wants to be the best'})
    ])
  )
}

// element properties are cool
// components rendering components are cool
// how to do conditionals in hyperscript?

export default App
