import React, { useRef, useLayoutEffect, useState } from "react"
import ReactDOM from "react-dom"
import ColoredScrollbars from './ColoredScrollbars';

import './styles/main.css'
// import cellBioMarkdown from './static/cell-bio-readme.md'
// import rosRoverMarkdown from './static/ros-rover-readme.md'
import imageArchiveImage50 from './images/image-archive-UI_50.jpg'
import imageArchiveImage20 from './images/image-archive-UI_20.jpg'
import breqwatrCardImage from './images/breqwatr-card-50.jpg'
import breqwatrMontage from './images/breqwatr.jpg'
import cellTrackingImage from './images/cell-tracking.jpg'
import deepscatterImage from './images/deepscatter.jpg'
import deepscatterImage33 from './images/deepscatter_cropped_33.jpg'
import matkitCellsImage from './images/matkit-cells_40.jpg'
import matkitMontage from './images/matkit-short.jpg'
import natureSvg from './images/nature.svg'
import objectTrackingImage from './images/object-tracking.jpg'
import rareconnectImage from './images/rareconnect.png'
import rosRoverImage from './images/rover_half_33.jpg'
import senseactArmImage from './images/senseact-arm.jpg'
import senseactDiagram from './images/senseact.GIF'


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

function Logo(props) {
  return (
    <img className='logo' src={natureSvg}/>
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
          title="Scaled to 100 million images"
          subtitle="Medical Image Search Archive"
          desc="Accomplished with distributed processing across 200 servers."
          src={imageArchiveImage20}
          anchor="#image-archive"
        />
        <Card
          title="SickKids Innovation Award"
          subtitle="Image Analysis Framework"
          desc="Winner of the Mary Jo Haddad SickKids Innovation Award."
          src={matkitCellsImage}
          anchor="#matkit"
        />
        <Card
          title="Placed 21st in Competition"
          subtitle='Teleoperated Mars Rover'
          desc="Placed 21st out of 82 teams at an international university competition."
          src={rosRoverImage}
          anchor="#ros-rover"
          styleImg={{transform: 'scale(1.15, 1.15) translateY(5%) translateX(4%)'}}
        />
        <Card
          title="A.I. Grant Finalist"
          subtitle="Image Similarity Web App"
          desc="Compared machine learning and manifold learning algorithms."
          src={deepscatterImage33}
          anchor="#deepscatter"
        />
      </div>
      <div className='gallery-section'>
        <div className='card-section-title-container'>
          <div className='card-section-title' style={{top: '-5px'}}>Contributor</div>
        </div>
        <Card
          title="Datacentre Platform"
          desc="Contributed to a privace cloud appliance."
          src={breqwatrCardImage}
          anchor="#breqwatr"
        />
        <Card
          title="Microscopy Analysis"
          desc="Contributed to academic research papers."
          src={cellTrackingImage}
          anchor="#cell-bio"
        />
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
  return (
    <div className='date-divider-text'>
      {props.year}
      <div className='date-divider'/>
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

  return (
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
  )
}

function Main(props) {
  return (
    <div className='main'>
      <Header/>
      <Gallery/>
      <div className='body'>
      <DateDivider year='2019'/>
      <Section
          id='image-archive'
          title='Massive Scale'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum ultrices libero, id venenatis quam facilisis et. Mauris ultrices volutpat commodo. Proin at fringilla lectus. Pellentesque aliquet mi ac nunc finibus sagittis. Nulla non finibus velit.'
        >
          <Frame
            // webLink=''
            toolList={['ElasticSearch', 'Python', 'Ubuntu', 'High Performance Computing']}
          />
          <ImageItem
            src={imageArchiveImage50}
          />
        </Section>
      <Section
          id='rareconnect'
          title='Full Stack'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum ultrices libero, id venenatis quam facilisis et. Mauris ultrices volutpat commodo. Proin at fringilla lectus. Pellentesque aliquet mi ac nunc finibus sagittis. Nulla non finibus velit.'
        >
          <Frame
            webLink='https://www.rareconnect.org/'
            toolList={['Javascript', 'React', 'Internationalization', 'PostgreSQL', 'Docker']}
          />
          <ImageItem
            src={rareconnectImage}
          />
        </Section>
        <DateDivider year='2018'/>
        <Section
          id='deepscatter'
          title='Deep Learning'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum ultrices libero, id venenatis quam facilisis et. Mauris ultrices volutpat commodo. Proin at fringilla lectus. Pellentesque aliquet mi ac nunc finibus sagittis. Nulla non finibus velit.'
          >
          <Frame
            githubLink='https://github.com/danielsnider/Deep-Scatter'
            toolList={['Numpy', 'Pandas', 'Scikit-Learn', 'Matplotlib', 'Flask']}
          />
          <ImageItem
            src={deepscatterImage}
          />
        </Section>
        <Section
          id='matkit'
          title='Computer Vision'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum ultrices libero, id venenatis quam facilisis et. Mauris ultrices volutpat commodo. Proin at fringilla lectus. Pellentesque aliquet mi ac nunc finibus sagittis. Nulla non finibus velit.'
        >
          <Frame
            // githubLink='https://github.com/danielsnider/??'
            toolList={['Matlab', 'Morphology', 'Adaptive Thresholding', 'Segmentation']}
          />
          <ImageItem
            src={matkitMontage}
          />
        </Section>
        <Section
          id='senseact'
          title='Reinforcement Learning'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum ultrices libero, id venenatis quam facilisis et. Mauris ultrices volutpat commodo. Proin at fringilla lectus. Pellentesque aliquet mi ac nunc finibus sagittis. Nulla non finibus velit.'
        >
          <Frame
            webLink='https://www.kindred.ai/senseact'
            toolList={['OpenAI Gym', 'Numpy', 'Real-time Computing']}
          />
          <ImageItem
            src={senseactDiagram}
          />
        </Section>
        <DateDivider year='2017'/>
        <Section
          id='ros-rover'
          title='Robotics'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum ultrices libero, id venenatis quam facilisis et. Mauris ultrices volutpat commodo. Proin at fringilla lectus. Pellentesque aliquet mi ac nunc finibus sagittis. Nulla non finibus velit.'
        >
          <Frame
            githubLink='https://github.com/danielsnider/ros-rover'
            toolList={['ROS', 'OpenCV', 'Self-Driving', 'Point Clouds', 'Embedded Computing']}
          />
          {/* <MarkdownItem
            src={rosRoverMarkdown}
          /> */}
        </Section>
        <DateDivider year='2016'/>
        <Section
          id='breqwatr'
          title='DevOps'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum ultrices libero, id venenatis quam facilisis et. Mauris ultrices volutpat commodo. Proin at fringilla lectus. Pellentesque aliquet mi ac nunc finibus sagittis. Nulla non finibus velit.'
        >
          <Frame
            webLink='https://breqwatr.com/'
            toolList={['OpenStack', 'HAProxy', 'RabbitMQ', 'Chef', 'Zookeeper', 'MySQL Cluster']}
          />
          <ImageItem
            src={breqwatrMontage}
          />
        </Section>
        <Section
          id='cell-bio'
          title='Data Science'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum ultrices libero, id venenatis quam facilisis et. Mauris ultrices volutpat commodo. Proin at fringilla lectus. Pellentesque aliquet mi ac nunc finibus sagittis. Nulla non finibus velit.'
        >
          <Frame
            githubLink='https://github.com/danielsnider/cell-bio'
            toolList={['Computer Vision', 'R²', 'p–value', 'Variance', 'Normalization']}
          />
          {/* <MarkdownItem
            src={cellBioMarkdown}
          /> */}
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
      <Footer/>
    </div>
  )
}

function ImageItem(props) {
  return (
    <ColoredScrollbars style={{ width: '100%', height: '69vh'}}>
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
    // var rawMarkup = marked(cellBioMarkdown.toString(), {sanitize: true})
    return { __html: props.src }
  }

  return (
    <div style={{position: 'relative'}}>
      <div className='bottom-line'></div>
      <ColoredScrollbars style={{ width: '100%', height: '69vh'}}>
        <div id={props.id} className='markdown-content-container'>
          <div className='markdown-content' dangerouslySetInnerHTML={getMarkdownText()} />
        </div>
      </ColoredScrollbars>
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
        Made using <a href='https://reactjs.org/docs/hooks-intro.html'>React Hooks</a> and <a href='https://parceljs.org/'>Parcel</a>.
      </div>
      {/* <div className='fork-on'>
        Fork on <a className='github-link' href='https://github.com/danielsnider/ds-website'>github</a>.
      </div> */}
    </div>
  )
}

var mountNode = document.getElementById("app")
ReactDOM.render(<Main name="Daniel" />, mountNode)
