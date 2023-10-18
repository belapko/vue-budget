import type { Meta, StoryObj } from '@storybook/vue3'

import Text from './Text.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'shared/Text',
  component: Text,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] }
  }
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof Text>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Title: Story = {
  render: (args) => ({
    components: { Text },
    setup() {
      return { args }
    },
    template: '<Text v-bind="args"/>'
  }),
  args: {
    title: 'Title'
  }
}

export const Paragraph: Story = {
  render: (args) => ({
    components: { Text },
    setup() {
      return { args }
    },
    template: '<Text v-bind="args"/>'
  }),
  args: {
    paragraphs: ['Single paragraph']
  }
}

export const TitleParagraph: Story = {
  render: (args) => ({
    components: { Text },
    setup() {
      return { args }
    },
    template: '<Text v-bind="args"/>'
  }),
  args: {
    title: 'Title',
    paragraphs: ['Single paragraph']
  }
}

export const TitleParagraphs: Story = {
  render: (args) => ({
    components: { Text },
    setup() {
      return { args }
    },
    template: '<Text v-bind="args"/>'
  }),
  args: {
    title: 'Title',
    paragraphs: ['First paragraph', 'second paragraph', 'Third paragraph']
  }
}

export const ErrorTitle: Story = {
  render: (args) => ({
    components: { Text },
    setup() {
      return { args }
    },
    template: '<Text v-bind="args"/>'
  }),
  args: {
    isError: true,
    title: 'I am error'
  }
}

export const ErrorParagraph: Story = {
  render: (args) => ({
    components: { Text },
    setup() {
      return { args }
    },
    template: '<Text v-bind="args"/>'
  }),
  args: {
    isError: true,
    paragraphs: ['I am error']
  }
}

export const ErrorTitleParagraph: Story = {
  render: (args) => ({
    components: { Text },
    setup() {
      return { args }
    },
    template: '<Text v-bind="args"/>'
  }),
  args: {
    isError: true,
    title: 'This is error',
    paragraphs: ['I am paragrapsh describes what to do with error']
  }
}
