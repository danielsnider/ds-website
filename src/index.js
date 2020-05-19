import React, { useState } from 'react'
import ReactDOM from "react-dom"
import { Document, Page, pdfjs } from 'react-pdf'
import useScrollInfo from 'react-element-scroll-hook'

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

function Main(props) {
  return (
    <div className='main'>
      <div className='header'>
        <div className='header-left'>
          <div>
            <img className='logo' style={{transform: 'rotate(180deg)'}} src='leaf.3bab224c.svg'/>
          </div>
          <div className='name'>Daniel Snider</div>
          <div className='city'>Toronto</div>
          <div id="contact">
            <a href="https://twitter.com/danielsnider">
              <svg className='social-icon' viewBox="0 0 42 36" xmlns="http://www.w3.org/2000/svg"><path d="M40.885 5.917a16.098 16.098 0 0 1-4.7 1.315 8.35 8.35 0 0 0 3.598-4.62 16.18 16.18 0 0 1-5.196 2.026A8.094 8.094 0 0 0 28.614 2c-4.52 0-8.183 3.74-8.183 8.353 0 .655.073 1.293.213 1.904-6.8-.348-12.83-3.674-16.866-8.728a8.447 8.447 0 0 0-1.108 4.2 8.397 8.397 0 0 0 3.64 6.952 8.024 8.024 0 0 1-3.707-1.045v.105c0 4.047 2.82 7.423 6.563 8.19a8.035 8.035 0 0 1-3.695.144c1.042 3.32 4.064 5.734 7.645 5.8A16.206 16.206 0 0 1 1 31.337a22.818 22.818 0 0 0 12.544 3.754c15.05 0 23.282-12.73 23.282-23.768 0-.362-.008-.723-.024-1.08a16.82 16.82 0 0 0 4.083-4.325z"></path></svg>
            </a>
            <a href="mailto:danielsnider12@gmail.com">
              <svg className='social-icon' viewBox="0 0 42 36" xmlns="http://www.w3.org/2000/svg"><path d="M3.025 5.255A1.99 1.99 0 0 1 4.003 5h33.994c.354 0 .688.093.977.256L21 18.5 3.025 5.255zm-1.002 1.45c-.015.098-.023.2-.023.302V18.28v-5.636 17.35C2 31.1 2.902 32 4.003 32h33.994A2.005 2.005 0 0 0 40 29.993v-17.35 5.638V7.008c0-.103-.008-.204-.023-.303L21 20.687 2.023 6.704z"></path></svg>
            </a>
          </div>
        </div>
        <div className='header-right'>
          <Index/>
        </div>
      </div>
      <div className='body'>
        <Section {...sections.computerVision}>
          <ImageItem {...sections.computerVision.items.objectTracking}/>
          {/* <MarkdownItem {...sections.computerVision.items.cellBio}/> */}
        </Section>
        <Section {...sections.robotics}>
          {/* <MarkdownItem {...sections.robotics.items.rosRover}/> */}
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

function IndexItem(props) {
  const section = sections[props.sectionName]
  const items = []
  Object.entries(section.items).forEach(([k, v]) => {
    const item = section.items[k]
    items.push(
    <div key={item.id}>
      <a href={`#${item.id}`}>
        {item.title}
      </a>
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
    <div className='index'>
      <div className='index-title'>Lead Developer</div>
      <a href='#image-archive'>Medical Image Archive</a>
      <div className='index-subtitle'>Scaled to 100 million images</div>
      <a href='#image-archive'>Tele-operated, 6-wheeled, 1-armed robot</a>
      <div className='index-subtitle'>Placed 21st at international URC competition in Utah</div>
      <a href='#image-archive'>DeepScatter AI Web App</a>
      <div className='index-subtitle'>AI Grant Finalist</div>
      <a href='#image-archive'>MatKit-Image Analysis Framework</a>
      <div className='index-subtitle'>Mary Jo Haddad SickKids Innovation Award</div>
      <a href='#image-archive'>Microscopy Image Analysis</a>
      <div className='index-subtitle'>Contributed to <em>n</em> research papers</div>

      <div className='index-title2'>Contributor</div>
      <div style={{paddingTop:'3px'}}><a href='#image-archive'>Breqwatr private cloud</a></div>
      <div style={{paddingTop:'3px'}}><a href='#image-archive'>Rareconnect social network</a></div>
      <div style={{paddingTop:'3px'}}><a href='#image-archive'>Penguin ASI robotics</a></div>
      <div style={{paddingTop:'3px'}}><a href='#image-archive'>SenseActSenseAct robot learning framework</a></div>
      {/* <IndexItem sectionName={'computerVision'}/>
      <div className='index-title'>Robotics</div>
      <IndexItem sectionName={'robotics'}/>
      <div className='index-title'>Full Stack</div>
      <IndexItem sectionName={'fullStack'}/> */}
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

function ImageItem(props) {
  return (
    <div className='image-item'>
      <img id={props.id} src={props.src} className='image-img' />
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

function PdfItem(props) {
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
  return (
    <div className='image-item' id={props.id} className='image-img'>
      <Document file={props.file} >
        <Page pageNumber={1} />
      </Document>
    </div>
  )
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
