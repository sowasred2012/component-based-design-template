import React from 'react'
import { storiesOf } from '@storybook/react'
import HeroMedia from './'
import heroImage from './clockwork-horror.jpg'

storiesOf('HeroMedia', module)
  .add('default', () =>
    <HeroMedia
      title="A Clockwork Orange"
      description="In an England of the future, Alex (Malcolm McDowell) and his Droogs spend their nights getting high at the Korova Milkbar before embarking on a little of the old ultraviolence, while jauntily warbling Singin' in the Rain."
      image={ heroImage }
    />
  )
