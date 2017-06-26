import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import Textarea from 'react-textarea-autosize';

// Styles
import './Editor.css';

class Editor extends React.Component {

  constructor(props) {
    super(props);

    // Binds
    this.onChange = this.onChange.bind(this);

    this.state = {
      text: props.initialText
    }
  }

  get config() {
    return this.props.config;
  }

  onChange(e) {
    let value = e.target.value;
    this.setState({ text: value });

    // Props!
    this.props.onChange(value);
  }

  render() {
    let style = {
      lineHeight: this.config.lineHeight,
      fontSize: `${this.config.fontSize}em`,
      fontFamily: this.config.fontFamily
    }

    return <section className="Editor mw7 center">
      <div className="Editor__Input w-100">
        <Textarea
          className="w-100 b--none mousetrap"
          autoFocus="true"
          style={ style }
          value={ this.state.text }
          onChange={ this.onChange }
          placeholder="Here you can write your next story 😄" />
      </div>
    </section>;
  }
}

// Props!
Editor.PropTypes = {
  onChange: PropTypes.func.isRequired,
  initialText: PropTypes.string.isRequired
}

export default connect(state => {
  return {
    config: state.config
  }
})(Editor);
