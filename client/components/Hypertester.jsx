import { Fragment } from 'react' // try Fragment once HS working
import h from 'react-hyperscript'
const { console } = global

const Hypertester = (props) => {
  const label = props.str[0].toUpperCase() + props.str.substring(1, 3)
  const msg = props.str.slice(3)
  return (
    h(Fragment, [
      'is this where the text goes',
      h('p', ['what if I wanted a child element', ' & ', 'what if that child has a brother']),
      h(Fragment, ['what if I wanted a second child element',
        h('p', 'what if that child had a child')]),
      h('button',
        {'className': 'button is-large is-success',
          'onClick': () => console.log(`he${msg}`)},
        `${label}:`)
    ])
  )
}

// nested fragments are pretty cool
// onclicks are cool
// string methods are cool
// element properties are cool

export default Hypertester
