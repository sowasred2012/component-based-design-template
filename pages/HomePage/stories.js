import React from 'react'
import { storiesOf } from '@storybook/react'
import HomePage from './'
import heroImage from '../../components/HeroMedia/clockwork-horror.jpg'
import { one, two, three, four, five, six, seven, eight, nine } from '../../components/Category/assets/'

storiesOf('HomePage', module)
  .add('default', () =>
    <HomePage
      heroTitle="A Clockwork Orange"
      heroDescription="In an England of the future, Alex (Malcolm McDowell) and his Droogs spend their nights getting high at the Korova Milkbar before embarking on a little of the old ultraviolence, while jauntily warbling Singin' in the Rain."
      heroImage={heroImage}
      categoryTitle="Cool Films"
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
