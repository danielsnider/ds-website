import React from "react"
import ReactDOM from "react-dom"

import './styles/main.css'


const content = {
  catPhoto: {
    src: 'placeholder-cat.6a394075.png',
  },
  roboticsSection: {
    title: 'Robotics',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum ultrices libero, id venenatis quam facilisis et. Mauris ultrices volutpat commodo. Proin at fringilla lectus. Pellentesque aliquet mi ac nunc finibus sagittis. Nulla non finibus velit.'
  },
  computerVisionSection: {
    title: 'Computer Vision',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum ultrices libero, id venenatis quam facilisis et. Mauris ultrices volutpat commodo. Proin at fringilla lectus. Pellentesque aliquet mi ac nunc finibus sagittis. Nulla non finibus velit.'
  }
}

class Main extends React.Component {
  render() {
    const d = new Date()
    console.log('reload at ' + d.toLocaleTimeString())
    return (
      <div className='main'>
        <div className='header'>
          <div className='headerLeft'>
            <img className='logo' src='logo.236e4034.svg'/>
            Left
            Daniel Snider
            Toronto
            Socials
          </div>
          <div className='headerRight'>
            Right
            Index
          </div>
        </div>
        <div className='body'>
          <PortfolioSection {...content.roboticsSection}>
            <PortfolioItemImage {...content.catPhoto}/>
            <PortfolioItemImage {...content.catPhoto}/>
          </PortfolioSection>
          <PortfolioSection {...content.computerVisionSection}>
            <PortfolioItemImage {...content.catPhoto}/>
            <PortfolioItemImage {...content.catPhoto}/>
          </PortfolioSection>
        </div>
        <div className='footer'>
          When I start something, I do it with everything I have. Passion, love, and devotion, to name a few.
          <img className='logo' src='logo.236e4034.svg'/>
          Made using [tools]. Fork me on [github].
        </div>
      </div>
    )
  }
}

class PortfolioSection extends React.Component {
  render() {
    return (
      <div>
        <h1 className='portfolio-section-title'>{this.props.title}</h1>
        <div className='portfolio-section-description'>{this.props.description}</div>
        {this.props.children}
      </div>
    )
  }
}

class PortfolioItemImage extends React.Component {
  render() {
    return <img src={this.props.src}/>
  }
}

var mountNode = document.getElementById("app")
ReactDOM.render(<Main name="Daniel" />, mountNode)
