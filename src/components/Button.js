import Color from 'color'
import glamorous from 'glamorous'

const Button = glamorous.button((props, theme) => ({
  display: 'inline-block',
  backgroundColor: props.outline ? theme.colors.light : theme.colors.primary,
  color: props.outline ? theme.colors.primary : theme.colors.light,
  padding: '0.25em 1em',
  borderRadius: 2,
  border: `2px solid ${theme.colors.primary}`,
  transition: 'all 0.3s ease 0s',
  fontFamily: theme.fontFamily.sansSerif,
  ':hover': {
    backgroundColor: props.outline
      ? Color(theme.colors.light).lighten(0.2).hex()
      : Color(theme.colors.primary).darken(0.2).hex(),
  },
}))

Button.displayName = 'Button'

export default Button
