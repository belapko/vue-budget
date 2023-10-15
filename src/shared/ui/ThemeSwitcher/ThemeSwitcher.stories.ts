import type { Meta, StoryObj } from '@storybook/vue3'

import ThemeSwitcher from './ThemeSwitcher.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'shared/ThemeSwitcher',
  component: ThemeSwitcher,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof ThemeSwitcher>

export default meta
type Story = StoryObj<typeof ThemeSwitcher>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */

export const Default: Story = {
  render: () => ({
    components: { ThemeSwitcher },
    template: '<ThemeSwitcher/>'
  })
}

