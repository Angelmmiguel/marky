import React from 'react';
// import remark from 'remark';
// import reactRenderer from 'remark-react';

// Components
import Editor from '../../components/Editor';

// Styles
import './Typewriter.css';

class Typewriter extends React.Component {

  constructor(props) {
    super(props);

    // Binds
    this.onChange = this.onChange.bind(this);

    this.state = {
      text: ''
    }
  }

  onChange(text) {
    this.setState({ text });
  }

  render() {
    return <section className="Typewriter">
      <Editor onChange={ this.onChange } />
    </section>
  }
}

export default Typewriter;
