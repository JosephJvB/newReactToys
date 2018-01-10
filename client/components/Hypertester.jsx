import React, { Fragment } from 'react' // try Fragment once HS working
import h from 'react-hyperscript'

const App = (props) => {
  return (
    h(Fragment, [
      'is this where the text goes',
      h('p', 'what if I wanted a child element'),
      h('p', 'what if I wanted a second child element'),
      h('button',
        {'className': 'button is-large is-success',
          'onClick': () => global.console.log('radical')},
        props.str)
    ])
  )
}

export default App
