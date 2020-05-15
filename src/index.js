import React, { useState } from 'react'
import ReactDOM from "react-dom"
import useScrollInfo from 'react-element-scroll-hook'

import './styles/main.css'



const section = {
  robotics: {
    id: 'robotics',
    title: 'Robotics',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum ultrices libero, id venenatis quam facilisis et. Mauris ultrices volutpat commodo. Proin at fringilla lectus. Pellentesque aliquet mi ac nunc finibus sagittis. Nulla non finibus velit.',
    items: {
      catPhoto: {
        id: 'cat-photo',
        title: 'Cat Photo',
        src: 'placeholder-cat.6a394075.png',
      },
      catPhoto2: {
        id: 'cat-photo2',
        title: 'Cat Photo 2 (dog)',
        src: 'placeholder-dog.cbd3e9e1.jpg',
      },
      dogPhoto: {
        id: 'dog-photo',
        title: 'Dog Photo',
        src: 'placeholder-dog.cbd3e9e1.jpg',
      }
    }
  },
  computerVision: {
    id: 'computer-vision',
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
          <div className='header-left'>
            <img className='logo' src='logo.236e4034.svg'/>
            <div>Daniel Snider</div>
            <div>Toronto</div>
            <div>Socials</div>
          </div>
          <div className='header-right'>
            Portfolio
            <a href={`#${section.computerVision.id}`}>
              {section.computerVision.title}
            </a>
            <a href={`#${section.robotics.items.catPhoto.id}`}>
              {section.robotics.items.catPhoto.title}
            </a>
            <a href={`#${section.robotics.items.catPhoto2.id}`}>
              {section.robotics.items.catPhoto2.title}
            </a>
          </div>
        </div>
        <div className='body'>
          <Section {...section.computerVision}>
            <ImageItem {...section.robotics.items.dogPhoto}/>
            <ImageItem {...section.robotics.items.dogPhoto}/>
            <ImageItem {...section.robotics.items.dogPhoto}/>
            <ImageItem {...section.robotics.items.dogPhoto}/>
          </Section>
          <Section {...section.robotics}>
            <ImageItem {...section.robotics.items.catPhoto}/>
            <ImageItem {...section.robotics.items.catPhoto2}/>
            <ImageItem {...section.robotics.items.catPhoto}/>
            <ImageItem {...section.robotics.items.catPhoto}/>
          </Section>
        </div>
        <div className='footer'>
          <div className='slogan'>
            <em>When I start something, I do it with everything I have. Passion, love, and devotion, to name a few.</em>
          </div>
          <div className='footer-text'>
            <p>
              Made using <a href='https://reactjs.org/docs/hooks-intro.html'>React Hooks</a> and <a href='https://parceljs.org/'>Parcel</a>.
            </p>
            <p>
              Fork on <a href='https://github.com/danielsnider/ds-website'>Gituhb</a>.
            </p>
            <img className='logo' src='logo.236e4034.svg'/>
          </div>
        </div>
      </div>
    )
  }
}

function Section(props) {
  const [scrollInfo, setRef, ref] = useScrollInfo()
  return (
    <div id={props.id} className='portfolio-section'>
      <div className='portfolio-section-left'>
        <h1 className='portfolio-section-title'>
          {props.title}
        </h1>
        <div className='portfolio-section-description'>
          {props.description}
        </div>
      </div>
      <div className='portfolio-section-right' ref={setRef}>
        <ScrollOverlay scrollInfo={scrollInfo}/>
        {props.children}
      </div>
    </div>
  )
}

function ScrollOverlay(props) {
  const scrollInfo = props.scrollInfo
  const opacity = scrollInfo.y.value ? scrollInfo.y.value / 50 : 0
  console.log('opacity:', opacity)
  return (
    <div className="scroll-outer" style={{opacity: 1-opacity}}>
      <div className="scroll-inner">
        <p id='scroll-text'>GIMME A NICE SCROLL</p>
        <img id='scroll-svg1' alt="" src="mouse-body.28bf2410.svg" />
        <img id='scroll-svg2' alt="" src="mouse-arrow.3422f057.svg" />
        <img id='scroll-svg3' alt="" src="mouse-arrow.3422f057.svg" />
      </div>
    </div>
  )
}

class ImageItem extends React.Component {
  render() {
    return (
      <div className='image-item'>
        <img id={this.props.id} src={this.props.src} className='image-img' />
      </div>
    )
  }
}

class GithubReadmeItem extends React.Component {
  render() {
    return (
      <div>
        <img id={this.props.id} src={this.props.src}/>
      </div>
    )
  }
}

var mountNode = document.getElementById("app")
ReactDOM.render(<Main name="Daniel" />, mountNode)
