import React from 'react'


export default class HeroMedia extends React.Component {
  render () {
    return (
      <div className="hero-media">
        <style jsx>{`
          .hero-media {
            align-items: center;
            justify-content: left;
            background-image: url(${this.props.image});
            background-position: center;
            background-size: cover;
            bottom: 0;
            display: flex;
            left: 0;
            position: absolute;
            right: 0;
            top: 0;
          }

          .hero-meta-container {
            align-items: center;
            color: #fff;
            display: flex;
            font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
            justify-content: left;
            margin: 0 30px;
            width: 50%;
            background: linear-gradient(90deg, #000000 0%, rgba(255,255,255,0) 100%);
            height: 100%;
          }

          .hero-meta {
            width: 80%;
          }

          .hero-play {
            background: red;
            color: white;
            cursor: pointer;
            display: inline-block;
            font-size: 14px;
            font-weight: 500;
            margin-top: 10px;
            padding: 10px 20px;
          }
        `}</style>

        <div className="hero-meta-container">
          <div className="hero-meta">
            <h2>{this.props.title}</h2>
            <p>{this.props.description}</p>
            <span className="hero-play"><svg fill="#fff" width="12" height="12" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1576 927l-1328 738q-23 13-39.5 3t-16.5-36v-1472q0-26 16.5-36t39.5 3l1328 738q23 13 23 31t-23 31z"/></svg>  PLAY</span>
          </div>
        </div>
      </div>
    )
  }
}