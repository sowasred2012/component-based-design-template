import React from 'react'
import { storiesOf } from '@storybook/react'
import Icon from './'

storiesOf('Icon', module)
  .add('arrow-up', () => <Icon name="arrow-up" />)
  .add('arrow-right', () => <Icon name="arrow-right" />)
  .add('arrow-down', () => <Icon name="arrow-down" />)
  .add('arrow-left', () => <Icon name="arrow-left" />)
