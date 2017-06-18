import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './LineInfo.css';

class LineInfo extends React.PureComponent {

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.text);
  }

  detectLine(current, status = {}) {
    let output = Object.assign({}, status, { tag: '' });

    if (status.inCode && (current !== '```' || current !== '~~~')) {
      output.prev = current;
      return output;
    }

    if (current === '```'){
      // Close or open code
      output.inCode = !status.inCode;
      output.tag = 'code';
    } else if (current.match(/^\s{0,3}([#]+)\s+.*/)) {
      // Header
      let m = current.match(/^\s{0,3}([#]+)\s+.*/);
      let count = m[m.length - 1].length;
      output.tag = `h${count}`;
    } else if (current.match(/^\s{0,3}!\[.*\]\(.*\)/)) {
      // Image
      output.tag = 'img';
    } else if (current.match(/^\s{0,3}\*\s{1}.*/)) {
      // List
      output.tag = 'li';
    } else if (current.match(/^\s{4,}.*/) && !status.prev.match(/^\s{4,}.*/)) {
      // Code
      output.tag = 'code';
    } else if ((status.prev === '' && current !== '') || status.prev === undefined) {
      output.tag = 'p';
    }

    output.prev = current;
    return output;
  }

  renderLines(text) {
    let lines = text.split('\n'),
      numLines = lines.length,
      output = [],
      status = {};

    for(let i = 0; i < numLines; i++) {

      let top = i === 0 ? `calc((${i} * ${this.props.offset}px))` :
                          `calc((${i} * ${this.props.offset}px) + (.75em * ${i}))`;

      status = this.detectLine(lines[i], status);
      output.push(
        <span className="LineInfo__Line" style={ { top: top }} key={i}>
          { status.tag }
        </span>
      );
    }

    return output;
  }

  render() {
    return <div className="LineInfo">
      { this.renderLines(this.props.text) }
    </div>
  }
}

// Props!
LineInfo.PropTypes = {
  text: PropTypes.string.isRequired
}

export default LineInfo;
