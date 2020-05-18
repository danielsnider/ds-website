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

class Main extends React.Component {
  render() {
    return (
      <div className='main'>
        <div className='header'>
          <div className='header-left'>
            <div>
              <img className='logo' style={{transform: 'rotate(180deg)'}} src='leaf.3bab224c.svg'/>
              {/* <svg className='logo maple-leaf' id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m488.696 278.108-37.543-21.55 35.156-69.251-75.925 16.336-11.265-41.797-77.322 58.214 31.391-149.169-52.955 21.967-44.233-92.858-44.233 92.858-52.955-21.967 31.391 149.169-77.322-58.214-11.265 41.797-75.925-16.336 35.156 69.251-37.543 21.55 128.748 87.922-27.646 38.704h116.594v-33.512l-92.594-70.965 18.248-23.812 74.346 56.979v-141.009h30v141.009l74.346-56.979 18.248 23.812-92.594 70.965v33.512h116.594l-27.646-38.704z"/><path d="m241 404.734v107.266h30v-107.266h-15z"/></g></svg> */}
              {/* <img className='logo' src='logo.236e4034.svg'/> */}
              {/* <img className='logo' src='grass.dcd74c6b.svg'/> */}
              {/* <img className='logo' src='003-plant-2.b1602e54.svg'/> */}
              {/* <img className='logo' src='005-monstera.cb11f551.svg'/> */}
              {/* <img className='logo' src='006-ficus.cd76f57c.svg'/> */}
              {/* <img className='logo' src='heart2.4dca8c15.png'/> */}
              {/* <svg className='logo plant-1' xmlns="http://www.w3.org/2000/svg" id="Layer_1_1_" enable-background="new 0 0 64 64" height="512px" viewBox="0 0 64 64" width="512px"><path d="m58.155 29.537-1.795-1.337c-.059-.066-.125-.125-.199-.175-.298-.199-7.375-4.803-15.065-.017-2.242 1.395-4.031 3.41-5.445 5.563.975-3.025 2.259-6.198 3.926-8.918 6.715-1.832 12.219-6.486 15.141-12.822l.19-.413c.167-.362.103-.789-.163-1.086-.267-.297-.684-.408-1.062-.282-.255.085-6.339 2.179-13.437 10.29-3.577 4.088-5.871 10.093-7.278 15.142l-.038-11.807-.002-.404-.07-21.274c-.002-.473-.335-.88-.799-.976-.464-.093-.931.147-1.118.582l-3.75 8.643c-.094.216-.108.458-.041.685l3.779 12.637.027 8.227c-1.323-6.719-3.266-13.897-5.785-16.068-5.02-4.327-9.307-6.43-13.108-6.43-3.94 0-9.23 3.308-9.453 3.449-.359.227-.536.656-.441 1.07.096.414.441.723.864.77l3.819.424c4.084.454 8.065 1.516 11.835 3.156l.942.41 7.127 4.509c1.077 3.418 2.007 7.769 2.736 11.857-1.469-2.64-3.485-5.234-6.213-6.931-7.69-4.784-14.768-.181-15.065.017-.074.049-1.994 1.512-1.994 1.512-2.676 1.994-4.134 5.171-3.901 8.499l.631 9.051c.034.488.416.88.903.926.032.003.063.004.096.004.293 0 .556-.137.742-.349l.009.008 3.357-3.827c3.159-3.602 5.508-7.945 6.791-12.56l.956-3.438c1.934-.013 4.144.438 6.419 1.854 5.542 3.448 7.914 11.453 8.601 14.294h-9.824c-.553 0-1 .448-1 1 0 6.342 1.47 12.365 4.033 16.525.183.293.505.473.852.473h14.23c.347 0 .669-.18.852-.475 2.563-4.16 4.033-10.183 4.033-16.525 0-.552-.447-1-1-1h-9.721c.821-3.013 3.422-10.901 8.873-14.294 2.275-1.416 4.485-1.867 6.42-1.854l.955 3.438c1.283 4.615 3.632 8.958 6.791 12.56l3.357 3.828.009-.008c.186.212.449.349.742.349.032 0 .063-.001.096-.004.487-.046.869-.438.903-.926l.632-9.052c.232-3.329-1.227-6.506-3.902-8.5zm-20.274 19.357 1.971.346c-.041.232-1.016 5.715-2.694 8.571l-1.725-1.014c1.495-2.543 2.439-7.85 2.448-7.903z" fill="#FFFFFF"/></svg> */}
              {/* <img className='logo' src='002-plant-1.b4c78986.svg'/> */}
              {/* <img className='logo' src='004-bonsai.8b19a9e5.svg'/> */}
              {/* <img className='logo' src='007-cactus.910994df.svg'/> */}
              {/* <img className='logo' src='008-cactus-1.4d6aaecd.svg'/> */}
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
