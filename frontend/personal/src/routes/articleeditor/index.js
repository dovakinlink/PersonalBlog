import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import {Card } from 'antd'
import Draft from 'draft-js'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'
import {stateToHTML} from 'draft-js-export-html';


class Articleeditor extends React.Component {
 
  render() {

    const backdraft = require('backdraft-js');
    const { articleeditor, dispatch } = this.props
    const { htmlContent, content } = articleeditor
    const handleChange = (content) => {
      dispatch({
        type: 'articleeditor/update',
        payload: {
          content: content,
        }
      })
      console.log("content: " + content);
    }
    const handleHTMLChange = (html) => {
      dispatch({
        type: 'articleeditor/update',
        payload: {
          htmlContent: html,
        }
      })
      console.log("content: " + html);
    }
    // 不允许选择大于1M的文件
    const validateFn = (file) => {
      debugger
      return file.size < 1024 * 1024
    }
    
    // 图片上传函数
    const uploadFn = (param) => {

      const serverURL = 'http://localhost:8000/api/upload/fileupload'
      const xhr = new XMLHttpRequest
      const fd = new FormData()
    
      const successFn = (response) => {
        param.success({
          url: 'http://localhost:3000' + JSON.parse(xhr.responseText).file
        })
      }
    
      const progressFn = (event) => {
        param.progress(event.loaded / event.total * 100)
      }
    
      const errorFn = (response) => {
        param.error({
          msg: 'unable to upload.'
        })
      }
    
      xhr.upload.addEventListener("progress", progressFn, false)
      xhr.addEventListener("load", successFn, false)
      xhr.addEventListener("error", errorFn, false)
      xhr.addEventListener("abort", errorFn, false)
    
      fd.append('file', param.file)
      xhr.open('POST', serverURL, true)
      xhr.send(fd)
    
    }

    const editorProps = {
      initialContent: '',
      onChange: handleChange,
      onHTMLChange: handleHTMLChange,
      media: {
        image: true, // 开启图片插入功能
        video: true, // 开启视频插入功能
        audio: true, // 开启音频插入功能
        validateFn: null, // 指定本地校验函数，说明见下文
        uploadFn: uploadFn // 指定上传函数，说明见下文
      },
      // 增加自定义预览按钮
      extendControls: [
        {
          type: 'split',
        },
        {
          type: 'button',
          text: '预览',
          className: 'preview-button',
          onClick: () => {
            window.open().document.write(htmlContent)
          }
        },{
          type: 'modal',
          text: <span style={{paddingRight: 10,paddingLeft: 10,}}>发布</span>,
          className: 'modal-button',
          modal: {
            title: '请确认',
            showClose: true,
            showCancel: true,
            showConfirm: true,
            confirmable: true,
            onConfirm: () => {
              dispatch({
                type: 'articleeditor/create',
                payload: {
                  article:{
                    title: '文章'
                  },
                  content:{
                    ...content,
                    htmlcontent:htmlContent
                  }
                }
              })
            },
            onCancel: () => console.log(2),
            onClose: () => console.log(3),
            children: (
              <div style={{width: 120, height: 80, padding: 30}}>
                <span>确认发布？</span>
              </div>
            )
          }
        }
      ]
    }

    return (
      <div>
        <Card>
          <div>
            <BraftEditor {...editorProps} />
          </div>
        </Card>
      </div>
    )

  }
}
export default connect(({ articleeditor }) => ({ articleeditor }))(Articleeditor)