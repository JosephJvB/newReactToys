import React from 'react' // try Fragment once HS working
import h from 'react-hyperscript'

const App = () => {
  return (
    h('div', [
      'is this where the text goes',
      h('p', 'what if I wanted a child element'),
      h('p', 'what if I wanted a second child element')
    ])
  )
}

export default App
