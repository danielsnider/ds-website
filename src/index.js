import React, { useRef, useLayoutEffect, useState } from "react"
import ReactDOM from "react-dom"
import marked from 'marked'
import ColoredScrollbars from './ColoredScrollbars';

import './styles/index.css'
import './styles/main.css'
import rosRoverMarkdown from './rosRoverReadme.js'
import cellBioMarkdown from './cellBioReadme.js'
import loveBot from './images/lovebot-isometric.png'
import imageArchiveImage50 from './images/image-archive-UI_50.jpg'
import imageArchiveImage20 from './images/image-archive-UI_20.jpg'
import breqwatrCardImage from './images/breqwatr-card-50.jpg'
import breqwatrMontage from './images/breqwatr.jpg'
import cellGrowthPlot from './images/bio-graph1-grey-background.JPG'
import deepscatterImage from './images/deepscatter.jpg'
import deepscatterImage33 from './images/deepscatter_cropped_33.jpg'
import matkitCellsImage from './images/matkit-cells_40.jpg'
import matkitMontage from './images/matkit-short.jpg'
import natureSvg from './images/nature.svg'
import objectTrackingImage from './images/object-tracking.jpg'
import rareconnectImage from './images/rareconnect.png'
import rareconnectWysiwygImage from './images/rareconnect-wysiwyg.jpg'
import rosRoverImage from './images/rover_half_33.jpg'
import senseactArmImage from './images/senseact-arm.jpg'
import senseactDiagram from './images/senseact-short.gif'
import senseactPresentation from './images/senseact-presenting_40.jpg'

import dynamics from './dynamics'
import tinycolor from './tinycolor'


function Header(props) {
  return (
    <div className='header'>
      <div className='header-left'>
        <NameAndLogo/>
      </div>
      <div className='header-right'>
        {/* <Index/> */}
        <div className='about' id="content">
          <div className='about-sentance'>Hello and Welcome!</div>
          {/* <div className='about-sentance'>
            My name is Daniel and <span className='about-emphasis'>I <span className='about-emphasis2'>❤</span> automation.</span>
          </div>
          <div className='about-sentance'>
            I want to help people do more.
          </div>
          <div className='about-sentance'>
            I want to help people do more.
          </div> */}
          <div className='about-sentance'>
            {/* My name is Daniel and <span className='about-emphasis'>I automate for people with <span className='about-emphasis2'>❤</span>.</span> */}
            My name is Daniel and <span className='about-emphasis'>I automate for people with 
            <svg style={{paddingLeft: '5px'}} version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 28 28">
              <title>heart</title>
              <path d="M14 26c-0.25 0-0.5-0.094-0.688-0.281l-9.75-9.406c-0.125-0.109-3.563-3.25-3.563-7 0-4.578 2.797-7.313 7.469-7.313 2.734 0 5.297 2.156 6.531 3.375 1.234-1.219 3.797-3.375 6.531-3.375 4.672 0 7.469 2.734 7.469 7.313 0 3.75-3.437 6.891-3.578 7.031l-9.734 9.375c-0.187 0.187-0.438 0.281-0.688 0.281z" fill="#f1aaae"></path>
            </svg>
            .</span>
          </div>
          <div className='about-sentance'>
            In collaboration with great engineers, scientists, and managers, I create user-focused solutions that are both powerful and 💯<span className='about-percent'>﹪</span>effortless.
          </div>
        </div>
      </div>
    </div>
  )
}

function NameAndLogo(props) {
  return (
    <div id="header-content" className='name-and-logo'>
      <Logo/>
      <div className='name'>Daniel Snider</div>
      <div className='city'>Software Developer</div>
      <div className='city'>Toronto</div>
      <div id="contact">
        <a href="https://twitter.com/danielsnider" target="_blank">
          <svg className='social-icon' viewBox="0 0 42 36" xmlns="http://www.w3.org/2000/svg"><path d="M40.885 5.917a16.098 16.098 0 0 1-4.7 1.315 8.35 8.35 0 0 0 3.598-4.62 16.18 16.18 0 0 1-5.196 2.026A8.094 8.094 0 0 0 28.614 2c-4.52 0-8.183 3.74-8.183 8.353 0 .655.073 1.293.213 1.904-6.8-.348-12.83-3.674-16.866-8.728a8.447 8.447 0 0 0-1.108 4.2 8.397 8.397 0 0 0 3.64 6.952 8.024 8.024 0 0 1-3.707-1.045v.105c0 4.047 2.82 7.423 6.563 8.19a8.035 8.035 0 0 1-3.695.144c1.042 3.32 4.064 5.734 7.645 5.8A16.206 16.206 0 0 1 1 31.337a22.818 22.818 0 0 0 12.544 3.754c15.05 0 23.282-12.73 23.282-23.768 0-.362-.008-.723-.024-1.08a16.82 16.82 0 0 0 4.083-4.325z"></path></svg>
        </a>
        <a href="mailto:danielsnider12@gmail.com" target="_blank">
          <svg className='social-icon' viewBox="0 0 42 36" xmlns="http://www.w3.org/2000/svg"><path d="M3.025 5.255A1.99 1.99 0 0 1 4.003 5h33.994c.354 0 .688.093.977.256L21 18.5 3.025 5.255zm-1.002 1.45c-.015.098-.023.2-.023.302V18.28v-5.636 17.35C2 31.1 2.902 32 4.003 32h33.994A2.005 2.005 0 0 0 40 29.993v-17.35 5.638V7.008c0-.103-.008-.204-.023-.303L21 20.687 2.023 6.704z"></path></svg>
        </a>
      </div>
    </div>
  )
}

function Logo(props) {
  // const logoEl = useRef(null);
  // const onButtonClick = () => {
  //   // `current` points to the mounted text input element
  //   var color = tinycolor("red");
  //   console.log('color:', color)
  //   logoEl.current.focus();
  //   dynamics.animate(logoEl.current, {
  //     translateX: 350,
  //     scale: 2,
  //     opacity: 0.5
  //   }, {
  //     type: dynamics.spring,
  //     frequency: 200,
  //     friction: 200,
  //     duration: 1500
  //   })
  // }
  // <img ref={logoEl} onClick={onButtonClick} id='header-logo' className='logo' src={loveBot}/>
  
  return (
    <div id="header-logo">
      {/* <img id='logo' className='logo' src={loveBot}/> */}
      {/* <img id='logo' className='logo' src={robotWhite}/> */}
      {/* <svg id="logo" width="80" height="67" viewBox="0 0 160 134" xmlns="http://www.w3.org/2000/svg"><path d="M24.44 78.157L0 53.53 53.417 0l26.39 26.612L106.38 0l53.482 53.614L136.25 77.31l-29.312-29.2-26.46 26.946-26.548-26.58-29.49 29.68zm5.335 5.375l50.033 50.415 51.108-51.286-23.775-23.684-26.712 26.72-26.372-26.404-24.28 24.24z" fill="white" fillRule="evenodd"></path></svg> */}
      <svg id="logo" width="92" height="92" x="0px" y="0px" viewBox="0 0 512.011 512.011"  version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g><g >
          <g>
              <path d="M461.505,386.444c-2.823-2.79-6.032-5.16-9.529-7.038c0.156-0.97,0.255-1.948,0.296-2.929     c-0.033-10.813-6.868-20.435-17.067-24.028v-35.706c-0.028-23.553-19.114-42.639-42.667-42.667h-51.2v-17.067h17.067     c17.053-0.023,32.458-10.187,39.189-25.856c25.707-2.534,45.493-23.834,46.128-49.658s-18.08-48.071-43.632-51.865     C391.464,53.68,325.355-2.528,249.005,1.173C178.401,5.247,120.866,59.333,112.44,129.551     c-25.688,3.548-44.661,25.752-44.156,51.68s20.325,47.378,46.132,49.924c6.731,15.669,22.136,25.833,39.189,25.856h17.067v17.067     h-51.2c-23.553,0.028-42.639,19.114-42.667,42.667v35.706c-10.199,3.593-17.033,13.215-17.067,24.028     c0.041,0.981,0.14,1.959,0.296,2.929c-3.497,1.878-6.706,4.248-9.529,7.038c-9.287,9.279-12.191,23.179-7.396,35.4     c1.491,4.471,6.325,6.887,10.796,5.396s6.887-6.325,5.396-10.796c-3.659-8.246-0.045-17.903,8.129-21.72     c9.93,9.808,25.903,9.805,35.828-0.009c8.071,3.916,11.644,13.48,8.118,21.729c-0.965,2.892-0.313,6.08,1.71,8.361     c2.023,2.282,5.109,3.311,8.096,2.7s5.422-2.769,6.386-5.661c4.795-12.221,1.891-26.121-7.396-35.4     c-2.823-2.79-6.032-5.16-9.529-7.038c0.156-0.97,0.255-1.948,0.296-2.929c-0.033-10.813-6.868-20.435-17.067-24.028v-35.706     c0.015-14.132,11.468-25.585,25.6-25.6h51.2v102.4c0.033,10.813,6.868,20.435,17.067,24.027v86.906     c0,4.713,3.82,8.533,8.533,8.533h25.6c13.482-0.037,26.148-6.468,34.133-17.331c7.985,10.863,20.651,17.294,34.133,17.331h25.6     c4.713,0,8.533-3.821,8.533-8.533v-86.906c10.199-3.592,17.033-13.214,17.067-24.028v-102.4h51.2     c14.132,0.015,25.585,11.468,25.6,25.6v35.706c-10.199,3.593-17.033,13.215-17.067,24.028c0.041,0.981,0.14,1.959,0.296,2.929     c-3.497,1.878-6.706,4.248-9.529,7.037c-9.287,9.279-12.191,23.179-7.396,35.4c0.965,2.892,3.399,5.05,6.386,5.661     c2.987,0.611,6.073-0.418,8.096-2.7c2.023-2.282,2.674-5.469,1.71-8.361c-3.659-8.246-0.045-17.903,8.129-21.72     c9.93,9.808,25.903,9.805,35.828-0.009c8.071,3.916,11.644,13.48,8.118,21.729c-0.965,2.892-0.313,6.08,1.71,8.361     c2.023,2.282,5.109,3.311,8.096,2.7c2.987-0.611,5.422-2.769,6.386-5.661C473.696,409.623,470.792,395.723,461.505,386.444z      M401.072,147.289c15.031,3.869,25.553,17.401,25.6,32.922c-0.047,15.521-10.569,29.052-25.6,32.922V147.289z M110.939,149.931     v63.201c-15.031-3.869-25.553-17.401-25.6-32.922c0.046-15.572,10.633-29.135,25.727-32.961     C111.05,148.151,110.939,149.027,110.939,149.931z M85.339,385.011c-4.713,0-8.533-3.82-8.533-8.533     c0.006-4.71,3.823-8.527,8.533-8.533c4.713,0,8.533,3.82,8.533,8.533S90.051,385.011,85.339,385.011z M221.872,495.944h-17.067     v-25.6h42.667C247.456,484.476,236.004,495.928,221.872,495.944z M247.472,453.277h-42.667v-34.133h42.667V453.277z      M307.205,495.944h-17.067c-14.132-0.015-25.585-11.468-25.6-25.6h42.667V495.944z M307.205,453.277h-42.667v-34.133h42.667     V453.277z M324.272,393.544c-0.006,4.71-3.823,8.527-8.533,8.533H196.272c-4.71-0.006-8.527-3.823-8.533-8.533v-8.533h136.533     V393.544z M324.272,367.944H187.739v-17.067h136.533V367.944z M324.272,333.811H187.739v-76.8h136.533V333.811z M153.605,239.944     c-14.132-0.015-25.585-11.468-25.6-25.6v-64.413c-1.148-69.408,52.514-127.435,121.8-131.708c2.092-0.1,4.176-0.15,6.254-0.15     c70.672,0.032,127.946,57.332,127.946,128.004v68.267c-0.015,14.132-11.468,25.585-25.6,25.6H153.605z M426.672,385.011     c-4.713,0-8.533-3.82-8.533-8.533s3.82-8.533,8.533-8.533s8.533,3.82,8.533,8.533     C435.199,381.188,431.382,385.004,426.672,385.011z" data-original="#000000" className="active-path" fill="#FFFFFF"/>
            <g>
              <path d="M285.872,316.744c11.782,0,21.333-9.551,21.333-21.333s-9.551-21.333-21.333-21.333     c-11.782,0-21.333,9.551-21.333,21.333C264.552,307.187,274.096,316.73,285.872,316.744z M285.872,291.144     c2.356,0,4.267,1.91,4.267,4.267c0,2.356-1.91,4.267-4.267,4.267c-2.356,0-4.267-1.91-4.267-4.267     C281.607,293.055,283.516,291.145,285.872,291.144z" data-original="#000000" className="active-path" fill="#FFFFFF"/>
              <path d="M256.005,26.611c-56.554,0-102.4,45.846-102.4,102.4c0.065,56.527,45.873,102.335,102.4,102.4     c56.554,0,102.4-45.846,102.4-102.4S312.559,26.611,256.005,26.611z M256.005,214.344c-47.128,0-85.333-38.205-85.333-85.333     c0.052-47.107,38.227-85.281,85.333-85.333c47.128,0,85.333,38.205,85.333,85.333S303.134,214.344,256.005,214.344z" data-original="#000000" className="active-path" fill="#FFFFFF"/>
              <path d="M311.943,82.769c-9.102-7.681-21.151-10.912-32.875-8.817c-8.789,1.479-16.873,5.737-23.063,12.15     c-6.19-6.413-14.273-10.671-23.063-12.15c-11.722-2.086-23.766,1.144-32.871,8.817c-15.663,13.771-16.379,40.271-1.904,65.725     c10.867,20.487,38.196,38.625,53.521,47.612c2.666,1.561,5.967,1.561,8.633,0c15.325-8.987,42.654-27.125,53.4-47.396     C328.318,123.04,327.601,96.54,311.943,82.769z M298.768,140.493c-5.996,11.305-21.817,25.434-42.763,38.301     c-20.946-12.871-36.775-27.008-42.883-38.517c-10.321-18.159-11.054-36.538-1.779-44.692c4.118-3.411,9.321-5.234,14.667-5.142     c1.378,0,2.753,0.114,4.113,0.341c7.953,1.421,14.783,6.479,18.462,13.671c1.643,2.497,4.432,4,7.421,4s5.778-1.503,7.421-4     c3.679-7.192,10.51-12.25,18.462-13.671c6.662-1.226,13.526,0.528,18.783,4.8C309.943,103.739,309.209,122.118,298.768,140.493z" data-original="#000000" className="active-path" fill="#FFFFFF"/>
            </g>
          </g>
        </g></g> 
      </svg>

    </div>
  )
}

function Index(props) {
  return (
    <div className='index'>
      <div className='index-title'>Lead Developer</div>
      <a href='#image-archive'>Medical Image Archive</a>
      <div className='index-subtitle'>Scaled to 100 million images</div>
      <a href='#ros-rover'>Teleoperated, 6-wheeled, 1-armed robot</a>
      <div className='index-subtitle'>Finalist at international robotics competition in Utah</div>
      <a href='#deepscatter'>Deep Learning Web App</a>
      <div className='index-subtitle'>A.I. Grant Finalist</div>
      <a href='#matkit'>MatKit-Image Analysis Framework</a>
      <div className='index-subtitle'>Mary Jo Haddad SickKids Innovation Award</div>
      {/* <a href='#cell-bio'>Microscopy Image Analysis</a> */}
      {/* <div className='index-subtitle'>Contributed to <em>n</em> research papers</div> */}

      <div className='index-2nd-title'>Contributor</div>
      <div style={{paddingTop:'3px'}}><a href='#breqwatr'>Breqwatr private cloud</a></div>
      <div style={{paddingTop:'3px'}}><a href='#rareconnect'>RareConnect social network</a></div>
      <div style={{paddingTop:'3px'}}><a href='#penguin'>Penguin ASI robotics</a></div>
      <div style={{paddingTop:'3px'}}><a href='#senseact'>SenseAct robot learning framework</a></div>
      <div style={{paddingTop:'3px'}}><a href='#cell-bio'>Microscopy Image Analysis</a></div>
    </div>
  )
}

function Gallery(props) {
  return (
    <div className='gallery'>
      <DateDivider year='Lead Developer'/>
      <div className='gallery-section'>
        <div className='card-section-title-container'>
          {/* <div className='card-section-title'>Lead Developer</div> */}
        </div>
        <span className='card-group'>
          <Card
            subtitle="Scaled to 100 million images"
            title="Medical Image Search"
            desc="Accomplished with distributed processing across 200 servers."
            src={imageArchiveImage20}
            anchor="#image-archive"
            />
          <Card
            subtitle="SickKids Innovation Award"
            title="Image Analysis Framework"
            desc="Winner of the Mary Jo Haddad SickKids Innovation Award."
            src={matkitCellsImage}
            anchor="#matkit"
            />
        </span>
        <span className='card-group'>
          <Card
            subtitle="Finalist in Robotics Competition"
            title='Teleoperated Mars Rover'
            desc="Depth camera, self-driving, and robot arm."
            src={rosRoverImage}
            anchor="#ros-rover"
            styleImg={{transform: 'scale(1.15, 1.15) translateY(5%) translateX(4%)'}}
          />
          <Card
            subtitle="A.I. Grant Finalist"
            title="Deep Learning Web App"
            desc="Compared machine learning and manifold learning algorithms."
            src={deepscatterImage33}
            anchor="#deepscatter"
          />
        </span>
      </div>
      <DateDivider year='Contributor'/>
      <div className='gallery-section'>
        <div className='card-section-title-container'>
          {/* <div className='card-section-title' style={{top: '-5px'}}>Contributor</div> */}
        </div>
        <span className='card-group'>
          <Card
            title="Datacentre Platform"
            desc="Contributed to a privace cloud appliance."
            src={breqwatrCardImage}
            anchor="#breqwatr"
            />
          <Card
            title="Research Data Analysis"
            desc="Contributed to academic research papers."
            src={cellGrowthPlot}
            styleImg={{transform: 'scale(2, 2) scaleX(-1) translateY(-12%) translateX(4%)'}}
            anchor="#cell-bio"
          />
        </span>
        <span className='card-group'>
          <Card
            title="Reinforcement Learning"
            desc="Contributed to a reinforcement learning framework for physical robots."
            src={senseactArmImage}
            anchor="#senseact"
          />
          <Card
            title="Global Social Network"
            desc="Contributed to a social network for rare disease patients."
            src={rareconnectImage}
            anchor="#rareconnect"
            styleImg={{objectFit: 'unset'}}
          />
        </span>
      </div>
    </div>
  )
}

function Card(props) {
  return (
    <div className="card-container">
      <div className="card-title">{props.title}</div>
      <div className='card-subtitle'>{props.subtitle}</div>
      <a className="card-wrap" href={props.anchor} style={props.styleWrap}>
        <img className="card-img" src={props.src} style={props.styleImg}/>
        <div className="card-description_layer">
          <p className="card-description">{props.desc}</p>
        </div>
      </a>
    </div>
  )
}

function DateDivider(props) {
  const alignRight = props.alignRight ? '-right' : ''
  return (
    <div className={`date-divider-text${alignRight}`}>
      {props.year}
      <div className={`date-divider${alignRight}`}/>
    </div>
  )
}

  function Section(props) {
  return (
    <div id={props.id} className='section'>
      <div className='section-left'>
        <h1 className='section-title'>
          {props.title}
        </h1>
        <div className='section-description'>
          {props.description}
        </div>
      </div>
      <div className='section-right'>
        {props.children}
      </div>
    </div>
  )
  }

function Divider(props){
  return <span className='frame-text-dividers'>|</span>
}

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

function Frame(props) {
  const [width, height] = useWindowSize();
  const frameFontSize = width > 0 ? Math.min(width/70, 15) : 0
  const frameIconHeight = width > 0 ? Math.min(width/50, 25) : 0

  // Interleave tool names with html divider
  const toolList = [];
  if (props.toolList) {
    for (var i = 0; i < props.toolList.length; i++) {
      // note: we add a key prop here to allow react to uniquely identify each
      // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
      toolList.push(<span key={i}>{props.toolList[i]}</span>);
      toolList.push(<Divider key={`div${i}`} />);
    }
  }
  toolList.pop(); // Remove the <Divider/> that is after the last list item

  // Set 0px border radius on the first child element in the frame becuase it looks nice
  const children = props.hasOwnProperty('children') && props.children !== undefined ? (Array.isArray(props.children) ? props.children : [props.children]) : []
  const newChildren = children.map((child, index) => {
    const existingStyle = child.props.hasOwnProperty('style') ? child.props.style : {}
    const borderRadius = index === 0 ? '0px' : undefined
    return React.cloneElement(child, {
      style: {borderTopLeftRadius: borderRadius, borderTopRightRadius: borderRadius, ...existingStyle },
      key: index,
    })
  })

  return (
    <div className='frame'>
      <div className='frame-top'>
        <span className='frame-text' style={{fontSize:frameFontSize}}>{toolList}</span>
        { props.webLink ?
          <a href={props.webLink} target="_blank">
          <svg className='frame-link' style={{height:frameIconHeight}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"/></svg>
        </a>
        : null
        }
        { props.githubLink ?
          <a href={props.githubLink} target="_blank">
          <svg className='frame-link' style={{height:frameIconHeight}} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"/></svg>
        </a>
        : null
        }
      </div>
      <ColoredScrollbars style={{ width: '100%', height: '69vh'}}>
        {newChildren}
      </ColoredScrollbars>
  </div>
  )
}

function Main(props) {
  return (
    <div className='main'>
      <Header/>
      <Gallery/>
      <Portfolio/>
      <Footer/>
      <Animations/>
    </div>
  )
}

function Animations(props) {
  return (
    <div>
      <svg id="clip-paths" width="0" height="0" version="1.1" xmlns="http://www.w3.org/2000/svg"><g></g></svg>
      <svg id="page-stripes" className="full-size" width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg"></svg>
      <div id="intro" className="full-size">
        <div id="logo-container" className="full-size">
          {/*<svg viewBox="0 0 640 536" version="1.1" xmlns="http://www.w3.org/2000/svg">
             <path transform="scale(4 4)" d="M24.44 78.157L0 53.53 53.417 0l26.39 26.612L106.38 0l53.482 53.614L136.25 77.31l-29.312-29.2-26.46 26.946-26.548-26.58-29.49 29.68zm5.335 5.375l50.033 50.415 51.108-51.286-23.775-23.684-26.712 26.72-26.372-26.404-24.28 24.24z" fill="#101214" fillRule="evenodd"/> */}
          <svg x="0px" y="0px" viewBox="0 0 512.011 512.011" width="512px" height="512px"  version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g><g transform="translate(0 -1)">
              <g>
                <g>
                  <path d="M461.505,386.444c-2.823-2.79-6.032-5.16-9.529-7.038c0.156-0.97,0.255-1.948,0.296-2.929     c-0.033-10.813-6.868-20.435-17.067-24.028v-35.706c-0.028-23.553-19.114-42.639-42.667-42.667h-51.2v-17.067h17.067     c17.053-0.023,32.458-10.187,39.189-25.856c25.707-2.534,45.493-23.834,46.128-49.658s-18.08-48.071-43.632-51.865     C391.464,53.68,325.355-2.528,249.005,1.173C178.401,5.247,120.866,59.333,112.44,129.551     c-25.688,3.548-44.661,25.752-44.156,51.68s20.325,47.378,46.132,49.924c6.731,15.669,22.136,25.833,39.189,25.856h17.067v17.067     h-51.2c-23.553,0.028-42.639,19.114-42.667,42.667v35.706c-10.199,3.593-17.033,13.215-17.067,24.028     c0.041,0.981,0.14,1.959,0.296,2.929c-3.497,1.878-6.706,4.248-9.529,7.038c-9.287,9.279-12.191,23.179-7.396,35.4     c1.491,4.471,6.325,6.887,10.796,5.396s6.887-6.325,5.396-10.796c-3.659-8.246-0.045-17.903,8.129-21.72     c9.93,9.808,25.903,9.805,35.828-0.009c8.071,3.916,11.644,13.48,8.118,21.729c-0.965,2.892-0.313,6.08,1.71,8.361     c2.023,2.282,5.109,3.311,8.096,2.7s5.422-2.769,6.386-5.661c4.795-12.221,1.891-26.121-7.396-35.4     c-2.823-2.79-6.032-5.16-9.529-7.038c0.156-0.97,0.255-1.948,0.296-2.929c-0.033-10.813-6.868-20.435-17.067-24.028v-35.706     c0.015-14.132,11.468-25.585,25.6-25.6h51.2v102.4c0.033,10.813,6.868,20.435,17.067,24.027v86.906     c0,4.713,3.82,8.533,8.533,8.533h25.6c13.482-0.037,26.148-6.468,34.133-17.331c7.985,10.863,20.651,17.294,34.133,17.331h25.6     c4.713,0,8.533-3.821,8.533-8.533v-86.906c10.199-3.592,17.033-13.214,17.067-24.028v-102.4h51.2     c14.132,0.015,25.585,11.468,25.6,25.6v35.706c-10.199,3.593-17.033,13.215-17.067,24.028c0.041,0.981,0.14,1.959,0.296,2.929     c-3.497,1.878-6.706,4.248-9.529,7.037c-9.287,9.279-12.191,23.179-7.396,35.4c0.965,2.892,3.399,5.05,6.386,5.661     c2.987,0.611,6.073-0.418,8.096-2.7c2.023-2.282,2.674-5.469,1.71-8.361c-3.659-8.246-0.045-17.903,8.129-21.72     c9.93,9.808,25.903,9.805,35.828-0.009c8.071,3.916,11.644,13.48,8.118,21.729c-0.965,2.892-0.313,6.08,1.71,8.361     c2.023,2.282,5.109,3.311,8.096,2.7c2.987-0.611,5.422-2.769,6.386-5.661C473.696,409.623,470.792,395.723,461.505,386.444z      M401.072,147.289c15.031,3.869,25.553,17.401,25.6,32.922c-0.047,15.521-10.569,29.052-25.6,32.922V147.289z M110.939,149.931     v63.201c-15.031-3.869-25.553-17.401-25.6-32.922c0.046-15.572,10.633-29.135,25.727-32.961     C111.05,148.151,110.939,149.027,110.939,149.931z M85.339,385.011c-4.713,0-8.533-3.82-8.533-8.533     c0.006-4.71,3.823-8.527,8.533-8.533c4.713,0,8.533,3.82,8.533,8.533S90.051,385.011,85.339,385.011z M221.872,495.944h-17.067     v-25.6h42.667C247.456,484.476,236.004,495.928,221.872,495.944z M247.472,453.277h-42.667v-34.133h42.667V453.277z      M307.205,495.944h-17.067c-14.132-0.015-25.585-11.468-25.6-25.6h42.667V495.944z M307.205,453.277h-42.667v-34.133h42.667     V453.277z M324.272,393.544c-0.006,4.71-3.823,8.527-8.533,8.533H196.272c-4.71-0.006-8.527-3.823-8.533-8.533v-8.533h136.533     V393.544z M324.272,367.944H187.739v-17.067h136.533V367.944z M324.272,333.811H187.739v-76.8h136.533V333.811z M153.605,239.944     c-14.132-0.015-25.585-11.468-25.6-25.6v-64.413c-1.148-69.408,52.514-127.435,121.8-131.708c2.092-0.1,4.176-0.15,6.254-0.15     c70.672,0.032,127.946,57.332,127.946,128.004v68.267c-0.015,14.132-11.468,25.585-25.6,25.6H153.605z M426.672,385.011     c-4.713,0-8.533-3.82-8.533-8.533s3.82-8.533,8.533-8.533s8.533,3.82,8.533,8.533     C435.199,381.188,431.382,385.004,426.672,385.011z" data-original="#000000" className="active-path" fill="#FFFFFF"/>
                  <path d="M285.872,316.744c11.782,0,21.333-9.551,21.333-21.333s-9.551-21.333-21.333-21.333     c-11.782,0-21.333,9.551-21.333,21.333C264.552,307.187,274.096,316.73,285.872,316.744z M285.872,291.144     c2.356,0,4.267,1.91,4.267,4.267c0,2.356-1.91,4.267-4.267,4.267c-2.356,0-4.267-1.91-4.267-4.267     C281.607,293.055,283.516,291.145,285.872,291.144z" data-original="#000000" className="active-path" fill="#FFFFFF"/>
                  <path d="M256.005,26.611c-56.554,0-102.4,45.846-102.4,102.4c0.065,56.527,45.873,102.335,102.4,102.4     c56.554,0,102.4-45.846,102.4-102.4S312.559,26.611,256.005,26.611z M256.005,214.344c-47.128,0-85.333-38.205-85.333-85.333     c0.052-47.107,38.227-85.281,85.333-85.333c47.128,0,85.333,38.205,85.333,85.333S303.134,214.344,256.005,214.344z" data-original="#000000" className="active-path" fill="#FFFFFF"/>
                  <path d="M311.943,82.769c-9.102-7.681-21.151-10.912-32.875-8.817c-8.789,1.479-16.873,5.737-23.063,12.15     c-6.19-6.413-14.273-10.671-23.063-12.15c-11.722-2.086-23.766,1.144-32.871,8.817c-15.663,13.771-16.379,40.271-1.904,65.725     c10.867,20.487,38.196,38.625,53.521,47.612c2.666,1.561,5.967,1.561,8.633,0c15.325-8.987,42.654-27.125,53.4-47.396     C328.318,123.04,327.601,96.54,311.943,82.769z M298.768,140.493c-5.996,11.305-21.817,25.434-42.763,38.301     c-20.946-12.871-36.775-27.008-42.883-38.517c-10.321-18.159-11.054-36.538-1.779-44.692c4.118-3.411,9.321-5.234,14.667-5.142     c1.378,0,2.753,0.114,4.113,0.341c7.953,1.421,14.783,6.479,18.462,13.671c1.643,2.497,4.432,4,7.421,4s5.778-1.503,7.421-4     c3.679-7.192,10.51-12.25,18.462-13.671c6.662-1.226,13.526,0.528,18.783,4.8C309.943,103.739,309.209,122.118,298.768,140.493z" data-original="#000000" className="active-path" fill="#FFFFFF"/>
                </g>
              </g>
            </g></g> 
          </svg>
        </div>
        <svg id="stripes" className="full-size" width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg"></svg>
      </div>
    </div>
  )
}
function Portfolio(props) {
  return (
    <div className='portfolio'>
    <DateDivider year='2019–2020'/>
    <Section
        id='image-archive'
        title='Massive Scale'
        description='At the SickKids Research Institute I lead the developement of a medical Picture Archive System. The pictures are used by A.I. researchers creating models of disease. The archive contains 100 million images and 10 billion metadata tags. To protect personal health information (PHI) we anonymize radiology reports and PHI burned into the image pixels. Our algorithm automates the process with a high degree of accuracy.'
      >
        <Frame
          // webLink=''
          toolList={['ElasticSearch', 'Python', 'Ubuntu', 'High Performance Computing']}
        >
          <ImageItem
            src={imageArchiveImage50}
          />
        </Frame>
      </Section>
    <Section
        id='rareconnect'
        title='Full Stack'
        description="At the SickKids Research Institute I contributed to the RareConnect social network for rare disease patients. I worked on all technical aspects of the project with major contributions to the areas of microservices, testing, and user experience (UX)."
      >
        <Frame
          webLink='https://www.rareconnect.org/'
          toolList={['Javascript', 'React', 'PostgreSQL', 'Docker', 'Internationalization']}
        >
          <div className='markdown-content'>
          <ImageItem
            src={rareconnectImage}
            style={{ /* Make this image flush with the top and sides of the Frame */
              width: 'calc(100% + 30px)',
              marginLeft: '-15px',
              marginTop: '-1px',
              borderTopLeftRadius: '0px',
              borderTopRightRadius: '0px',
            }}
          />
          <div className='content-title'>UX Redesign — Social Post Editor</div>
          <div className='content-text'>
            The social post editor that I designed and implemented supports WYSIWYG formatting and Markdown formatting. Additional features include mentions, notifications, and mobile & desktop layouts. Posts are <b>automatically translated between 12 languages</b> including right-to-left written languages.
          </div>
          <ImageItem
            src={rareconnectWysiwygImage}
            style={{ /* Make this image smaller and centered */
              width: '80%',
              margin: '0 auto',
              display: 'block',
              borderRadius: '5px',
            }}
            />
            </div>
        </Frame>
      </Section>
      <DateDivider year='2018'/>
      <Section
        id='deepscatter'
        title='Deep Learning'
        description={['While mentoring a brilliant student coming from their high-school Co-op education program we built a web app that lets users experiment with popular machine learning models and dimensionality reduction algorithms on uploaded images. The project was a finalist in the ', <a key='deepscatter-section-link' className='aigrant-section-link' href='https://aigrant.org/' target='_blank'>AI Grant</a>, ' global competition.']}
        >
        <Frame
          githubLink='https://github.com/danielsnider/Deep-Scatter'
          toolList={['Numpy', 'Pandas', 'Scikit-Learn', 'Matplotlib', 'Flask']}
        >
          <ImageItem
            src={deepscatterImage}
          />
        </Frame>
      </Section>
      <Section
        id='matkit'
        title='Computer Vision'
        description='While contributing to cell biology research at the SickKids Research Institute I built a computer vision desktop application for scientists. The application is called Matkit-Image and uses computer vision to measure the dynamics of cells seen under a microscope. This project won the Mary Jo Haddad SickKids Innovation Award.'
      >
        <Frame
          // githubLink='https://github.com/danielsnider/??'
          toolList={['Matlab', 'Morphology', 'Adaptive Thresholding', 'Segmentation']}
        >
          <ImageItem
            src={matkitMontage}
          />
        </Frame>
      </Section>
      <Section
        id='senseact'
        title='Reinforcement Learning'
        description={['For Toronto startup, ', <a key='kindred-section-link' className='section-link' href='https://www.kindred.ai/' target='_blank'>Kindred AI</a>, ', I alpha tested their release of ', <a key='sensact-section-link' className='section-link' href='https://www.kindred.ai/senseact' target='_blank'>SenseAct</a>,', a machine learning framework for real-time control of robotic components. I presented demonstrations at the Toronto Machine Learning Summit of SenseAct controlling iRobot hardware and a 6-axis robot arm.']}
      >
        <Frame
          webLink='https://www.kindred.ai/senseact'
          toolList={['OpenAI Gym', 'Numpy', 'Real-Time Computing']}
        >
          <ImageItem
            src={senseactDiagram}
          />
          <ImageItem
            src={senseactPresentation}
          />
        </Frame>
      </Section>
      <DateDivider year='2017'/>
      <Section
        id='ros-rover'
        title='Robotics'
        description={['I lead the software development of a self-driving, 6-wheeled robotic rover with a robot arm and depth camera. As an engineering design team at Ryerson University, we competed in the ', <a key='kindred-section-link' className='section-link' href='http://urc.marssociety.org/' target='_blank'>University Rover Challenge</a>, ' at the Mars Desert Research Station, in Utah, USA. In our first year we placed 21st out of 82 teams from 13 countries.']}
      >
        <Frame
          githubLink='https://github.com/danielsnider/ros-rover'
          toolList={['ROS', 'OpenCV', 'Self-Driving', 'Point Clouds', 'Embedded Computing']}
        >
          <MarkdownItem
            src={rosRoverMarkdown}
          />
        </Frame>
      </Section>
      <Section
        id='breqwatr'
        title='DevOps'
        description='At Breqwatr Inc. I contributed to the OpenStack-based private cloud with the goal of helping IT departments modernize their datacentre. I made major contributions to the areas of network booting (PXE), configuration management (Chef), fault-tolerant coordination (Zookeeper), load-balancing (HAProxy), and health monitoring (custom). '
      >
        <Frame
          webLink='https://breqwatr.com/'
          toolList={['OpenStack', 'HAProxy', 'RabbitMQ', 'Chef', 'Zookeeper', 'MySQL Cluster']}
        >
          <ImageItem
            src={breqwatrMontage}
          />
        </Frame>
      </Section>
      <DateDivider year='2016'/>
      <Section
        id='cell-bio'
        title='Data Science'
        description='Working with scientists at the Peter Gilgan Centre For Research and Learning (SickKids), I contributed statistical analysis derived from high throughput microscopy of cell biology experiments in the areas of cancer and diabetes research.'
      >
        <Frame
          githubLink='https://github.com/danielsnider/cell-bio'
          toolList={['R²', 'p–value', 'Computer Vision', 'Variance', 'Normalization']}
        >
          <MarkdownItem
            src={cellBioMarkdown}
          />
        </Frame>
      </Section>
      {/* <Section
        id='object-tracking'
        title='Computer Vision'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum ultrices libero, id venenatis quam facilisis et. Mauris ultrices volutpat commodo. Proin at fringilla lectus. Pellentesque aliquet mi ac nunc finibus sagittis. Nulla non finibus velit.'
      >
        <Frame
          githubLink='https://github.com/danielsnider/object-tracking'
          toolList={['OpenCV', 'Raspberry Pi', 'AMQP', 'Websockets']}
        />
        <ImageItem
          src={objectTrackingImage}
        />
      </Section> */}
    </div>
  )
}

function ImageItem(props) {
  return (
    <div className='image-item'>
      <img id={props.id} src={props.src} style={props.style} className='image-img' />
    </div>
  )
}

function IframeItem(props) {
  /*
    1. To embed any webpage into an iframe these scripts are needed in index.html
    <script src="https://unpkg.com/@ungap/custom-elements-builtin"></script>
    <script type="module" src="https://unpkg.com/x-frame-bypass"></script>
    From: https://github.com/niutech/x-frame-bypass

    2. Add item data to a content section
      rosRover: {
        id: 'ros-rover',
        title: 'Mars Rover',
        src: 'https://github.com/danielsnider/ros-rover/blob/master/README.md',
        description: 'How to build a one-armed, self-driving, University Rover Challenge robot with ROS',
      },

    3. Then use this component:
    <IframeItem {...sections.robotics.items.rosRover}/>
  */
  return (
    <div className='image-item' id={props.id}>
      <iframe width='800' height='700' is="x-frame-bypass" src={props.src}></iframe>
    </div>
  )
}

// function PdfItem(props) {
//   /*
//     1. Do the import the file
//     import { Document, Page, pdfjs } from 'react-pdf'
//     pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
//     import objectTrackingPdf from './static/object-tracking.pdf'

//     2. Add item data to a content section
//     objectTrackingPdf: {
//       id: 'object-tracking',
//       title: 'Object Tracking',
//       file: objectTrackingPdf,
//     }

//     3. Then use this component:
//     <PdfItem {...sections.computerVision.items.objectTrackingPdf}/>
//   */
//   return (
//     <div className='image-item' id={props.id} className='image-img'>
//       <Document file={props.file} >
//         <Page pageNumber={1} />
//       </Document>
//     </div>
//   )
// }

function MarkdownItem(props) {
  const getMarkdownText = () => {
    var rawMarkup = marked(props.src)
    return { __html: rawMarkup }
  }

  return (
    <div className='markdown-content-container'>
      <div className='markdown-content' dangerouslySetInnerHTML={getMarkdownText()} />
    </div>
  )
}

function Footer(props) {
  return (
    <div className='footer'>
      <div className='slogan1'>
        When I start something,
      </div>
      <div className='slogan2'>
        I do it with everything I have. Passion, love, and devotion to name a few.
      </div>
      {/* <Header/> */}
      <div className='made-using'>
        Website made using <a className='github-link' href='https://reactjs.org/docs/hooks-intro.html'>React Hooks</a> and <a className='github-link' href='https://parceljs.org/'>Parcel</a>.
      </div>
      {/* <div className='fork-on'>
        Fork on <a className='github-link' href='https://github.com/danielsnider/ds-website'>github</a>.
      </div> */}
    </div>
  )
}

var mountNode = document.getElementById("app")
ReactDOM.render(<Main name="Daniel" />, mountNode)

































function createEl(template) {
  var el = document.createElement('div');
  el.innerHTML = template.trim();
  return el.firstChild;
}

function createSvgEl(template) {
  var el = createEl('\n    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' + template.trim() + '</svg>\n  ');
  return el;
}

function createSvgChildEl(template) {
  return createSvgEl(template).firstChild;
}

function createLine(options) {
  var el = createSvgChildEl('\n    <rect x="' + options.x + '" y="' + options.y + '" width="' + options.width + '" height="' + options.height + '" fill="' + options.color + '">\n  ');
  return el;
}

var pageEl = document.querySelector('#page');
var introEl = document.querySelector('#intro');
var stripesEl = document.querySelector('#stripes');
var logoContainer = document.querySelector('#logo-container');
var logo = logoContainer.querySelector('svg');
var logoPath = logo.querySelector('path');
var windowWidth = document.body.clientWidth;
var windowHeight = document.body.clientHeight;


// animate stripes
function _animateStripes(container) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  options.count = options.count || 10;
  options.sizeRatio = options.sizeRatio || 1;
  var stripes = [];

  var _loop = function _loop(i) {
    var color = void 0;
    if (options.color) {
      color = options.color;
    } else {
      color = tinycolor('hsl(' + Math.round(Math.random() * 360) + ', 80%, 65%)').toRgbString();
    }
    var baseWidth = Math.max(windowWidth, 1000);
    var width = Math.round(baseWidth / 10 + Math.random() * baseWidth / 10) * options.sizeRatio;
    var height = Math.round(Math.random() * 10 + 2) * options.sizeRatio;
    var point = void 0;
    if (options.point) {
      point = {
        x: Math.round(options.point.x - width / 2 + Math.random() * 200 - 100),
        y: Math.round(options.point.y - height / 2 + Math.random() * 50 - 25)
      };
    } else {
      point = {
        x: Math.round((windowWidth + width) * Math.random() - width),
        y: Math.round(windowHeight * Math.random())
      };
    }
    var lineOptions = {
      x: point.x,
      y: point.y,
      width: width,
      height: height,
      color: color
    };
    var lineEl = createLine(lineOptions);
    lineEl.style.display = 'none';
    container.appendChild(lineEl);

    dynamics.setTimeout(function () {
      lineEl.style.display = 'block';

      dynamics.setTimeout(function () {
        lineOptions.x += Math.random() * 100 - 50;
        lineOptions.y += Math.random() * 20 - 10;
        lineEl.setAttribute('x', lineOptions.x);
        lineEl.setAttribute('y', lineOptions.y);

        var newLineOptions = options.transform({
          width: lineOptions.width,
          height: lineOptions.height
        });
        lineEl.setAttribute('width', newLineOptions.width);
        lineEl.setAttribute('height', newLineOptions.height);

        dynamics.setTimeout(function () {
          container.removeChild(lineEl);
        }, options.delay('hide', i));
      }, options.delay('transform', i));
    }, options.delay('show', i));

    stripes.push(lineEl);
  };

  for (var i = 0; i < options.count; i++) {
    _loop(i);
  }
  return stripes;
}
function animateBlackStripes(container) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  options.sizeRatio = 3;
  options.color = '#101214';
  options.delay = function (type, i) {
    if (type === 'show') {
      if (options.delayShow) {
        return Math.random() * 50;
      }
      return 0;
    } else if (type === 'transform') {
      return Math.random() * 20 + i * 2;
    } else if (type === 'hide') {
      return 100;
    }
  };
  options.transform = function (size) {
    return {
      width: size.width / 2,
      height: size.height / 5
    };
  };
  _animateStripes(container, options);
}
function animateColoredStripes(container) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  options.delay = function (type, i) {
    if (type === 'show') {
      return Math.random() * 300;
    } else if (type === 'transform') {
      return Math.random() * 20;
    } else if (type === 'hide') {
      return 100;
    }
  };
  options.transform = function (size) {
    return {
      width: size.width / 2,
      height: size.height / 5
    };
  };
  _animateStripes(container, options);
}

var totalMaskIdx = 0;
function createMasksWithStripes(count, box) {
  var averageHeight = arguments.length <= 2 || arguments[2] === undefined ? 10 : arguments[2];

  var masks = [];
  for (var i = 0; i < count; i++) {
    masks.push([]);
  }
  var maskNames = [];
  for (var _i = totalMaskIdx; _i < totalMaskIdx + masks.length; _i++) {
    maskNames.push('clipPath' + _i);
  }
  totalMaskIdx += masks.length;
  var maskIdx = 0;
  var x = 0;
  var y = 0;
  var stripeHeight = averageHeight;
  while (true) {
    var w = Math.max(stripeHeight * 10, Math.round(Math.random() * box.width));
    masks[maskIdx].push('\n      M ' + x + ',' + y + ' L ' + (x + w) + ',' + y + ' L ' + (x + w) + ',' + (y + stripeHeight) + ' L ' + x + ',' + (y + stripeHeight) + ' Z\n    ');

    maskIdx += 1;
    if (maskIdx >= masks.length) {
      maskIdx = 0;
    }

    x += w;
    if (x > box.width) {
      x = 0;
      y += stripeHeight;
      stripeHeight = Math.round(Math.random() * averageHeight + averageHeight / 2);
    }
    if (y >= box.height) {
      break;
    }
  }

  masks.forEach(function (rects, i) {
    var el = createSvgChildEl('<clipPath id="' + maskNames[i] + '">\n      <path d="' + rects.join(' ') + '" fill="white"></path>\n    </clipPath>');
    document.querySelector('#clip-paths g').appendChild(el);
  });

  return maskNames;
}


function cloneAndStripeElement(element, clipPathName, parent) {
  var el = element.cloneNode(true);
  var box = element.getBoundingClientRect();
  var parentBox = parent.getBoundingClientRect();
  box = {
    top: box.top - parentBox.top,
    left: box.left - parentBox.left,
    width: box.width,
    height: box.height
  };
  var style = window.getComputedStyle(element);

  dynamics.css(el, {
    position: 'absolute',
    left: Math.round(box.left + window.scrollX),
    top: Math.round(box.top + window.scrollY),
    width: Math.ceil(box.width),
    height: Math.ceil(box.height),
    display: 'none',
    pointerEvents: 'none',
    background: '#101214',
    fontSize: style.fontSize,
    fontFamily: style.fontFamily,
    color: style.color,
    textDecoration: style.textDecoration
  });
  parent.appendChild(el);
  el.style['-webkit-clip-path'] = 'url(/#' + clipPathName + ')';
  el.style['clip-path'] = 'url(/#' + clipPathName + ')';

  return el;
}


var contentEls = [];
var originalContentEls = document.querySelectorAll('#header-content, #content');
(function () {
  var els = originalContentEls;
  var pageBox = pageEl.getBoundingClientRect();
  for (var j = 0; j < els.length; j++) {
    var el = els[j];
    var box = el.getBoundingClientRect();
    var masks = createMasksWithStripes(6, box);
    for (var i = 0; i < masks.length; i++) {
      var clonedEl = cloneAndStripeElement(el, masks[i], pageEl);
      clonedEl.setAttribute('data-idx', i);
      contentEls.push(clonedEl);
      var childrenEls = clonedEl.querySelectorAll('h2, ul > li > a, a.more, h1, p, path');
      for (var k = 0; k < childrenEls.length; k++) {
        var _color = tinycolor('hsl(' + Math.round(Math.random() * 360) + ', 80%, 65%)');
        var rgb = _color.toRgbString();
        dynamics.css(childrenEls[k], {
          color: rgb,
          fill: rgb
        });
      }
    }
    el.style.visibility = 'hidden';
  }
})();


function showContent() {
  var maxDelay = 0;

  var _loop2 = function _loop2(i) {
    var el = contentEls[i];
    var d = 50 + Math.round(Math.random() * 350);
    var transform = {
      translateX: Math.round(Math.random() * 40 - 20)
    };
    var more = el.getAttribute('data-idx') <= 3;
    dynamics.css(el, transform);
    dynamics.setTimeout(function () {
      dynamics.css(el, {
        display: ''
      });
    }, d);
    maxDelay = Math.max(maxDelay, d);
    dynamics.setTimeout(function () {
      dynamics.css(el, {
        translateX: Math.round(transform.translateX / -5)
      });
    }, d + 100);
    dynamics.setTimeout(function () {
      dynamics.css(el, {
        translateX: 0,
        translateY: 0
      });
      if (!more) {
        el.parentNode.removeChild(el);
      }
    }, d + 150);
    if (more) {
      dynamics.setTimeout(function () {
        dynamics.css(el, {
          translateX: Math.round(transform.translateX / -2)
        });
      }, d + 300);
      dynamics.setTimeout(function () {
        el.parentNode.removeChild(el);
      }, d + 550);
    }
  };

  for (var i = 0; i < contentEls.length; i++) {
    _loop2(i);
  }
  dynamics.setTimeout(function () {
    for (var _i2 = 0; _i2 < originalContentEls.length; _i2++) {
      originalContentEls[_i2].style.visibility = 'visible';
    }
  }, maxDelay);
}


// intro
(function () {
  animateBlackStripes(stripesEl, {
    count: 200
  });
  animateColoredStripes(stripesEl, {
    count: 100
  });

  dynamics.css(pageEl, {
    scale: 0.95
  });
  dynamics.animate(pageEl, {
    scale: 1
  }, {
    type: dynamics.easeInOut,
    friction: 500,
    duration: 4000
  });

  dynamics.css(logo, {
    scale: 1
  });
  dynamics.animate(logo, {
    scale: 0.90
  }, {
    duration: 1500,
    type: dynamics.easeOut
  });

  var color = tinycolor('hsl(' + Math.round(Math.random() * 360) + ', 80%, 65%)');
  dynamics.animate(logoPath, {
    fill: color.toRgbString()
  }, {
    duration: 700
  });

  color = tinycolor('hsl(' + Math.round(Math.random() * 360) + ', 80%, 65%)');
  dynamics.animate(logoPath, {
    fill: color.toRgbString()
  }, {
    duration: 700,
    delay: 700
  });

  function animateLogo() {
    dynamics.css(logoContainer, {
      scale: 0.5,
      translateX: Math.random() * 100 - 50
    });

    dynamics.setTimeout(function () {
      dynamics.css(logoContainer, {
        translateX: 10,
        scale: 0.55
      });
    }, 100);

    dynamics.setTimeout(function () {
      dynamics.css(logoContainer, {
        translateX: 0,
        scale: 0.5
      });
    }, 150);
  };

  animateLogo();

  dynamics.setTimeout(function () {
    logoContainer.style.visibility = 'visible';
  }, 1);

  dynamics.setTimeout(function () {
    animateLogo();
    animateBlackStripes(stripesEl, {
      count: 200,
      delayShow: true
    });
    animateColoredStripes(stripesEl, {
      count: 100
    });
  }, 1000);

  dynamics.setTimeout(function () {
    introEl.style.backgroundColor = 'transparent';
    dynamics.css(logoContainer, {
      scale: 1,
      translateX: Math.random() * windowWidth - windowWidth / 2,
      translateY: Math.random() * windowHeight - windowHeight / 2
    });
    showContent();
  }, 1300);

  dynamics.setTimeout(function () {
    dynamics.css(logoContainer, {
      scale: 0.75
    });
  }, 1350);

  dynamics.setTimeout(function () {
    logo.style.display = 'none';
  }, 1400);

})();


// page
(function () {
  var pageStripesEl = document.querySelector('#page-stripes');
  var linkEls = document.querySelectorAll('a');

  function animateCrazyLogo() {
    var el = document.querySelector('#header-logo');
    var box = el.getBoundingClientRect();
    var count = 10 + Math.random() * 10;
    var masks = createMasksWithStripes(count, box, Math.round(100 / count));
    var clonedEls = [];

    for (var i = 0; i < masks.length; i++) {
      var clonedEl = cloneAndStripeElement(el, masks[i], document.body);
      var path = clonedEl.querySelector('path');
      var _color2 = tinycolor('hsl(' + Math.round(Math.random() * 360) + ', 80%, 65%)');
      dynamics.css(path, {
        fill: _color2.toRgbString()
      });
      clonedEls.push(clonedEl);
    }

    var _loop3 = function _loop3(_i3) {
      var clonedEl = clonedEls[_i3];
      var d = Math.random() * 100;

      dynamics.setTimeout(function () {
        clonedEl.style.display = '';
        dynamics.css(clonedEl, {
          translateX: Math.random() * 100 - 50
        });
      }, d);

      dynamics.setTimeout(function () {
        dynamics.css(clonedEl, {
          translateX: Math.random() * 20 - 10
        });
      }, d + 50);

      dynamics.setTimeout(function () {
        dynamics.css(clonedEl, {
          translateX: Math.random() * 5 - 2.5
        });
      }, d + 100);

      dynamics.setTimeout(function () {
        document.body.removeChild(clonedEl);
      }, d + 150);
    };

    for (var _i3 = 0; _i3 < clonedEls.length; _i3++) {
      _loop3(_i3);
    }
  };

  function logoAnimationLoop() {
    dynamics.setTimeout(function () {
      animateCrazyLogo();
      logoAnimationLoop();
    }, 100 + Math.random() * 5000);
  };

  dynamics.setTimeout(logoAnimationLoop, 4000);
  document.querySelector('#header-logo').addEventListener('mouseover', animateCrazyLogo);

  function handleMouseOver(e) {
    var el = e.target;
    while (el && el.tagName.toLowerCase() !== 'a') {
      el = el.parentNode;
    }
    if (!el) {
      return;
    }
    var r = animateLink(el);

    var handleMouseOut = function handleMouseOut(e) {
      el.removeEventListener('mouseout', handleMouseOut);
      r.stop();
    };

    el.addEventListener('mouseout', handleMouseOut);
  }

  function animateLink(el) {
    var animating = true;
    var box = el.getBoundingClientRect();

    var animate = function animate() {
      var masks = createMasksWithStripes(3, box, 3);
      var clonedEls = [];

      for (var i = 0; i < masks.length; i++) {
        var clonedEl = cloneAndStripeElement(el, masks[i], document.body);
        var childrenEls = Array.prototype.slice.apply(clonedEl.querySelectorAll('path'));
        childrenEls.push(clonedEl);
        for (var k = 0; k < childrenEls.length; k++) {
          var _color3 = tinycolor('hsl(' + Math.round(Math.random() * 360) + ', 80%, 65%)');
          var rgb = _color3.toRgbString();
          dynamics.css(childrenEls[k], {
            color: rgb,
            fill: rgb
          });
        }
        clonedEl.style.display = '';
        clonedEls.push(clonedEl);
      }

      var _loop4 = function _loop4(_i4) {
        var clonedEl = clonedEls[_i4];
        dynamics.css(clonedEl, {
          translateX: Math.random() * 10 - 5
        });

        dynamics.setTimeout(function () {
          dynamics.css(clonedEl, {
            translateX: 0
          });
        }, 50);

        dynamics.setTimeout(function () {
          dynamics.css(clonedEl, {
            translateX: Math.random() * 5 - 2.5
          });
        }, 100);

        dynamics.setTimeout(function () {
          document.body.removeChild(clonedEl);
        }, 150);
      };

      for (var _i4 = 0; _i4 < clonedEls.length; _i4++) {
        _loop4(_i4);
      }

      dynamics.setTimeout(function () {
        if (animating) {
          animate();
        }
        for (var _i5 = 0; _i5 < masks.length; _i5++) {
          var maskEl = document.querySelector('#' + masks[_i5]);
          maskEl.parentNode.removeChild(maskEl);
        }
      }, Math.random() * 1000);
    };

    animate();

    return {
      stop: function stop() {
        animating = false;
      }
    };
  };

  if (!('ontouchstart' in window)) {
    for (var i = 0; i < linkEls.length; i++) {
      linkEls[i].addEventListener('mouseover', handleMouseOver);
    }
  }
})();
