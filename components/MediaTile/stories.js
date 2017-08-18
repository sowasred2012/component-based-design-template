import React from 'react'
import { storiesOf } from '@storybook/react'
import MediaTile from './'
import tileImage from './film.jpg'

storiesOf('MediaTile', module)
  .add('unselected', () =>
    <MediaTile
      selected={false}
      imageUrl={tileImage}
      name="Film"
    />
  )
  .add('selected', () =>
    <MediaTile
      selected={true}
      imageUrl={tileImage}
      name="Film"
    />
  )
