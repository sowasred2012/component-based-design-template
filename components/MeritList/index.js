import React from 'react'
import { arrayOf, shape, string } from 'prop-types'
import Merit from './components/Merit'

export default class MeritList extends React.Component {
  static propTypes = {
    merits: arrayOf(shape({
      sender: shape({ name: string.isRequired, imageUrl: string.isRequired }),
      receiver: shape({ name: string.isRequired, imageUrl: string.isRequired }),
      message: string.isRequired,
    }))
  }

  render () {
    return (
      <div>
        <style jsx>{`
          .merit {
            margin-bottom: 20px;
          }

          > div:last-of-type .merit {
            margin-bottom: 0;
          }
        `}</style>

        <div className="merit-list">
          {this.props.merits.map(merit =>
            <Merit
              sender={merit.sender}
              receiver={merit.receiver}
              message={merit.message}
            />
          )}
        </div>
      </div>
    )
  }
}
