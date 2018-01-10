import React, { Fragment } from 'react' // try Fragment once HS working
import h from 'react-hyperscript'

const App = () => {
  return (
    h(Fragment, [
      'is this where the text goes',
      h('p', 'what if I wanted a child element'),
      h('p', 'what if I wanted a second child element')
    ])
  )
}

export default App
