import React from 'react';
import classnames from 'classnames';
import { Row, Col, Card, Input, Form } from 'antd';
import ReactQuill from 'react-quill';
import theme from 'react-quill/dist/quill.snow.css';
import styles from './editor.less';
import marked from 'marked';

const {TextArea} = Input;
const FormItem = Form.Item;
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});
class Dashboard extends React.Component {
  state = {
    text: '# 11'
  }

  handleChange = (value) => {
    this.setState({ text: value })
    console.log("value is : " + value);
  }

  render() {
    const { getFieldDecorator, getFieldValue, validateFields} = this.props.form;
    // const modules = {
    //   toolbar: [
    //     ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    //     ['blockquote', 'code-block'],

    //     [{ header: 1 }, { header: 2 }],               // custom button values
    //     [{ list: 'ordered'}, { list: 'bullet' }],
    //     [{ script: 'sub'}, { script: 'super' }],      // superscript/subscript
    //     [{ indent: '-1'}, { indent: '+1' }],          // outdent/indent
    //     [{ direction: 'rtl' }],                         // text direction

    //     [{ size: ['small', false, 'large', 'huge'] }],  // custom dropdown
    //     [{ header: [1, 2, 3, 4, 5, 6, false] }],

    //     [{ color: [] }, { background: [] }],          // dropdown with defaults from theme
    //     [{ font: [] }],
    //     [{ align: [] }],
    //     ['link', 'image', 'video'],
    //     ['clean']                                         // remove formatting button
    //   ],
    // };

    // const formats = [
    //   'header', 'font', 'size',
    //   'bold', 'italic', 'underline', 'strike', 'blockquote',
    //   'list', 'bullet', 'indent',
    //   'link', 'image', 'video'
    // ];

    return (
      <div>
        <Row className={styles.header}>
          <Col span={24}>
            <h1>React Quill Editor</h1>
            <h2>A Quill component for React, For more detail, please see the <a href="https://github.com/zenoamaro/react-quill" target="_blank">doc</a>.</h2>
          </Col>
        </Row>
        <Row className={styles.showcase}>
          <Form>
            <Col span={12}>
              <Card
              title={<div className={classnames(styles['card-header'], { [styles.pink]: true})}>
                  <h4>编辑</h4>
                </div>}
              bordered={false} noHovering>
                {/* <ReactQuill
                  theme="snow"
                  value={this.state.text}
                  placeholder="Write something..."
                  modules={modules}
                  formats={formats}
                  onChange={this.handleChange}>
                </ReactQuill> */}
                <Form.Item>
                  {
                    getFieldDecorator('editArea',{
                      initialValue: this.state.text
                    })(
                      <TextArea 
                        autosize={{minRows: 18}}
                      />
                    )                
                  }
                </Form.Item>

              </Card>
            </Col>
            <Col span={1}></Col>
            <Col span={11}>
              <Card title={<div className={classnames(styles['card-header'], { [styles.yellow]: true})}>
                  <h4>预览</h4>
                </div>} bordered={false} noHovering>
                <div dangerouslySetInnerHTML={{__html: marked(getFieldValue('editArea'))}}></div>
              </Card>
            </Col>
          </Form>
        </Row>
      </div>
    );
  }
}

Dashboard.propTypes = {};

export default Form.create()(Dashboard);
