import React, { useRef, useLayoutEffect, useState } from "react"
import ReactDOM from "react-dom"
import { Document, Page, pdfjs } from 'react-pdf'
import ColoredScrollbars from './ColoredScrollbars';

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
        id: 'deepscatter',
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


function Divider(props){
  return <span className='divider'>|</span>
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

function Main(props) {
  const [width, height] = useWindowSize();
  const frameFontSize = width > 0 ? Math.min(width/70, 18) : 0
  const frameIconHeight = width > 0 ? Math.min(width/50, 25) : 0
  return (
    <div className='main'>
      {/* <Header/> */}
      {/* <Gallery/> */}
      <div className='body'>
        <Section
          id='breqwatr'
          title='DevOps | Full Stack'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum ultrices libero, id venenatis quam facilisis et. Mauris ultrices volutpat commodo. Proin at fringilla lectus. Pellentesque aliquet mi ac nunc finibus sagittis. Nulla non finibus velit.'
        >
          <div className='frame-top'>
            {/* <span className='scroll-frame-technologies'>Technologies |</span> */}
            {/* <img className='frame-icon' src="terminal.da5b28ec.svg" /> */}
            {/* <svg className='frame-icon' style={{height:width/50}} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M649 983l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23zm1079 457v64q0 14-9 23t-23 9h-960q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h960q14 0 23 9t9 23z"/></svg> */}
            <span className='frame-text' style={{fontSize:frameFontSize}}>AngularJS <Divider/> HAProxy <Divider/> OpenStack <Divider/> AMQP <Divider/> Chef <Divider/> SQL</span>
            <a href="https://breqwatr.com/" target="_blank">
              <svg className='frame-link' style={{height:frameIconHeight}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"/></svg>
            </a>
          </div>
          <ImageItem
            src='breqwatr.7131c5d5.jpg'
          />
          {/* <div className='frame-bottom'></div> */}
        </Section>
        <Section
          id='deepscatter'
          title='Deep Learning | Full Stack'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum ultrices libero, id venenatis quam facilisis et. Mauris ultrices volutpat commodo. Proin at fringilla lectus. Pellentesque aliquet mi ac nunc finibus sagittis. Nulla non finibus velit.'
        >
          <ImageItem
            src='deepscatter.0b40bbf5.jpg'
          />
        </Section>
        <Section
          id='matkit'
          title='Image Analysis Framework'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum ultrices libero, id venenatis quam facilisis et. Mauris ultrices volutpat commodo. Proin at fringilla lectus. Pellentesque aliquet mi ac nunc finibus sagittis. Nulla non finibus velit.'
        >
          <ImageItem
            src='matkit.f372a226.jpg'
          />
        </Section>
        <Section
          id='cell-bio'
          title='Computer Vision | Data Science'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum ultrices libero, id venenatis quam facilisis et. Mauris ultrices volutpat commodo. Proin at fringilla lectus. Pellentesque aliquet mi ac nunc finibus sagittis. Nulla non finibus velit.'
        >
          {/* <MarkdownItem
            src={cellBioMarkdown}
            filename='README.md'
          /> */}
        </Section>
        <Section
          id='object-tracking'
          title='Computer Vision | Full Stack'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum ultrices libero, id venenatis quam facilisis et. Mauris ultrices volutpat commodo. Proin at fringilla lectus. Pellentesque aliquet mi ac nunc finibus sagittis. Nulla non finibus velit.'
        >
          <ImageItem
            src='object-tracking.6ad48331.jpg'
          />
        </Section>
        <Section
          id='ros-rover'
          title='Robotics | Real Time'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum ultrices libero, id venenatis quam facilisis et. Mauris ultrices volutpat commodo. Proin at fringilla lectus. Pellentesque aliquet mi ac nunc finibus sagittis. Nulla non finibus velit.'
        >
          {/* <MarkdownItem
            src={rosRoverMarkdown}
            filename='README.md'
          /> */}
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
        <NameAndLogo/>
      </div>
      <div className='header-right'>
        <Index/>
      </div>
    </div>
  )
}

function NameAndLogo(props) {
  return (
    <div>
      <div>
        <Logo/>
      </div>
      <div className='name'>Daniel Snider</div>
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

function Index(props) {
  return (
    <div className='index'>
      <div className='index-title'>Lead Developer</div>
      <a href='#image-archive'>Medical Image Archive</a>
      <div className='index-subtitle'>Scaled to 100 million images</div>
      <a href='#ros-rover'>Teleoperated, 6-wheeled, 1-armed robot</a>
      <div className='index-subtitle'>Placed 21st at international URC competition in Utah</div>
      <a href='#deepscatter'>DeepScatter A.I. Web App</a>
      <div className='index-subtitle'>A.I. Grant Finalist</div>
      <a href='#matkit'>MatKit-Image Analysis Framework</a>
      <div className='index-subtitle'>Mary Jo Haddad SickKids Innovation Award</div>
      {/* <a href='#cell-bio'>Microscopy Image Analysis</a> */}
      {/* <div className='index-subtitle'>Contributed to <em>n</em> research papers</div> */}

      <div className='index-2nd-title'>Contributor</div>
      <div style={{paddingTop:'3px'}}><a href='#breqwatr'>Breqwatr private cloud</a></div>
      <div style={{paddingTop:'3px'}}><a href='#rareconnect'>Rareconnect social network</a></div>
      <div style={{paddingTop:'3px'}}><a href='#penguin'>Penguin ASI robotics</a></div>
      <div style={{paddingTop:'3px'}}><a href='#senseact'>SenseAct robot learning framework</a></div>
      <div style={{paddingTop:'3px'}}><a href='#cell-bio'>Microscopy Image Analysis</a></div>
    </div>
  )
}

function Gallery(props) {
  return (
    <div className='gallery'>
      <div className='gallery-section'>
        <div className='card-section-title-container'>
          <div className='card-section-title'>Lead Developer</div>
        </div>
        <Card
          title="Placed 21st in Competition"
          subtitle='Teleoperated Mars Rover'
          desc="Placed 21st in an international university robotics competition."
          src="https://github.com/danielsnider/ros-rover/blob/master/diagrams/rover_half.jpg?raw=true"
          anchor="#ros-rover"
          styleImg={{transform: 'scale(1.15, 1.15) translateY(5%) translateX(4%)'}}
        />
        <Card
          title="Scaled to 100 million images"
          subtitle="Medical Image Archive"
          desc="Scaled to 100 million images."
          src="image-archive.c360adba.jpg"
          anchor="#image-archive"
        />
        <Card
          title="A.I. Grant Finalist"
          subtitle="Image Similarity Web App"
          desc="A.I. Grant Finalist."
          src="deepscatter.0b40bbf5.jpg"
          anchor="#deepscatter"
        />
        <Card
          title="SickKids Innovation Award"
          subtitle="Image Analysis Framework"
          desc="Mary Jo Haddad SickKids Innovation Award."
          src="matkit-cells.092d1f2f.jpg"
          anchor="#matkit"
        />
      </div>
      <div className='gallery-section'>
        <div className='card-section-title-container'>
          <div className='card-section-title' style={{top: '-5px'}}>Contributor</div>
        </div>
        <Card
          title="Reinforcement Learning"
          desc="Contributed to a reinforcement learning framework for physical robots."
          src="senseact-arm.29fbdd9f.jpg"
          anchor="#senseact"
        />
        <Card
          title="Datacentre Platform"
          desc="Contributed to a privace cloud appliance."
          src="breqwatr-card-3.5981857b.png"
          anchor="#breqwatr"
        />
        <Card
          title="Global Social Network"
          desc="Contributed to a social network for rare disease patients."
          src="rareconnect.c719a054.png"
          anchor="#rareconnect"
          styleImg={{objectFit: 'unset'}}
        />
        <Card
          title="Microscopy Analysis"
          desc="Contributed to n research papers."
          src="cell-tracking.93c9c9ec.jpg"
          anchor="#cell-bio"
        />
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

function ImageItem(props) {
  return (
      <ColoredScrollbars
        style={{ width: '100%',
        height: '70vh',
      }}
      >
      <div className='image-item'>
        <img id={props.id} src={props.src} className='image-img' />
      </div>
      </ColoredScrollbars>
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
