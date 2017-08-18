import React from 'react'


export default class MediaTile extends React.Component {
  render () {
    return (
      <div className={`mediaTile active--${this.props.selected}`}>
        <style jsx>{`
          .mediaTile {
            -webkit-box-shadow: 0px 0px 9px 8px rgba(0, 0, 0 ,0);
            -moz-box-shadow: 0px 0px 9px 8px rgba(0, 0, 0 ,0);
            box-shadow: 0px 0px 9px 8px rgba(0, 0, 0 ,0);
            cursor: pointer;
            display: inline-block;
            height: 200px;
            margin: 5px 4px 0;
          }

          .mediaTile img {
            height: 100%;
          }

          .active--true {
            -webkit-box-shadow: 0px 0px 9px 8px rgba(255,0,0,0.9);
            -moz-box-shadow: 0px 0px 9px 8px rgba(255,0,0,0.9);
            box-shadow: 0px 0px 9px 8px rgba(255,0,0,0.9);
            margin: 5px 10px 0;
          }
        `}</style>

        <img src={this.props.imageUrl} alt={this.props.name} />
      </div>
    )
  }
}

