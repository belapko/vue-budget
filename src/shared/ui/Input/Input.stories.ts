import type { Meta, StoryObj } from '@storybook/vue3'

import Input from './Input.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'shared/Input',
  component: Input,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof Input>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Underlined: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      return { args }
    },
    template: '<Input v-bind="args"/>'
  }),
  args: {
    label: 'Enter text'
  }
}

export const UnderlinedAutofocused: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      return { args }
    },
    template: '<Input v-bind="args"/>'
  }),
  args: {
    label: 'Autofocus onmounted press cmd+R',
    autofocus: true
  }
}
