// import {Form, Row, Col, Card, Input } from 'antd'
// import marked from 'marked'
// import classnames from 'classnames';
// import styles from './editor.less';
// import ReactQuill from 'react-quill';
// import theme from 'react-quill/dist/quill.snow.css';
// const {TextArea} = Input;
// const FormItem = Form.Item

// const EditArea = ({
//     dispatch,
//     current,
//     content,
//     form
// }) => {
//     const {
//         getFieldDecorator, 
//         getFieldValue, 
//         validateFields
//     } = form;
//     const modules = {
//         toolbar: [
//             ['bold', 'italic', 'underline', 'strike'], // toggled buttons
//             ['blockquote', 'code-block'],
//             [{ header: 1 }, { header: 2 }], // custom button values
//             [{ list: 'ordered'}, { list: 'bullet' }],
//             [{ script: 'sub'}, { script: 'super' }], // superscript/subscript
//             [{ indent: '-1'}, { indent: '+1' }], // outdent/indent
//             [{ direction: 'rtl' }], // text direction
//             [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
//             [{ header: [1, 2, 3, 4, 5, 6, false] }],
//             [{ color: [] }, { background: [] }], // dropdown with defaults from theme
//             [{ font: [] }],
//             [{ align: [] }],
//             ['link', 'image', 'video'],
//             ['clean'] // remove formatting button
//         ],
//     };
//     const formats = [
//         'header', 'font', 'size',
//         'bold', 'italic', 'underline', 'strike', 'blockquote',
//         'list', 'bullet', 'indent',
//         'link', 'image', 'video'
//     ];
//     return(
//         <div className={styles.content}>
//             {
//                 current == 0
//                 &&
//                 <Row > 
//                     <Form>
//                         <Card
//                             title={<div className={classnames(styles['card-header'], { [styles.pink]: true})}>
//                             </div>}
//                             bordered={false} noHovering>
//                             <FormItem>
//                                 {
//                                 getFieldDecorator('editArea',{
//                                 })(
//                                     <ReactQuill
//                                         value={content}
//                                         placeholder="Write something..."
//                                         modules={modules}
//                                         formats={formats}
//                                         >
//                                     </ReactQuill>
//                                 ) 
//                                 }
//                             </FormItem>
//                         </Card> 
//                     </Form>
//                 </Row>
//             }
//             {
//                 current == 1
//                 &&
//                 <div dangerouslySetInnerHTML={{__html: getFieldValue('editArea')}}></div>
//             }
//             {
//                 current == 2
//                 &&
//                 <div>
                    
//                 </div>
//             }

//         </div>
//     )
// }

// export default Form.create()(EditArea);