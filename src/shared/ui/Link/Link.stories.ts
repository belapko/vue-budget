import type { Meta, StoryObj } from '@storybook/vue3'

import Link from './Link.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'shared/Link',
  component: Link,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof Link>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Anchor: Story = {
  render: (args) => ({
    components: { Link },
    setup() {
      return { args }
    },
    template: '<Link v-bind="args"/>'
  }),
  args: {
    text: 'anchor link',
    to: 'https://github.com/belapko'
  }
}

export const RouterLink: Story = {
  render: (args) => ({
    components: { Link },
    setup() {
      return { args }
    },
    template: '<Link v-bind="args"/>'
  }),
  args: {
    text: 'router link',
    routerLink: true,
    to: '/app'
  }
}
