import React from 'react'
import { shape, string } from 'prop-types'
import Avatar from '../../../Avatar'
import Icon from '../../../Icon'
import InfoBox from '../../../InfoBox'

export default class Merit extends React.Component {
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

          .column-left,
          .column-right {
            flex: 3;
          }

          .column-center {
            flex: 1;
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

        <div className="merit">
          <InfoBox message={`"${this.props.message}"`}>
            <div className="columns">
              <div className="column column-left">
                <Avatar name={this.props.sender.name} imageUrl={this.props.sender.imageUrl} />
              </div>
              <div className="column column-center">
                <span className="plus">+1 <Icon name="arrow-right" /></span>
              </div>
              <div className="column column-right">
                <Avatar name={this.props.receiver.name} imageUrl={this.props.receiver.imageUrl} />
              </div>
            </div>
          </InfoBox>
        </div>
      </div>
    )
  }
}
