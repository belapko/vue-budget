type LinkTheme = 'default'

export interface Props {
  routerLink?: boolean
  theme?: LinkTheme
  to: string
  text: string
}
