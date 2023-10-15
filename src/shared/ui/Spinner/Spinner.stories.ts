import type { Meta, StoryObj } from '@storybook/vue3'

import Spinner from './Spinner.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'shared/Spinner',
  component: Spinner,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof Spinner>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: () => ({
    components: { Spinner },
    template: '<Spinner/>'
  })
}

