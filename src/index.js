import React, { useRef, useLayoutEffect, useState } from "react"
import ReactDOM from "react-dom"
import marked from 'marked'

import ColoredScrollbars from './coloredScrollbars'
import Animations from './animations'
import RobotSvg from './robotSvg'

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
import rareconnectImage from './images/rareconnect.png'
import rareconnectWysiwygImage from './images/rareconnect-wysiwyg.jpg'
import rosRoverImage from './images/rover_half_33.jpg'
import senseactArmImage from './images/senseact-arm.jpg'
import senseactDiagram from './images/senseact-short.gif'
import senseactPresentation from './images/senseact-presenting_40.jpg'
import './styles/main.css'

function Main(props) {
  return (
    <div className='main'>
      <div className='animate-on-load'>
        <Header/>
        <Status/>
      </div>
      <Gallery/>
      <Portfolio/>
      <Footer/>
      <Animations/>
    </div>
  )
}

function Header(props) {
  return (
    <div className='header'>
      <div className='header-left'>
        <NameAndLogo/>
      </div>
      <div className='header-right'>
        <div className='about'>
          <div className='about-sentence'>Hello and Welcome! My name is Daniel.</div>
          <div className='about-sentence'>
            <span className='about-emphasis'>I automate for people with</span>
            <svg style={{paddingLeft: '5px'}} version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 28 28">
              <title>heart</title>
              <path d="M14 26c-0.25 0-0.5-0.094-0.688-0.281l-9.75-9.406c-0.125-0.109-3.563-3.25-3.563-7 0-4.578 2.797-7.313 7.469-7.313 2.734 0 5.297 2.156 6.531 3.375 1.234-1.219 3.797-3.375 6.531-3.375 4.672 0 7.469 2.734 7.469 7.313 0 3.75-3.437 6.891-3.578 7.031l-9.734 9.375c-0.187 0.187-0.438 0.281-0.688 0.281z" fill="#f1aaae"></path>
            </svg>
            .
          </div>
          <div className='about-sentence'>
            In collaboration with great engineers, scientists, and managers, I create user-focused solutions that are both powerful and 💯<span className='about-percent'>﹪</span>effortless.
          </div>
        </div>
      </div>
    </div>
  )
}

function NameAndLogo(props) {
  return (
    <div>
      <Logo/>
      <div className='name'>Daniel Snider</div>
      <div className='city'>Software Developer</div>
      {/* <div className='city'>Toronto</div> */}
      <div className="contact">
        {/* <a className='animate-on-mouse-over social-icon-link' href="https://twitter.com/danielsnider" target="_blank">
          <svg className='social-icon' viewBox="0 0 42 36" xmlns="http://www.w3.org/2000/svg"><path d="M40.885 5.917a16.098 16.098 0 0 1-4.7 1.315 8.35 8.35 0 0 0 3.598-4.62 16.18 16.18 0 0 1-5.196 2.026A8.094 8.094 0 0 0 28.614 2c-4.52 0-8.183 3.74-8.183 8.353 0 .655.073 1.293.213 1.904-6.8-.348-12.83-3.674-16.866-8.728a8.447 8.447 0 0 0-1.108 4.2 8.397 8.397 0 0 0 3.64 6.952 8.024 8.024 0 0 1-3.707-1.045v.105c0 4.047 2.82 7.423 6.563 8.19a8.035 8.035 0 0 1-3.695.144c1.042 3.32 4.064 5.734 7.645 5.8A16.206 16.206 0 0 1 1 31.337a22.818 22.818 0 0 0 12.544 3.754c15.05 0 23.282-12.73 23.282-23.768 0-.362-.008-.723-.024-1.08a16.82 16.82 0 0 0 4.083-4.325z"></path></svg>
        </a> */}
        <a className='animate-on-mouse-over social-icon-link' href="https://github.com/danielsnider" target="_blank">
          <svg className='social-icon' style={{transform:'scale(1.2, 1.2)'}} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"/></svg>
        </a>
        <span style={{margin:'5px'}}> </span>
        <a className='animate-on-mouse-over social-icon-link' href="mailto:danielsnider12@gmail.com" target="_blank">
          <svg className='social-icon' viewBox="0 0 42 36" xmlns="http://www.w3.org/2000/svg"><path d="M3.025 5.255A1.99 1.99 0 0 1 4.003 5h33.994c.354 0 .688.093.977.256L21 18.5 3.025 5.255zm-1.002 1.45c-.015.098-.023.2-.023.302V18.28v-5.636 17.35C2 31.1 2.902 32 4.003 32h33.994A2.005 2.005 0 0 0 40 29.993v-17.35 5.638V7.008c0-.103-.008-.204-.023-.303L21 20.687 2.023 6.704z"></path></svg>
        </a>
      </div>
    </div>
  )
}

function Logo(props) {
  return (
    <div id="header-logo">
      {/* <img id='logo' className='logo' src={loveBot}/> */}
      {/* <svg id="logo" width="80" height="67" viewBox="0 0 160 134" xmlns="http://www.w3.org/2000/svg"><path d="M24.44 78.157L0 53.53 53.417 0l26.39 26.612L106.38 0l53.482 53.614L136.25 77.31l-29.312-29.2-26.46 26.946-26.548-26.58-29.49 29.68zm5.335 5.375l50.033 50.415 51.108-51.286-23.775-23.684-26.712 26.72-26.372-26.404-24.28 24.24z" fill="white" fillRule="evenodd"></path></svg> */}
      <RobotSvg/>

    </div>
  )
}

function Gallery(props) {
  return (
    <div className='gallery'>
      <DateDivider year='Lead Developer'/>
      <div className='gallery-section'>
        <div className='card-section-title-container'>
        </div>
        <span className='card-group'>
          <Card
            subtitle="Scaled to 100 million images"
            title="Medical Image Archive for AI"
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
        </div>
        <span className='card-group'>
          <Card
            title="Datacentre Platform"
            desc="Contributed to a private cloud appliance."
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
  const alignSection = props.alignSection ? '-section' : ''
  return (
    <div className={`date-divider-text${alignSection}`}>
      {props.year}
      <div className={`date-divider${alignSection}`}/>
    </div>
  )
}

  function Section(props) {
  return (
    <div id={props.id} className='section'>
      <div className='section-left'>
        <h1 className='section-title animate-on-mouse-over'>
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

  // Set 0px border radius on the first child element in the frame because it looks nice
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

function Status(props) {
  return (
    <div className='status'>
      <div className='status-text'>
      <span className='status-text-emphasis'>
        Current status: 
      </span>
      Looking to join a passionate team. I am based in Toronto. <a className='animate-on-mouse-over' href='https://drive.google.com/file/d/1u5l1Ow-Qth4VIZu6R4dUTSpP-ruVsMGe/view?usp=sharing' target='_blank'>Here is my resume.</a>
      </div>
    </div>
  )
}

function Portfolio(props) {
  return (
    <div className='portfolio'>
    <DateDivider year='2019–2020' alignSection={true}/>
    <Section
        id='image-archive'
        title='Massive Scale'
        description='At the SickKids Research Institute I led the development of a medical Picture Archive System. It is web based search engine used by A.I. researchers. The archive contains 100 million images and 10 billion metadata tags. To protect personal health information (PHI) we anonymize radiology reports and PHI burned into the image pixels. Our algorithm automates the process with a high degree of accuracy.'
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
      <DateDivider year='2018' alignSection={true}/>
      <Section
        id='deepscatter'
        title='Deep Learning'
        description={['While mentoring a brilliant student coming from their high-school Co-op education program we built a web app that lets users experiment with popular machine learning models and dimensionality reduction algorithms on uploaded images. The project was a finalist in the ', <a key='deepscatter-section-link' className='section-link animate-on-mouse-over' href='https://aigrant.org/' target='_blank'>AI Grant</a>, ' global competition.']}
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
          githubLink='https://github.com/danielsnider/Single_Cell_Analysis_Toolkit'
          toolList={['Matlab', 'Morphology', 'Adaptive Threshold', 'Segmentation']}
        >
          <ImageItem
            src={matkitMontage}
          />
        </Frame>
      </Section>
      <Section
        id='senseact'
        title='Reinforcement Learning'
        description={['For Toronto startup, ', <a key='kindred-section-link' className='section-link animate-on-mouse-over' href='https://www.kindred.ai/' target='_blank'>Kindred AI</a>, ', I alpha tested their release of ', <a key='sensact-section-link' className='section-link animate-on-mouse-over' href='https://www.kindred.ai/senseact' target='_blank'>SenseAct</a>,', a machine learning framework for real-time control of robotic components. I presented demonstrations at the Toronto Machine Learning Summit of SenseAct controlling iRobot hardware and a 6-axis robot arm.']}
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
      <DateDivider year='2017' alignSection={true}/>
      <Section
        id='ros-rover'
        title='Robotics'
        description={['I led the software development of a self-driving, 6-wheeled robotic rover with a robot arm and depth camera. As an engineering design team at Ryerson University, we competed in the ', <a key='kindred-section-link' className='section-link animate-on-mouse-over' href='http://urc.marssociety.org/' target='_blank'>University Rover Challenge</a>, ' at the Mars Desert Research Station, in Utah, USA. In our first year we placed 21st out of 82 teams from 13 countries.']}
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
      <DateDivider year='2016' alignSection={true}/>
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
      <div className='made-using'>
        Website made using <a className='section-link animate-on-mouse-over' target="_blank" href='https://reactjs.org/docs/hooks-intro.html'>React Hooks</a> and <a className='section-link animate-on-mouse-over' target="_blank" href='http://dynamicsjs.com/'>Dynamics.js</a>.
      </div>
    </div>
  )
}

var mountNode = document.getElementById("app")
ReactDOM.render(<Main name="Daniel" />, mountNode)
