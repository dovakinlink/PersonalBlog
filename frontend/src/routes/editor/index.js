import React from 'react';
import classnames from 'classnames';
import { Row, Col, Card } from 'antd';
import ReactQuill from 'react-quill';
import theme from 'react-quill/dist/quill.snow.css';
import styles from './editor.less';

class Dashboard extends React.Component {
  state = {
    text: '<p><span style="font-size: 18px;">Quill Rich Text Editor</span></p><p><br></p><p>Quill is a free, <a href="https://github.com/quilljs/quill/" target="_blank">open source</a> WYSIWYG editor built for the modern web. With its <a href="http://quilljs.com/docs/modules/" target="_blank">extensible architecture</a> and a <a href="http://quilljs.com/docs/api/" target="_blank">expressive API</a> you can completely customize it to fulfill your needs. Some built in features include:</p><p><br></p><ul><li>Fast and lightweight</li><li>Semantic markup</li><li>Standardized HTML between browsers</li><li>Cross browser support including Chrome, Firefox, Safari, and IE 9+</li></ul><p><br></p><p><span style="font-size: 18px;">Downloads</span></p><p><br></p><ul><li><a href="https://quilljs.com" target="_blank">Quill.js</a>, the free, open source WYSIWYG editor</li><li><a href="https://zenoamaro.github.io/react-quill" target="_blank">React-quill</a>, a React component that wraps Quill.js</li></ul>'
  }

  handleChange = (value) => {
    this.setState({ text: value })
  }

  render() {

    const modules = {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],

        [{ header: 1 }, { header: 2 }],               // custom button values
        [{ list: 'ordered'}, { list: 'bullet' }],
        [{ script: 'sub'}, { script: 'super' }],      // superscript/subscript
        [{ indent: '-1'}, { indent: '+1' }],          // outdent/indent
        [{ direction: 'rtl' }],                         // text direction

        [{ size: ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ header: [1, 2, 3, 4, 5, 6, false] }],

        [{ color: [] }, { background: [] }],          // dropdown with defaults from theme
        [{ font: [] }],
        [{ align: [] }],
        ['link', 'image', 'video'],
        ['clean']                                         // remove formatting button
      ],
    };

    const formats = [
      'header', 'font', 'size',
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image', 'video'
    ];

    return (
      <div>
        <Row className={styles.header}>
          <Col span={24}>
            <h1>React Quill Editor</h1>
            <h2>A Quill component for React, For more detail, please see the <a href="https://github.com/zenoamaro/react-quill" target="_blank">doc</a>.</h2>
          </Col>
        </Row>
        <Row className={styles.showcase}>
          <Col span={12}>
            <Card
            title={<div className={classnames(styles['card-header'], { [styles.pink]: true})}>
                <h4>Editor</h4>
              </div>}
            bordered={false} noHovering>
              <ReactQuill
                theme="snow"
                value={this.state.text}
                placeholder="Write something..."
                modules={modules}
                formats={formats}
                onChange={this.handleChange}>
              </ReactQuill>
            </Card>
          </Col>
          <Col span={1}></Col>
          <Col span={11}>
            <Card title={<div className={classnames(styles['card-header'], { [styles.yellow]: true})}>
                <h4>HTML</h4>
              </div>} bordered={false} noHovering>
              {this.state.text}
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

Dashboard.propTypes = {};

export default Dashboard;
