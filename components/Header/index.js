import React from 'react'
import { string } from 'prop-types'
import MadeLogo from '../MadeLogo'

export default class MadeHeader extends React.Component {
  static propTypes = {
    text: string.isRequired,
  }

  render () {
    return (
      <div>
        <style jsx>{`
          .header {
            color: #ff0000;
            font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
            font-size: 30px;
            font-weight: 500;
            left: 0;
            margin-bottom: 20px;
            padding: 20px 30px;
            position: absolute;
            right: 0;
            top: 0;
          }
        `}</style>

        <div className="header">
          <MadeLogo /> <span>{this.props.text}</span>
        </div>
      </div>
    )
  }
}