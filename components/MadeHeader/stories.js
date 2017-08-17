import React from 'react'
import { storiesOf } from '@storybook/react'
import MadeHeader from './'

storiesOf('MadeHeader', module)
  .add('default', () =>
    <MadeHeader text="My test header" />
  )
