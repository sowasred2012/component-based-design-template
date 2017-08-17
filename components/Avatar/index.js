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
            align-items: center;
            display: flex;
            font-family: Helvetica, sans-serif;
            flex-direction: row;
            justify-content: center;
          }

          img {
            border-radius: 50%;
            width: 40px;
            vertical-align: baseline;
          }

          span {
            text-align: center;
            margin-left: 12px;
            vertical-align: center;
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
