import React from 'react'
import { storiesOf } from '@storybook/react'
import MeritList from './'

storiesOf('MeritList', module)
  .add('with three merits', () =>
    <MeritList
      merits={[
        {
          sender: { name: 'Chris Blackburn', imageUrl: 'https://www.gravatar.com/avatar/64bc9e760a5905401e5c85290c48c905' },
          receiver: { name: 'Elliott Davidson', imageUrl: 'https://www.gravatar.com/avatar/07428103abf2c701794139da194e4de8' },
          message: 'for smashing through the first week'
        },
        {
          sender: { name: 'Scott Mason', imageUrl: 'https://www.gravatar.com/avatar/dcff690e37d5af6203fbb15d76ca98b6' },
          receiver: { name: 'Seb Ashton', imageUrl: 'https://www.gravatar.com/avatar/1b12ed5ac7033607a6f055d6e25dff3f' },
          message: 'for the birthday fruit cake'
        },
        {
          sender: { name: 'Luke Bennellick', imageUrl: 'https://www.gravatar.com/avatar/9ced2e4566acd1147d8416b202ce1641' },
          receiver: { name: 'Seb Ashton', imageUrl: 'https://www.gravatar.com/avatar/1b12ed5ac7033607a6f055d6e25dff3f' },
          message: 'for top microwave advice'
        }
      ]}
    />
  )
