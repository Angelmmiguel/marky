import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import Textarea from 'react-textarea-autosize';
import LineInfo from '../LineInfo';

// Styles
import './Editor.css';

class Editor extends React.Component {

  constructor(props) {
    super(props);

    // Binds
    this.onChange = this.onChange.bind(this);

    this.state = {
      text: ''
    }
  }

  onChange(e) {
    let value = e.target.value;
    this.setState({ text: value });

    // Props!
    this.props.onChange(value);
  }

  render() {
    return <section className="Editor mw7 center">
      <div className="Editor__Line">
        <LineInfo text={ this.state.text } offset={ 16 * 1.2 }/>
      </div>
      <div className="Editor__Input">
        <Textarea
          autoFocus="true"
          style={ { lineHeight: '1.5em' } }
          value={ this.state.text }
          onChange={ this.onChange } />
      </div>
    </section>;
  }
}

// Props!
Editor.PropTypes = {
  onChange: PropTypes.func.isRequired
}

export default connect(state => {
  return {
    config: state.config
  }
})(Editor);
