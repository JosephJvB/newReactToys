import { Fragment } from 'react'
import h from 'react-hyperscript'
import { Link } from 'react-router-dom'

const Linker = () => {
  return (
    h(Fragment, ['im linker',
      h(Link, {'to': '/'},
        h('button', 'back to the future')
      )])
  )
}

export default Linker
