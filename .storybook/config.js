import { configure } from '@storybook/react'

function loadComponents () {
  const requireStories = require.context('../components', true, /stories\.js$/)
  const children = requireStories.keys()

  children.forEach(requireStories)
}

function loadPages () {
  const requireStories = require.context('../pages', true, /stories\.js$/)
  const children = requireStories.keys()

  children.forEach(requireStories)
}

function loadStories () {
  loadComponents()
  loadPages()
}

configure(loadStories, module)
