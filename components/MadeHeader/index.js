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
            font-family: Helvetica, sans-serif;
            font-size: 42px;
            margin-bottom: 20px;
          }
        `}</style>

        <div className="header">
          <MadeLogo /> <span>{this.props.text}</span>
        </div>
      </div>
    )
  }
}
