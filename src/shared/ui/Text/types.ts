type size = 'small' | 'medium' | 'large'

export interface Props {
  title?: string
  paragraphs?: Array<string>
  size?: size
  isError?: boolean
}
