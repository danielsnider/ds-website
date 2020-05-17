import React, { useState } from 'react'
import ReactDOM from "react-dom"
import { Document, Page, pdfjs } from 'react-pdf'
import useScrollInfo from 'react-element-scroll-hook'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import './styles/main.css'
import cellBioMarkdown from './static/cell-bio-readme.md'
import rosRoverMarkdown from './static/ros-rover-readme.md'

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`


const sections = {
  robotics: {
    id: 'robotics',
    title: 'Robotics',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum ultrices libero, id venenatis quam facilisis et. Mauris ultrices volutpat commodo. Proin at fringilla lectus. Pellentesque aliquet mi ac nunc finibus sagittis. Nulla non finibus velit.',
    items: {
      rosRover: {
        id: 'ros-rover',
        title: 'Mars Rover',
        src: rosRoverMarkdown,
        filename: 'README.md'
      }
    }
  },
  computerVision: {
    id: 'computer-vision',
    title: 'Computer Vision',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum ultrices libero, id venenatis quam facilisis et. Mauris ultrices volutpat commodo. Proin at fringilla lectus. Pellentesque aliquet mi ac nunc finibus sagittis. Nulla non finibus velit.',
    items: {
      objectTracking: {
        id: 'object-tracking',
        title: 'Object Tracking',
        src: 'object-tracking.6ad48331.jpg',
      },
      cellBio: {
        id: 'cell-bio',
        title: 'Cell Bio',
        src: cellBioMarkdown,
        filename: 'README.md'
      }
    }
  },
  fullStack: {
    id: 'full-stack',
    title: 'Full Stack',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum ultrices libero, id venenatis quam facilisis et. Mauris ultrices volutpat commodo. Proin at fringilla lectus. Pellentesque aliquet mi ac nunc finibus sagittis. Nulla non finibus velit.',
    items: {
      deepScatter: {
        id: 'deep-scatter',
        title: 'A.I. Web App',
        src: 'deepscatter.0b40bbf5.jpg',
      },
      breqwatr: {
        id: 'breqwatr',
        title: 'Breqwatr Private Cloud Appliance',
        src: 'breqwatr.7131c5d5.jpg',
      },
      matkit: {
        id: 'matkit',
        title: 'Matkit Image Analysis Toolkit',
        src: 'matkit.f372a226.jpg',
      }
    }
  }
}

class Main extends React.Component {
  render() {
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
            <Index/>
          </div>
        </div>
        <div className='body'>

          <Section {...sections.computerVision}>
            <MarkdownItem {...sections.computerVision.items.cellBio}/>
            <ImageItem {...sections.computerVision.items.objectTracking}/>
          </Section>
          <Section {...sections.robotics}>
            <MarkdownItem {...sections.robotics.items.rosRover}/>
          </Section>
          <Section {...sections.fullStack}>
            <ImageItem {...sections.fullStack.items.breqwatr}/>
            <ImageItem {...sections.fullStack.items.deepScatter}/>
            <ImageItem {...sections.fullStack.items.matkit}/>
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

function IndexItem(props) {
  const section = sections[props.sectionName]
  const items = []
  Object.entries(section.items).forEach(([k, v]) => {
    const item = section.items[k]
    items.push(
    <div key={item.id}>
      <AnchorLink key={`#item.id`} href={`#${item.id}`}>
        {item.title}
      </AnchorLink>
    </div>
    )
  })
  return (
    <div>
      {items}
    </div>
  )
}

function Index(props) {

  return (
    <div>
      <h3>Computer Vision</h3>
      <IndexItem sectionName={'computerVision'}/>
      <h3>Robotics</h3>
      <IndexItem sectionName={'robotics'}/>
      <h3>Full Stack</h3>
      <IndexItem sectionName={'fullStack'}/>
    </div>
  )
}

function Section(props) {
  const [scrollInfo, setRef, ref] = useScrollInfo()

  const sectionElem = document.getElementById('computer-vision')
  const sectionRect = sectionElem ? sectionElem.getBoundingClientRect() : null
  // console.log('sectionRect: ', sectionRect)

  const itemElem = document.getElementById('object-tracking')
  const rect = itemElem ? itemElem.getBoundingClientRect() : null
  // console.log('rect: ', rect)

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

class IframeItem extends React.Component {
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
  render() {
    return (
      <div className='image-item' id={this.props.id}>
        <iframe width='800' height='700' is="x-frame-bypass" src={this.props.src}></iframe>
      </div>
    )
  }
}

class PdfItem extends React.Component {
  /*
    1. Do the import the file
    import objectTrackingPdf from './static/object-tracking.pdf'

    2. Add item data to a content section
    objectTrackingPdf: {
      id: 'object-tracking',
      title: 'Object Tracking',
      file: objectTrackingPdf,
    }

    3. Then use this component:
    <PdfItem {...sections.computerVision.items.objectTrackingPdf}/>
  */
  render() {
    return (
      <div className='image-item' id={this.props.id} className='image-img'>
        <Document
          file={this.props.file}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={1} />
        </Document>
      </div>
    )
  }
}


function MarkdownItem(props) {
  const getMarkdownText = () => {
    // var rawMarkup = marked(cellBioMarkdown.toString(), {sanitize: true})
    return { __html: props.src }
  }

  return (
    <div className='markdown-item' id={props.id}>
      <div className='markdown-header'>
        <div className='markdown-filename'>
          {props.filename}
        </div>
      </div>
      <div className='markdown-content-container'>
        <div className='markdown-content' dangerouslySetInnerHTML={getMarkdownText()} />
      </div>
    </div>
  )
}

var mountNode = document.getElementById("app")
ReactDOM.render(<Main name="Daniel" />, mountNode)
