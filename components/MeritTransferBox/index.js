import React from 'react'
import { shape, string } from 'prop-types'
import Avatar from '../Avatar'
import Icon from '../Icon'
import InfoBox from '../InfoBox'

export default class MeritTransferBox extends React.Component {
  static propTypes = {
    sender: shape({ name: string.isRequired, imageUrl: string.isRequired }),
    receiver: shape({ name: string.isRequired, imageUrl: string.isRequired }),
    message: string.isRequired,
  }

  render () {
    return (
      <div>
        <style jsx>{`
          .columns {
            align-items: center;
            display: flex;
            flex-direction: row;
            padding: 10px 0;
          }

          .column {
            flex-grow: 1;
            text-align: center;
          }

          .avatar {
            position: relative;
            margin: auto;
          }

          .plus {
            font-size: 24px;
            margin: 0;
          }
        `}</style>

        <InfoBox message={`"${this.props.message}"`}>
          <div className="columns">
            <div className="column">
              <Avatar name={this.props.sender.name} imageUrl={this.props.sender.imageUrl} />
            </div>
            <div className="column">
              <span className="plus">+1 <Icon name="arrow-right" /></span>
            </div>
            <div className="column">
              <Avatar name={this.props.receiver.name} imageUrl={this.props.receiver.imageUrl} />
            </div>
          </div>
        </InfoBox>
      </div>
    )
  }
}
