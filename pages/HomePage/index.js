import React from 'react'
import HeroMedia from '../../components/HeroMedia'
import Category from '../../components/Category'
import Header from '../../components/Header'

export default class HomePage extends React.Component {
  componentWillMount () {
    this.setState({
      media: this.props.media,
      heroTitle: this.props.heroTitle,
      heroDescription: this.props.heroDescription,
      heroImage: this.props.heroImage
    })
  }

  handleSelectMedia (title) {
    const media = this.state.media.map((media) => {
      return { ...media, selected: title === media.title }
    })

    this.state.media.map((media) => {
      if (title === media.title) {
        this.setState({
          heroTitle: media.title,
          heroDescription: media.description,
          heroImage: media.url
        })
      }
    })

    this.setState({
      media
    })
  }

  render () {
    console.log(this.state)
    return (
      <div className="home-main">
        <style jsx>{`
          .home-main {
            background: #000;
            bottom 0;
            left: 0;
            padding-bottom: 30px;
            position: absolute;
            right: 0;
            top: 0;
          }
        `}</style>
        <Header text={this.props.serviceTitle} />
        <HeroMedia
          title={this.state.heroTitle}
          description={this.state.heroDescription}
          image={ this.state.heroImage }
        />
        <Category
          title={this.props.categoryTitle}
          media={this.state.media}
          onSelectMedia={this.handleSelectMedia.bind(this)}
        />
      </div>
    )
  }
}
