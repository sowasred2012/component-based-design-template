import React from 'react'
import { string } from 'prop-types'

export default class Avatar extends React.Component {
  static propTypes = {
    name: string.isRequired,
    imageUrl: string,
  }

  static defaultProps = {
    imageUrl: 'https://success.salesforce.com/resource/1499817600000/sharedlayout/img/new-user-image-default.png'
  }

  render () {
    return (
      <div>
        <style jsx>{`
          .avatar {
            font-family: Helvetica, sans-serif;
            width: 120px;
          }

          img {
            border-radius: 50%;
            display: block;
            width: 100%;
          }

          span {
            display: block;
            margin-top: 12px;
            text-align: center;
          }
        `}</style>

        <div className="avatar">
          <img src={this.props.imageUrl} alt={this.props.name} />
          <span>{this.props.name}</span>
        </div>
      </div>
    )
  }
}
