import type { Component } from "vue"

type ButtonTheme = 'clear' | 'outlined'

type ButtonSize = 'small' | 'medium' | 'large'

export interface Props {
  theme?: ButtonTheme
  size?: ButtonSize
  leftIcon?: Component
  rightIcon?: Component
  loading?: boolean
  disabled?: boolean
  method?: (payload: MouseEvent) => void
}
