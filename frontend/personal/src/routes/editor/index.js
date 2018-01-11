import { Card, Steps, Button, message, Affix, Input, Row, Col, Form } from 'antd';
import { connect } from 'dva'
import EditArea from './components/EditArea'
import './index.css'
import classnames from 'classnames';
import styles from './index.less';
import ReactQuill from 'react-quill';
import theme from 'react-quill/dist/quill.snow.css';
const {TextArea} = Input;
const FormItem = Form.Item
const Step = Steps.Step;
const Editor = ({
  dispatch,
  editor,
  form,
}) => {
  const {
    current,
    content,
  } = editor
  const {
      getFieldDecorator, 
      getFieldValue, 
      validateFields
  } = form;
  const steps = [
    {
      title: '编辑',
    },
    {
      title: '预览',
    },
    {
      title: '保存',
    }
  ]

  const next = (index) => {
    dispatch({
      type: 'editor/update',
      payload:{
        current: current+1,
        content: getFieldValue('editArea'),
      }
    })
  }

  const prev = () => {
    dispatch({
      type: 'editor/update',
      payload:{
        current: current-1,
      }
    })
  }

  const editAreaProprs = {
    dispatch,
    current,
    content,
  }
  const modules = {
    toolbar: [
        ['bold', 'italic', 'underline', 'strike'], // toggled buttons
        ['blockquote', 'code-block'],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: 'ordered'}, { list: 'bullet' }],
        [{ script: 'sub'}, { script: 'super' }], // superscript/subscript
        [{ indent: '-1'}, { indent: '+1' }], // outdent/indent
        [{ direction: 'rtl' }], // text direction
        [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ font: [] }],
        [{ align: [] }],
        ['link', 'image', 'video'],
        ['clean'] // remove formatting button
    ],
  };
  const formats = [
      'header', 'font', 'size',
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image', 'video'
  ];
  return(
    <div>
      <Card style={{width: "100%"}} >
      <div>
        <Steps current={current}>
          {steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>
        <div>
          <div className={styles.content}>
              {
                  current == 0
                  &&
                  <Row > 
                      <Form>
                          <Card
                              title={<div className={classnames(styles['card-header'], { [styles.pink]: true})}>
                              </div>}
                              bordered={false} noHovering>
                              <FormItem>
                                  {
                                  getFieldDecorator('editArea',{
                                    initialValue: content,
                                  })(
                                      <ReactQuill
                                          placeholder="Write something..."
                                          modules={modules}
                                          formats={formats}
                                          >
                                      </ReactQuill>
                                  ) 
                                  }
                              </FormItem>
                          </Card> 
                      </Form>
                  </Row>
              }
              {
                  current == 1
                  &&
                  <div dangerouslySetInnerHTML={{__html: getFieldValue('editArea')}}></div>
              }
              {
                  current == 2
                  &&
                  <div>
                      
                  </div>
              }

          </div>
        </div>
        <div className="steps-action">
          { 
            current < 2
            &&
            <Button type="primary" onClick={(current) => next()}>
              {
                current == 0
                &&
                "预览"
              }
              {
                current == 1
                &&
                "保存"
              }
            </Button>
          }
          {
            current === 2
            &&
            <Button type="primary" onClick={() => message.success('Processing complete!')}>完成</Button>
          }
          {
            current > 0 
            &&
            <Button style={{ marginLeft: 8 }} onClick={() => prev()}>
              上一步
            </Button>
          }
        </div>
      </div>
      </Card>
    </div>
  )
}

export default connect(({editor}) => ({editor}))(Form.create()(Editor))