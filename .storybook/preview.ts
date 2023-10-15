import '../src/app/index.scss'
import type { Preview } from '@storybook/vue3'

const preview: Preview = {
  parameters: {
    themes: {
      default: 'body.dark',
      list: [
        { name: 'body.dark', class: 'dark' },
        { name: 'body.light', class: 'light' }
      ]
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export default preview
