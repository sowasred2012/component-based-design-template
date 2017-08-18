import React from 'react'
import MediaTile from '../MediaTile'

export default class Category extends React.Component {
  render () {
    return (
      <div className="category">
        <style jsx>{`
          .category {
            overflow-x:  scroll;
            padding: 4px;
            white-space: nowrap;
          }

          h2 {
            font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
            font-size: 16px;
            margin: 5px 0 15px;
          }
        `}</style>

        <h2>{this.props.title}</h2>

        {this.props.media.map(media =>
          <MediaTile
            selected={media.selected}
            imageUrl={media.image}
            name={media.name}
          />
        )}
      </div>
    )
  }
}