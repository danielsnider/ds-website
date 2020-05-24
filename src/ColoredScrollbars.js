import css from 'dom-css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';

import mouseArrowSvg from './images/mouse-arrow.svg'
import mouseBodySvg from './images/mouse-body.svg'

export default class ColoredScrollbars extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {
          top: 0,
          scrollTop: 0,
          scrollHeight: 0,
          clientHeight: 0
        };
        this.handleUpdate = this.handleUpdate.bind(this);
        this.renderView = this.renderView.bind(this);
        this.renderThumb = this.renderThumb.bind(this);
        this.renderThumbHorizontal = this.renderThumbHorizontal.bind(this);
    }

    handleUpdate(values) {
      const { shadowTop, shadowBottom, bottomScrollText } = this.refs;
      const { scrollTop, scrollHeight, clientHeight } = values;
      const shadowTopOpacity = 1 / 20 * Math.min(scrollTop, 20);
      const bottomScrollTop = scrollHeight - clientHeight;
      const shadowBottomOpacity = 1 / 20 * (bottomScrollTop - Math.max(scrollTop, bottomScrollTop - 20));
      css(shadowTop, { opacity: shadowTopOpacity });
      css(shadowBottom, { opacity: shadowBottomOpacity });
      css(bottomScrollText, { opacity: shadowBottomOpacity ? 1-shadowTopOpacity: 0 });
      const { top } = values;
      this.setState({ top });
    }

    renderView({ style, ...props }) {
        const { top } = this.state;
        const viewStyle = {
            backgroundColor: 'white',
            padding: '0px 15px 0px 0px',
            backgroundColor: 'rgb(22, 23, 26)',
        };
        return (
            <div
                className="scroll-box"
                style={{ ...style, ...viewStyle }}
                {...props}/>
        );
    }

    renderThumb({ style, ...props }) { // This is the vertical scroll bar
        const { top } = this.state;
        const thumbStyle = {
            backgroundColor: 'white',
            borderRadius: '5px',
            position: 'absolute',
            left: '-1px',
            width: '8px',
        };
        return (
            <div
                style={{ ...style, ...thumbStyle }}
                {...props}/>
        );
    }

    renderThumbHorizontal({ style, ...props }) {
        const { top } = this.state;
        const thumbStyle = {
            backgroundColor: 'white',
            borderRadius: '5px',
            display: 'none',
        };
        return (
            <div
                style={{ ...style, ...thumbStyle }}
                {...props}/>
        );
    }

    render() {
      const { style, ...props } = this.props;
      const containerStyle = {
          ...style,
          position: 'relative',
      };
      const shadowTopStyle = {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 15,
          background: 'linear-gradient(to bottom, rgba(22, 23, 26, 0.5) 0%, rgba(22, 23, 26, 0) 50%)'
      };
      const shadowBottomStyle = {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 20,
        background: 'linear-gradient(to top, rgba(22, 23, 26, 0.5) 0%, rgba(22, 23, 26, 0) 50%)',
        borderBottom: this.props.showBottomBorder ? '1px solid rgb(225, 228, 232, .2)' : undefined
      };

        return (
          <div style={containerStyle}>
          <Scrollbars
              ref="scrollbars"
              className="scrollbar"
              renderView={this.renderView}
              renderThumbHorizontal={this.renderThumbHorizontal}
              renderThumbVertical={this.renderThumb}
              onUpdate={this.handleUpdate}
              {...this.props}/>
          <div
              ref="shadowTop"
              style={shadowTopStyle}/>
          <div
              ref="shadowBottom"
              style={shadowBottomStyle}/>

          <div ref="bottomScrollText" className="scroll-outer">
            <div className="scroll-inner">
              <div className='scroll-text'>SCROLL</div>
              <img className='scroll-svg1' alt="" src={mouseBodySvg} />
              <img className='scroll-svg2' alt="" src={mouseArrowSvg} />
              <img className='scroll-svg3' alt="" src={mouseArrowSvg} />
            </div>
          </div>

      </div>

        );
    }
}