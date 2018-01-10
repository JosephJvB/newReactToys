import React, { Fragment } from 'react' // try Fragment once HS working
import h from 'react-hyperscript'

const App = (props) => {
  const label = props.str[0].toUpperCase() + props.str.substring(1, 3)
  const msg = props.str.slice(3)
  return (
    h(Fragment, [
      'is this where the text goes',
      h('p', 'what if I wanted a child element'),
      h('p', 'what if I wanted a second child element'),
      h('button',
        {'className': 'button is-large is-success',
          'onClick': () => global.console.log(`he${msg}`)},
        label)
    ])
  )
}

export default App
