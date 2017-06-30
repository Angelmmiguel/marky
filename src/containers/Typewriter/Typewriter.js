import React from 'react';
import Mousetrap from 'mousetrap';

// Components
import Editor from '../../components/Editor';
import Preview from '../../components/Preview';
import Stats from '../../components/Stats';

// Styles
import './Typewriter.css';

class Typewriter extends React.Component {

  constructor(props) {
    super(props);

    // Binds
    this.onChange = this.onChange.bind(this);
    this.switchViews = this.switchViews.bind(this);

    this.state = {
      text: '',
      preview: false
    }
  }

  componentDidMount() {
    Mousetrap.bind(['command+m', 'ctrl+m'], this.switchViews);
  }

  componentWillUnmount() {
    Mousetrap.unbind(['command+m', 'ctrl+m']);
  }

  switchViews() {
    this.setState({
      preview: !this.state.preview
    });
    // return false to prevent default browser behavior
    // and stop event from bubbling
    return false;
  }

  onChange(text) {
    this.setState({ text });
  }

  renderView() {
    if (this.state.preview) {
      return <Preview text={ this.state.text } />;
    } else {
      return <Editor onChange={ this.onChange } initialText={ this.state.text } />
    }
  }

  render() {
    return <section className="Typewriter">
      <Stats text={ this.state.text } />
      { this.renderView() }
    </section>
  }
}

export default Typewriter;
