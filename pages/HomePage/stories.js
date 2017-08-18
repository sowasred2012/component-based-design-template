import React from 'react'
import { storiesOf } from '@storybook/react'
import HomePage from './'
import heroImage from '../../components/HeroMedia/clockwork-horror.jpg'
import { one, two, three, four, five, six, seven, eight, nine } from '../../components/Category/assets/'

storiesOf('HomePage', module)
  .add('default', () =>
    <HomePage
      serviceTitle="MadeFlix"
      heroTitle="A Clockwork Orange"
      heroDescription="In an England of the future, Alex (Malcolm McDowell) and his Droogs spend their nights getting high at the Korova Milkbar before embarking on a little of the old ultraviolence, while jauntily warbling Singin' in the Rain."
      heroImage={heroImage}
      categoryTitle="As recommended by Elliott & Scott"
      media={
        [
          {
            image: one,
            title: 'Clockwork Orange',
            selected: true,
            description: 'In an England of the future, Alex (Malcolm McDowell) and his Droogs spend their nights getting high at the Korova Milkbar before embarking on a little of the old ultraviolence, while jauntily warbling Singin in the Rain.',
            url: 'https://nonamemovieblog.files.wordpress.com/2012/04/clockwork-horror.jpg'
          },
          {
            image: two,
            title: 'The Thing',
            selected: false,
            description: 'Some guys on a base in Antarctica have a PROPER nightmare when a stray dog pays a visit and turns out to be a homicidal alien. Starring Kurt Russell and Keith David as the manliest men ever.',
            url: 'http://weirdfictionreview.com/wp-content/uploads/2012/03/the-thing-1982-1080p-mkv_snapshot_00-33-19_2011-06-10_20-29-06.jpg'
          },
          {
            image: three,
            title: 'Planet of the Apes',
            selected: false,
            description: 'Charlton Heston plays an astronaut who has a PROPER nightmare when his spaceship falls into a blackhole and he crash lands on a planet ruled by intelligent apes.',
            url: 'http://static.srcdn.com/wp-content/uploads/2016/12/war-for-planet-apes-poster-caesar.jpg'
          },
          {
            image: four,
            title: 'The Spirit',
            selected: false,
            description: 'Nobody knows what this film about, but it looks a lot like Sin City, so go for it if you liked that.',
            url: 'https://movies.mxdwn.com/wp-content/uploads/2014/08/Spirit.jpg'
          },
          {
            image: five,
            title: 'Vertigo',
            selected: false,
            description: "It's a Hitchcock film, just watch it.",
            url: 'https://filmkijker.files.wordpress.com/2010/07/avert2.jpg'
          },
          {
            image: six,
            title: 'Star Wars The Empire Strikes Back',
            selected: false,
            description: 'Arguably the best Star Wars film. Except for that one scene from Attack of the Clones when Yoda fights Christopher Lee.',
            url: 'https://d3uf2ssic990td.cloudfront.net/images/4919/43c68b3a-0ac3-44aa-acb3-582dfe0c42ee/Empire_Strikes_Back.jpg'
          },
          {
            image: seven,
            title: 'Death Proof',
            selected: false,
            description: 'Quentin Tarantino goes Grindhouse with a story of a stunt driving maniac murderer who bites off more than he can chew when he encounters a group of seemingly innocent women.',
            url: 'https://a.ltrbxd.com/resized/sm/upload/od/en/ir/po/death-proof-70-1200-1200-675-675-crop-000000.jpg?k=03a61bbe18'
          },
          {
            image: eight,
            title: 'Perfume',
            selected: false,
            description: 'A man with a superhuman sense of smell goes insane for some reason and kills a bunch of people on his quest to create the best perfume ever.',
            url: 'https://misantropey.files.wordpress.com/2015/01/perfume5.jpg'
          },
          {
            image: nine,
            title: 'The Shining',
            selected: false,
            description: 'all work and no play makes Jack a dull boy all work and no play makes Jack a dull boy all work and no play makes Jack a dull boy all work and no play makes Jack a dull boy',
            url: 'http://images.amcnetworks.com/ifc.com/wp-content/uploads/2016/06/The-Shining-Jack-Nicholson-Through-Door.jpg'
          }
        ]
      }
    />
  )
