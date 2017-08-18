import React from 'react'


export default class MediaTile extends React.Component {
  render () {
    return (
      <div>
        <style jsx>{`
          .mediaTile {
            border: solid 4px transparent;
            cursor: pointer;
            display: inline-block;
            height: 200px;
          }

          .mediaTile img {
            height: 100%;
          }

          .active--true {
            border-color: red;
          }
        `}</style>

        <div className={`mediaTile active--${this.props.selected}`}>
          <img src={this.props.imageUrl} alt={this.props.name} />
        </div>
      </div>
    )
  }
}

