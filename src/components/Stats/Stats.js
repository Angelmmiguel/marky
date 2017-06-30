import React from 'react';
import PropTypes from 'prop-types';
import stripMarkdown from 'remove-markdown';

// Styles
import './Stats.css';

class Stats extends React.PureComponent {

  cleanText(text) {
    return stripMarkdown(text);
  }

  render() {
    // Count the words
    let cleanText = this.cleanText(this.props.text);
    let words = cleanText.trim().replace(/\s+/gi, ' ').split(' ').length;

    return <div>
      Characters: { cleanText.length } |
      Words: { words }
    </div>;
  }
}

// Props!
Stats.PropTypes = {
  text: PropTypes.string.isRequired
}

export default Stats;
