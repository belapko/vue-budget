import type { Meta, StoryObj } from '@storybook/vue3'

import Button from './Button.vue'
import MoonIcon from '../../assets/icons/moon.svg?component'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'shared/Button',
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] }
  },
  args: { method: () => alert('Button Clicked') }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: () => ({
    components: { Button },
    template: '<Button>Кнопка</Button>'
  })
}

export const Outlined: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Кнопка</Button>'
  }),
  args: {
    theme: 'outlined'
  }
}

export const OutlinedWithIcons: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Кнопка</Button>'
  }),
  args: {
    theme: 'outlined',
    leftIcon: MoonIcon
  }
}
