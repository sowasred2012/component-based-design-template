import React from 'react'
import HeroMedia from '../../components/HeroMedia'
import Category from '../../components/Category'

export default class HomePage extends React.Component {
  render () {
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
        <HeroMedia
          title={this.props.heroTitle}
          description={this.props.heroDescription}
          image={ this.props.heroImage }
        />
        <Category
          title={this.props.categoryTitle}
          media={this.props.media}
        />
      </div>
    )
  }
}
