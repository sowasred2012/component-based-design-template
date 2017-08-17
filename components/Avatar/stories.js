import React from 'react'
import { storiesOf } from '@storybook/react'
import Avatar from './'

storiesOf('Avatar', module)
  .add('with an image', () =>
    <Avatar
      name="Luke Morton"
      imageUrl="https://emoji.slack-edge.com/T0B0XJCTC/great/cacf1bab53a7cf1a.png"
    />
  )
  .add('without an image', () =>
    <Avatar
      name="New User"
    />
  )
