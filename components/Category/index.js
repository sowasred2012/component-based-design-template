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
            margin-top: -130px;
            padding: 0 30px 8px;
          }

          h3 {
            font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
            font-size: 16px;
            margin: 5px 0 15px;
            color: #fff;
          }
        `}</style>

        <h3>{this.props.title}</h3>

        {this.props.media.map(media =>
          <MediaTile
            selected={media.selected}
            imageUrl={media.image}
            title={media.title}
            onClick={this.props.onSelectMedia}
          />
        )}
      </div>
    )
  }
}