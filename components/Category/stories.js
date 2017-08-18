import React from 'react'
import { storiesOf } from '@storybook/react'
import Category from './'
import { one, two, three, four, five, six, seven, eight, nine } from './assets/'

storiesOf('Category', module)
  .add('default', () =>
    <Category
      title="Category"
      media={
        [
          {
            image: one,
            title: 'Clockwork Orange',
            selected: true
          },
          {
            image: two,
            title: 'The Thing',
            selected: false
          },
          {
            image: three,
            title: 'Planet of the Apes',
            selected: false
          },
          {
            image: four,
            title: 'The Spirit',
            selected: false
          },
          {
            image: five,
            title: 'Vertigo',
            selected: false
          },
          {
            image: six,
            title: 'Star Ware The Empire Strikes Back',
            selected: false
          },
          {
            image: seven,
            title: 'Death Proof',
            selected: false
          },
          {
            image: eight,
            title: 'Perfume',
            selected: false
          },
          {
            image: nine,
            title: 'The Shining',
            selected: false
          }
        ]
      }
    />
  )
