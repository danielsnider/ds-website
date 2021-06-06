import React, { useRef, useLayoutEffect, useState } from "react";
import ReactDOM from "react-dom";
import marked from "marked";

import ColoredScrollbars from "./coloredScrollbars";
import Animations from "./animations";
import RobotSvg from "./robotSvg";

import rosRoverMarkdown from "./rosRoverReadme.js";
import cellBioMarkdown from "./cellBioReadme.js";
import loveBot from "./images/lovebot-isometric.png";
import imageArchiveImage50 from "./images/image-archive-UI_50.jpg";
import imageArchiveImage20 from "./images/image-archive-UI_20.jpg";
import breqwatrCardImage from "./images/breqwatr-card-50.jpg";
import breqwatrMontage from "./images/breqwatr.jpg";
import cellGrowthPlot from "./images/bio-graph1-grey-background.JPG";
import deepscatterImage from "./images/deepscatter.jpg";
import deepscatterImage33 from "./images/deepscatter_cropped_33.jpg";
import matkitCellsImage from "./images/matkit-cells_40.jpg";
import matkitMontage from "./images/matkit-short.jpg";
import rareconnectImage from "./images/rareconnect.png";
import rareconnectWysiwygImage from "./images/rareconnect-wysiwyg.jpg";
import rosRoverImage from "./images/rover_half_33.jpg";
import senseactArmImage from "./images/senseact-arm.jpg";
import senseactDiagram from "./images/senseact-short.gif";
import senseactPresentation from "./images/senseact-presenting_40.jpg";
import danielImage from "./images/daniel_snider2.jpg";
// import shevronImage from './images/01_arrow-double-chevron-angle-down-512.png'
import shevronImage from "./images/mouse-arrow.svg";
import "./styles/main.css";

function Main(props) {
  return (
    <div className="main">
      <div className="animate-on-load">
        <Header />
        {/* <Status/> */}
      </div>
      <Gallery />
      <Portfolio />
      <Footer />
      {/* <Animations/> */}
      <div className="bottom-color-bar">{/* Daniel Snider, 2020 */}</div>
    </div>
  );
}

function Header(props) {
  return (
    <div className="white-theme">
      <div className="color-bar"></div>
      <ContactInfo />
      <div className="">
        <AboutMe />
        <div className="links-paragraph">
          <div className="news-blog">
            <NewsPosts />
            <BlogPosts />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactInfo(props) {
  return (
    <div className="header">
      <div className="header-left">
        <div>
          <img
            className="profile-image"
            src={danielImage}
            alt="Daniel Snider"
          ></img>
        </div>
      </div>
      <div className="header-right">
        <div className="">
          <h1 className="display-name">Daniel Snider</h1>
          <div className="job-title">Computer Science MSc Student</div>
          <div className="job-title">University of Toronto (U of T)</div>
        </div>
        <div className="contact-links">
          <a
            href="https://drive.google.com/file/d/1xvjmW0SXMITgUUWil3Dg2UjTd1zkDAFh/view"
            target="_blank"
          >
            CV
          </a>
          |
          <a href="https://danielsnider.medium.com" target="_blank">
            Blog
          </a>
          |
          <a href="https://danielsnider.substack.com" target="_blank">
            Newsletter
          </a>
          |
          <a href="mailto:danielsnider12@gmail.com">danielsnider12@gmail.com</a>
        </div>
        <div className="contact">
          <a
            className="animate-on-mouse-over social-icon-link"
            href="https://twitter.com/danielsnider"
            target="_blank"
          >
            <svg
              className="social-icon"
              viewBox="0 0 42 36"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M40.885 5.917a16.098 16.098 0 0 1-4.7 1.315 8.35 8.35 0 0 0 3.598-4.62 16.18 16.18 0 0 1-5.196 2.026A8.094 8.094 0 0 0 28.614 2c-4.52 0-8.183 3.74-8.183 8.353 0 .655.073 1.293.213 1.904-6.8-.348-12.83-3.674-16.866-8.728a8.447 8.447 0 0 0-1.108 4.2 8.397 8.397 0 0 0 3.64 6.952 8.024 8.024 0 0 1-3.707-1.045v.105c0 4.047 2.82 7.423 6.563 8.19a8.035 8.035 0 0 1-3.695.144c1.042 3.32 4.064 5.734 7.645 5.8A16.206 16.206 0 0 1 1 31.337a22.818 22.818 0 0 0 12.544 3.754c15.05 0 23.282-12.73 23.282-23.768 0-.362-.008-.723-.024-1.08a16.82 16.82 0 0 0 4.083-4.325z"></path>
            </svg>
          </a>
          <a
            className="animate-on-mouse-over social-icon-link"
            href="https://github.com/danielsnider"
            target="_blank"
          >
            <svg
              className="social-icon"
              style={{ transform: "scale(1.2, 1.2)" }}
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z" />
            </svg>
          </a>
          <a
            className="animate-on-mouse-over social-icon-link"
            href="https://www.linkedin.com/in/danieljsnider/"
            target="_blank"
          >
            <svg
              className="social-icon"
              style={{ transform: "scale(1, 1)" }}
              viewBox="0 0 382 382"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 L341.91,330.654L341.91,330.654z" />
            </svg>
          </a>
          {/* <span style={{margin:'5px'}}> </span>
          <a className='animate-on-mouse-over social-icon-link' href="mailto:danielsnider12@gmail.com" target="_blank">
            <svg className='social-icon' viewBox="0 0 42 36" xmlns="http://www.w3.org/2000/svg"><path d="M3.025 5.255A1.99 1.99 0 0 1 4.003 5h33.994c.354 0 .688.093.977.256L21 18.5 3.025 5.255zm-1.002 1.45c-.015.098-.023.2-.023.302V18.28v-5.636 17.35C2 31.1 2.902 32 4.003 32h33.994A2.005 2.005 0 0 0 40 29.993v-17.35 5.638V7.008c0-.103-.008-.204-.023-.303L21 20.687 2.023 6.704z"></path></svg>
          </a> */}
        </div>
      </div>
    </div>
  );
}

function AboutMe(props) {
  return (
    <div className="about-me justify-text">
      <h2 className="underlined">About Me</h2>
      <p>
        I am a <a target="_blank" href="http://www.cs.toronto.edu/">Computer Science</a> MSc
        student at <a target="_blank" href="https://www.utoronto.ca/">U of T</a>,
        advised by <a target="_blank" href="http://www.cs.toronto.edu/~pekhimenko/">Professor Gennady Pekhimenko</a>.
        I am part of the <a target="_blank" href="http://www.cs.toronto.edu/ecosystem/">Efficient Computing Systems Group</a> within
         the <a target="_blank" href="http://csng.cs.toronto.edu/index.php">Computer Systems & Networks Research Cluster</a>. My research aim is to accelerate robotic simulation and learning systems.
      </p>
      <p>
      My lifelong mission is to develop intelligent robots. I believe that <a target="_blank" href="https://www.bdc.ca/en/documents/analysis_research/labour-shortage.pdf">labour shortages</a> and the high prevalence of <a target="_blank" href="https://en.wikipedia.org/wiki/Bullshit_Jobs">low-impact jobs</a> are underappreciated global issues.
      </p>
      <p>
        Before starting my Masters, I oversaw data centre infrastructure for clients such as{" "}
        <a target="_blank" href="https://www.prnewswire.com/">
          PR Newswire
        </a>
        , wrote award-winning computer vision software at the{" "}
        <a
          target="_blank"
          href="https://www.sickkids.ca/en/research/about-research-institute/"
        >
          SickKids Research Institute
        </a>
        , and published a book chapter about self-driving robotics in{" "}
        <a
          target="_blank"
          href="https://www.springer.com/gp/book/9783319915890"
        >
          Springer’s Studies in Computational Intelligence.
        </a>
        {/* . I studied{" "}
        <a
          target="_blank"
          href="https://businessandit.ontariotechu.ca/undergraduate/bachelor-of-information-technology/networking-and-information-technology-security/index.php"
        >
          Information Technology
        </a>{" "}
        at{" "}
        <a target="_blank" href="https://ontariotechu.ca/">
          Ontario Tech University
        </a>
        , I was an exchange student in{" "}
        <a target="_blank" href="https://www.mi.fu-berlin.de/en/inf/index.html">
          Computer Science
        </a>{" "}
        at{" "}
        <a target="_blank" href="https://www.fu-berlin.de/en/">
          Freie Universität Berlin
        </a>
        , and I graduated in 2013. */}
      </p>
    </div>
  );
}

function NewsPosts(props) {
  return (
    <div className="news-posts">
      <h2 className="underlined">News</h2>

      <div className="row-item">
        <div className="row-item-date">June 30, 2019</div>
        <div className="row-item-text">
          I recieved the Mary Jo Haddad SickKids Innovation Award. Thank you
          SickKids!
        </div>
      </div>

      <div className="row-item">
        <div className="row-item-date">April 26, 2018</div>
        <div className="row-item-text">
          I was a finalist in the{" "}
          <a target="_blank" href="https://aigrant.org/">
            Nat Friedman A.I. Grant competition
          </a>
          .
        </div>
      </div>

      <div className="row-item">
        <div className="row-item-date">June 3rd, 2017</div>
        <div className="row-item-text">
          I was a finalist at the{" "}
          <a
            target="_blank"
            href="http://urc.marssociety.org/home/about-urc/urc2017-scores"
          >
            University Rover Challenge
          </a>{" "}
          robotics competition with{" "}
          <a target="_blank" href="https://teamr3.ca/">
            Team R3.
          </a>
        </div>
      </div>

      <div className="row-item">
        <div className="row-item-text">
          <a>See older news »</a>
        </div>
      </div>
    </div>
  );
}

function BlogPosts(props) {
  return (
    <div className="blog-posts">
      <h2 className="underlined">Latest Blog Posts</h2>

      <div className="row-item">
        <div className="row-item-date">December 8, 2020</div>
        <div className="row-item-text">
          <a
            target="_blank"
            href="https://danielsnider.medium.com/the-benefits-of-software-standards-50c108a6a019"
          >
            The Benefits of Software Standards
          </a>
        </div>
      </div>

      <div className="row-item">
        <div className="row-item-date">November 11, 2020</div>
        <div className="row-item-text">
          <a
            target="_blank"
            href="https://danielsnider.medium.com/taking-notes-has-compounding-effects-on-your-productivity-60b809f5f86a"
          >
            Taking Notes has Compounding Effects on your Productivity
          </a>
        </div>
      </div>

      <div className="row-item">
        <div className="row-item-date">November 7, 2020</div>
        <div className="row-item-text">
          <a
            target="_blank"
            href="https://danielsnider.medium.com/4-reasons-to-get-excited-about-the-future-of-automation-c89ab533ebaf"
          >
            4 Reasons to Get Excited About the Future of Automation
          </a>
        </div>
      </div>

      <div className="row-item">
        <div className="row-item-text">
          <a target="_blank" href="https://danielsnider.medium.com/">
            See all posts »
          </a>
        </div>
      </div>
    </div>
  );
}

function Gallery(props) {
  return (
    <div className="gallery">
      <div className="shevron-div">
        <img className="shevron-img" src={shevronImage} />
      </div>
      <div className="portfolio-title-big">Portfolio Summary</div>
      <DateDivider year="Lead Developer" />
      <div className="gallery-section">
        <div className="card-section-title-container"></div>
        <span className="card-group">
          <Card
            subtitle="Scaled to 100 million images"
            title="Medical Image Archive for AI"
            desc="Built with ElasticSearch, Javascript, Python and a 200-node HPC cluster."
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
        <span className="card-group">
          <Card
            subtitle="Finalist in Robotics Competition"
            title="Autonomous Mars Rover"
            desc="Built a 6-wheeled, 1-armed robot for a University competition in Utah."
            src={rosRoverImage}
            anchor="#ros-rover"
            styleImg={{
              transform: "scale(1.15, 1.15) translateY(5%) translateX(4%)",
            }}
          />
          <Card
            subtitle="A.I. Grant Finalist"
            title="Deep Learning Web App"
            desc="Compared ML models and manifold learning algorithms."
            src={deepscatterImage33}
            anchor="#deepscatter"
          />
        </span>
      </div>
      <DateDivider year="Contributor" />
      <div className="gallery-section">
        <div className="card-section-title-container"></div>
        <span className="card-group">
          <Card
            title="Datacentre Platform"
            desc="Developed highly-available services for OpenStack-based solution."
            src={breqwatrCardImage}
            anchor="#breqwatr"
          />
          <Card
            title="Research Data Analysis"
            desc="Contributed statistical analysis to 7 journal publications."
            src={cellGrowthPlot}
            styleImg={{
              transform:
                "scale(2, 2) scaleX(-1) translateY(-12%) translateX(4%)",
            }}
            anchor="#cell-bio"
          />
        </span>
        <span className="card-group">
          <Card
            title="Reinforcement Learning"
            desc="Contributed to a reinforcement learning framework for physical robots."
            src={senseactArmImage}
            anchor="#senseact"
          />
          <Card
            title="Global Social Network"
            desc="Contributed full-stack features to a web app with 50,000 users."
            src={rareconnectImage}
            anchor="#rareconnect"
            styleImg={{ objectFit: "unset" }}
          />
        </span>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="card-container">
      <div className="card-title">{props.title}</div>
      <div className="card-subtitle">{props.subtitle}</div>
      <a className="card-wrap" href={props.anchor} style={props.styleWrap}>
        <img className="card-img" src={props.src} style={props.styleImg} />
        <div className="card-description_layer">
          <p className="card-description">{props.desc}</p>
        </div>
      </a>
    </div>
  );
}

function DateDivider(props) {
  const alignSection = props.alignSection ? "-section" : "";
  return (
    <div className={`date-divider-text${alignSection}`}>
      {props.year}
      <div className={`date-divider${alignSection}`} />
    </div>
  );
}

function Section(props) {
  return (
    <div id={props.id} className="section">
      <div className="section-left">
        <div className="section-date">{props.date}</div>
        <h1 className="section-title animate-on-mouse-over">{props.title}</h1>
        <div className="section-description">{props.description}</div>
      </div>
      <div className="section-right">{props.children}</div>
    </div>
  );
}

function Divider(props) {
  return <span className="frame-text-dividers">|</span>;
}

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

function Frame(props) {
  const [width, height] = useWindowSize();
  const frameFontSize = width > 0 ? Math.min(width / 70, 15) : 0;
  const frameIconHeight = width > 0 ? Math.min(width / 50, 25) : 0;

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
  const children =
    props.hasOwnProperty("children") && props.children !== undefined
      ? Array.isArray(props.children)
        ? props.children
        : [props.children]
      : [];
  const newChildren = children.map((child, index) => {
    const existingStyle = child.props.hasOwnProperty("style")
      ? child.props.style
      : {};
    const borderRadius = index === 0 ? "0px" : undefined;
    return React.cloneElement(child, {
      style: {
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
        ...existingStyle,
      },
      key: index,
    });
  });

  return (
    <div className="frame">
      <div className="frame-top">
        <span className="frame-text" style={{ fontSize: frameFontSize }}>
          {toolList}
        </span>
        {props.webLink ? (
          <a href={props.webLink} target="_blank">
            <svg
              className="frame-link"
              style={{ height: frameIconHeight }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z" />
            </svg>
          </a>
        ) : null}
        {props.githubLink ? (
          <a href={props.githubLink} target="_blank">
            <svg
              className="frame-link"
              style={{ height: frameIconHeight }}
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z" />
            </svg>
          </a>
        ) : null}
      </div>
      <ColoredScrollbars style={{ width: "100%", height: "69vh" }}>
        {newChildren}
      </ColoredScrollbars>
    </div>
  );
}

function Portfolio(props) {
  return (
    <div className="portfolio">
      <div className="portfolio-title-big">Software Portfolio</div>
      {/* <DateDivider year='2019–2020' alignSection={true}/> */}
      <Section
        date="2019–2020"
        id="image-archive"
        title="Massive Scale"
        description={[
          "At the ",
          <a
            key="kindred-section-link"
            className="section-link animate-on-mouse-over"
            href="https://www.sickkids.ca/en/research/about-research-institute/"
            target="_blank"
          >
            SickKids Research Institute
          </a>,
          " I led a 5-person development team which built high-performance computing (HPC) infrastructure that processed 100 million medical images and indexed 10 billion metadata values. I also wrote computer vision and fuzzy matching algorithms to find and anonymize personal health information (PHI) in image pixels. I supplied data to 9 research groups. This led to publications in deep learning and medical journals.",
        ]}
      >
        <Frame
          // webLink=''
          toolList={[
            "ElasticSearch",
            "Python",
            "Ubuntu",
            "High Performance Computing",
          ]}
        >
          <ImageItem src={imageArchiveImage50} />
          <p className="text-item">
            * The medical images above are samples sourced from Wikipedia and
            Google Images.
          </p>
        </Frame>
      </Section>
      <Section
        date="2019"
        id="rareconnect"
        title="Full Stack"
        description={[
          "At the ",
          <a
            key="kindred-section-link"
            className="section-link animate-on-mouse-over"
            href="https://www.sickkids.ca/en/research/about-research-institute/"
            target="_blank"
          >
            SickKids Research Institute
          </a>,
          " I simplified RareConnect's microservice API architecture, doubled test coverage, and rewrote a complex WYSIWYG text editor in React. These features support RareConnect, a social network for people with rare diseases, as it continues to grow beyond 50,000 users.",
        ]}
      >
        <Frame
          webLink="https://www.rareconnect.org/"
          toolList={[
            "Javascript",
            "React",
            "PostgreSQL",
            "Docker",
            "Internationalization",
          ]}
        >
          <div className="markdown-content">
            <ImageItem
              src={rareconnectImage}
              style={{
                /* Make this image flush with the top and sides of the Frame */
                width: "calc(100% + 30px)",
                marginLeft: "-15px",
                marginTop: "-1px",
                borderTopLeftRadius: "0px",
                borderTopRightRadius: "0px",
              }}
            />
            <div className="content-title">
              UX Redesign — Social Post Editor
            </div>
            <div className="content-text">
              The social post editor that I designed and implemented supports
              WYSIWYG formatting and Markdown formatting. Additional features
              include mentions, notifications, and mobile & desktop layouts.
              Posts are <b>automatically translated between 12 languages</b>{" "}
              including right-to-left written languages.
            </div>
            <ImageItem
              src={rareconnectWysiwygImage}
              style={{
                /* Make this image smaller and centered */ width: "80%",
                margin: "0 auto",
                display: "block",
                borderRadius: "5px",
              }}
            />
          </div>
        </Frame>
      </Section>
      <Section
        date="2018"
        id="deepscatter"
        title="Deep Learning"
        description={[
          "At the ",
          <a
            key="kindred-section-link"
            className="section-link animate-on-mouse-over"
            href="https://www.sickkids.ca/en/research/about-research-institute/"
            target="_blank"
          >
            SickKids Research Institute
          </a>,
          " I mentored a brilliant high-school co-op student. I led her in the developement of a web application that could compare ML models and dimensionality reduction algorithms on user uploaded images. I introduced my mentee to new programming languages and she is now a bio-engineering student at UC Berkeley. Our project was a finalist in the ",
          <a
            key="deepscatter-section-link"
            className="section-link animate-on-mouse-over"
            href="https://aigrant.org/"
            target="_blank"
          >
            AI Grant
          </a>,
          " global competition.",
        ]}
      >
        <Frame
          githubLink="https://github.com/danielsnider/Deep-Scatter"
          toolList={["Numpy", "Pandas", "Scikit-Learn", "Matplotlib", "Flask"]}
        >
          <ImageItem src={deepscatterImage} />
        </Frame>
      </Section>
      <Section
        date="2018"
        id="matkit"
        title="Computer Vision"
        description={[
          "At the ",
          <a
            key="kindred-section-link"
            className="section-link animate-on-mouse-over"
            href="https://www.sickkids.ca/en/research/about-research-institute/"
            target="_blank"
          >
            SickKids Research Institute
          </a>,
          " I led development of a computer vision desktop application for microbiology scientists. The application, called Matkit-Image, performs 60+ types of analysis on 5D images. It automates common manual quantification tasks 50x faster with higher detection accuracy and less human introduced bias. This project supported research at 3 labs and won the Mary Jo Haddad SickKids Innovation Award.",
        ]}
      >
        <Frame
          githubLink="https://github.com/danielsnider/Single_Cell_Analysis_Toolkit"
          toolList={[
            "Matlab",
            "Morphology",
            "Adaptive Threshold",
            "Segmentation",
          ]}
        >
          <ImageItem src={matkitMontage} />
        </Frame>
      </Section>
      <Section
        date="2018"
        id="senseact"
        title="Reinforcement Learning"
        description={[
          "For ",
          <a
            key="kindred-section-link"
            className="section-link animate-on-mouse-over"
            href="https://www.kindred.ai/"
            target="_blank"
          >
            Kindred AI
          </a>,
          ", I alpha-tested ",
          <a
            key="sensact-section-link"
            className="section-link animate-on-mouse-over"
            href="https://www.kindred.ai/senseact"
            target="_blank"
          >
            SenseAct's
          </a>,
          " reinforcement learning algorithms (TRPO, PPO, and Soft-Q) on robotic hardware (Universal Robotics arm, Dynamixel servo, iRobot mobile base). I contributed code, documentation, and a pretrained model. This work led me to present two workshops at the Toronto Machine Learning Summit.",
        ]}
      >
        <Frame
          webLink="https://www.kindred.ai/senseact"
          toolList={["OpenAI Gym", "Numpy", "Real-Time Computing"]}
        >
          <ImageItem src={senseactDiagram} />
          <ImageItem src={senseactPresentation} />
        </Frame>
      </Section>
      <Section
        date="2017"
        id="ros-rover"
        title="Robotics"
        description={[
          "At ",
          <a
            key="kindred-section-link"
            className="section-link animate-on-mouse-over"
            href="https://www.ryerson.ca/"
            target="_blank"
          >
            Ryerson University
          </a>,
          " I led the software development of a self-driving, 6-wheeled rover with a robot arm and depth camera. As a part of the ",
          <a
            key="kindred-section-link"
            className="section-link animate-on-mouse-over"
            href="https://teamr3.ca/"
            target="_blank"
          >
            R3
          </a>,
          " engineering design team, we competed in the ",
          <a
            key="kindred-section-link"
            className="section-link animate-on-mouse-over"
            href="http://urc.marssociety.org/"
            target="_blank"
          >
            University Rover Challenge
          </a>,
          " at the Mars Desert Research Station, Utah. In our first year we placed 21st out of 82 teams from 13 countries.",
        ]}
      >
        <Frame
          githubLink="https://github.com/danielsnider/ros-rover"
          toolList={[
            "ROS",
            "OpenCV",
            "Self-Driving",
            "Point Clouds",
            "Embedded Computing",
          ]}
        >
          <MarkdownItem src={rosRoverMarkdown} />
        </Frame>
      </Section>
      <Section
        date="2017"
        id="breqwatr"
        title="DevOps"
        description={[
          "At ",
          <a
            key="kindred-section-link"
            className="section-link animate-on-mouse-over"
            href="https://breqwatr.com/"
            target="_blank"
          >
            Breqwatr Inc.
          </a>,
          " I contributed full-stack features and devops automation to a highly-available OpenStack-based cloud platform. I built horizontally-scalable solutions using distributed software. I participated in on-premise deployments at four customer datacenters and I led monitoring of their systems thereafter.",
        ]}
      >
        <Frame
          webLink="https://breqwatr.com/"
          toolList={[
            "OpenStack",
            "HAProxy",
            "RabbitMQ",
            "Chef",
            "Zookeeper",
            "MySQL Cluster",
          ]}
        >
          <ImageItem src={breqwatrMontage} />
        </Frame>
      </Section>
      <Section
        date="2016"
        id="cell-bio"
        title="Data Science"
        description={[
          "At the ",
          <a
            key="kindred-section-link"
            className="section-link animate-on-mouse-over"
            href="https://www.sickkids.ca/en/research/about-research-institute/"
            target="_blank"
          >
            SickKids Research Institute
          </a>,
          " I contributed statistical analysis to 7 journal publications and 1 award winning research poster. I was consulted as a domain expert in computer vision and high-performance computing and I represented our bioinformatics team at a research expo.",
        ]}
      >
        <Frame
          githubLink="https://github.com/danielsnider/cell-bio"
          toolList={[
            "R²",
            "p–value",
            "Computer Vision",
            "Variance",
            "Normalization",
          ]}
        >
          <MarkdownItem src={cellBioMarkdown} />
        </Frame>
      </Section>
    </div>
  );
}

function ImageItem(props) {
  return (
    <div className="image-item">
      <img
        id={props.id}
        src={props.src}
        style={props.style}
        className="image-img"
      />
    </div>
  );
}

function MarkdownItem(props) {
  const getMarkdownText = () => {
    var rawMarkup = marked(props.src);
    return { __html: rawMarkup };
  };

  return (
    <div className="markdown-content-container">
      <div
        className="markdown-content"
        dangerouslySetInnerHTML={getMarkdownText()}
      />
    </div>
  );
}

function Footer(props) {
  return (
    <div className="footer">
      <div className="slogan1">When I start something,</div>
      <div className="slogan2">
        I do it with everything I have. Passion, love, and devotion to name a
        few.
      </div>
      {/* <div className='made-using'>
        Website made using <a className='section-link animate-on-mouse-over' target="_blank" href='https://reactjs.org/docs/hooks-intro.html'>React Hooks</a> and <a className='section-link animate-on-mouse-over' target="_blank" href='http://dynamicsjs.com/'>Dynamics.js</a>.
      </div> */}
    </div>
  );
}

var mountNode = document.getElementById("app");
ReactDOM.render(<Main name="Daniel" />, mountNode);
