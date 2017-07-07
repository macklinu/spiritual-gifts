import glamorous from 'glamorous'

export default glamorous.p(props => ({
  lineHeight: '1.5',
  fontSize: '1.25rem',
  padding: props.padded ? '1em 0' : 0,
}))
