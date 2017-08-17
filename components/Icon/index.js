import React from 'react'
import { string } from 'prop-types'

export default class Icon extends React.Component {
  static propTypes = {
    name: string.isRequired,
  }

  icon () {
    switch (this.props.name) {
      case 'arrow-up': return '↑'
      case 'arrow-right': return '→'
      case 'arrow-down': return '↓'
      case 'arrow-left': return '←'
    }
  }

  render () {
    return (
      <span>{this.icon()}</span>
    )
  }
}
