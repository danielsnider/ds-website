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
      <Header/>
      <Gallery/>
      <div className='body'>
        <Section {...sections.fullStack}>
          <ImageItem {...sections.fullStack.items.breqwatr}/>
          <ImageItem {...sections.fullStack.items.deepScatter}/>
          <ImageItem {...sections.fullStack.items.matkit}/>
        </Section>
        <Section {...sections.computerVision}>
          <MarkdownItem {...sections.computerVision.items.cellBio}/>
          <ImageItem {...sections.computerVision.items.objectTracking}/>
        </Section>
        <Section {...sections.robotics}>
          <MarkdownItem {...sections.robotics.items.rosRover}/>
        </Section>
      </div>
      <Footer/>
    </div>
  )
}

function Header(props) {
  return (
    <div className='header'>
      <div className='header-left'>
        <div>
          <Logo/>
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
  )
}

function Index(props) {
  return (
    <div className='index'>
      <div className='index-title'>Lead Developer</div>
      <a href='#image-archive'>Medical Image Archive</a>
      <div className='index-subtitle'>Scaled to 100 million images</div>
      <a href='#ros-rover'>Tele-operated, 6-wheeled, 1-armed robot</a>
      <div className='index-subtitle'>Placed 21st at international URC competition in Utah</div>
      <a href='#deep-scatter'>DeepScatter AI Web App</a>
      <div className='index-subtitle'>AI Grant Finalist</div>
      <a href='#matkit'>MatKit-Image Analysis Framework</a>
      <div className='index-subtitle'>Mary Jo Haddad SickKids Innovation Award</div>
      <a href='#cell-bio'>Microscopy Image Analysis</a>
      <div className='index-subtitle'>Contributed to <em>n</em> research papers</div>

      <div className='index-2nd-title'>Contributor</div>
      <div style={{paddingTop:'3px'}}><a href='#breqwatr'>Breqwatr private cloud</a></div>
      <div style={{paddingTop:'3px'}}><a href='#rareconnect'>Rareconnect social network</a></div>
      <div style={{paddingTop:'3px'}}><a href='#penguin'>Penguin ASI robotics</a></div>
      <div style={{paddingTop:'3px'}}><a href='#senseact'>SenseActSenseAct robot learning framework</a></div>
    </div>
  )
}

function Gallery(props) {
  return (
    <div className='gallery'>
      <Card
        desc="Robot placed 21st in international competition."
        src="https://github.com/danielsnider/ros-rover/blob/master/diagrams/rover_half.jpg?raw=true"
        anchor="#ros-rover"
        styleImg={{transform: 'scale(1.15, 1.15) translateY(5%) translateX(4%)'}}
      />
      <Card
        desc="Scaled to 100 million images."
        src="image-archive.c360adba.jpg"
        anchor="#image-archive"
      />
      <Card
        desc="AI Grant Finalist."
        src="deepscatter.0b40bbf5.jpg"
        anchor="#deep-scatter"
        styleWrap={{border: '1.3px solid rgba(170, 170, 170, 0.33)'}}
      />
      <Card
        desc="Mary Jo Haddad SickKids Innovation Award."
        src="matkit-cells.092d1f2f.jpg"
        anchor="#matkit"
        styleWrap={{border: '1.3px solid rgba(170, 170, 170, 0.33)'}}
      />
    </div>
  )
}

function Card(props) {
  return (
    <a className="card-wrap" href={props.anchor} style={props.styleWrap}>
      <img className="card-img" src={props.src} style={props.styleImg}/>
      <div className="card-description_layer">
        <p className="card-description">{props.desc}</p>
      </div>
    </a>
  )
}

function Section(props) {
  const [scrollInfo, setRef, ref] = useScrollInfo()

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
      <div className='section-right' ref={setRef}>
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

function Logo(props) {
  return (
    <img className='logo' src='nature.8aa98222.svg'/>
  )
}

function Footer(props) {
  return (
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
        <Logo/>
      </div>
    </div>
  )
}

var mountNode = document.getElementById("app")
ReactDOM.render(<Main name="Daniel" />, mountNode)
