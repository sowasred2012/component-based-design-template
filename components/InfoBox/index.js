import React from 'react'
import { node, string } from 'prop-types'

export default class InfoBox extends React.Component {
  static propTypes = {
    children: node.isRequired,
    message: string.isRequired,
  }

  render () {
    return (
      <div>
        <style jsx>{`
          .info-box {
            border: 1px solid #ccc;
            border-radius: 5px;
            font-family: Helvetica, sans-serif;
            overflow: hidden;
            width: 100%;
          }

          .main {
            display: block;
            padding: 0 10px;
          }

          .message {
            background: #eee;
            border-top: 1px solid #ccc;
            color: #999;
            padding: 10px;
            text-align: center;
          }
        `}</style>

        <div className="info-box">
          <div className="main">
            {this.props.children}
          </div>
          <div className="message">
            {this.props.message}
          </div>
        </div>
      </div>
    )
  }
}
