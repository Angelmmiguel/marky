import React from 'react';
import PropTypes from 'prop-types';
// Remark things
import remark from 'remark';
import RemarkLowlight from 'remark-react-lowlight';
import reactRenderer from 'remark-react';

// Styles
import './highlight.css';
import './Preview.css';

// Languages
import js from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';

// Sanitization schema
import sanitizeGhSchema from 'hast-util-sanitize/lib/github.json';

// Allow classNames in code
sanitizeGhSchema.attributes['code'] = ['className'];

class Preview extends React.PureComponent {

  renderMarkdown() {
    return remark()
      .use(reactRenderer, {
        sanitize: sanitizeGhSchema,
        remarkReactComponents: {
          code: RemarkLowlight({
            javascript: js,
            js,
            css
          })
        }
      })
      .processSync(this.props.text).contents;
  }

  render() {
    return <article className="Preview mw7 center">
      <div id='preview'>
        { this.renderMarkdown() }
      </div>
    </article>
  }
}

// Property types
Preview.PropTypes = {
  text: PropTypes.string.isRequired
}

// Export
export default Preview;
