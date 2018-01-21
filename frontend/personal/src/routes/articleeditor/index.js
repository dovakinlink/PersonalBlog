import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import {Card } from 'antd'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'

class Articleeditor extends React.Component {
  render() {
    const { articleeditor, dispatch } = this.props
    const { htmlContent } = articleeditor
    const handleHTMLChange = (content) => {
      dispatch({
        type: 'articleeditor/update',
        payload: {
          htmlContent: content,
        }
      })
      console.log("content: " + content);
    }

    // 不允许选择大于1M的文件
    const validateFn = (file) => {
      debugger
      return file.size < 1024 * 1024
    }
    const uploadFn = (param) => {

      const serverURL = 'http://localhost:8000/api/upload/fileupload'
      const xhr = new XMLHttpRequest
      const fd = new FormData()
    
      // libraryId可用于通过mediaLibrary示例来操作对应的媒体内容
      console.log(param.libraryId)
    
      const successFn = (response) => {
        // 假设服务端直接返回文件上传后的地址
        // 上传成功后调用param.success并传入上传后的文件地址
        debugger
        param.success({
          url: 'http://localhost:3000' + JSON.parse(xhr.responseText).file
        })
      }
    
      const progressFn = (event) => {
        // 上传进度发生变化时调用param.progress
        param.progress(event.loaded / event.total * 100)
      }
    
      const errorFn = (response) => {
        // 上传发生错误时调用param.error
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
      placeholder: 'Hello World!',
      initialContent: htmlContent,
      onChange: handleHTMLChange,
      viewWrapper: '.demo',
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
        }, {
          type: 'dropdown',
          text: <span>下拉菜单</span>,
          component: <h1 style={{width: 200, color: '#ffffff', padding: 10, margin: 0}}>Hello World!</h1>
        }, {
          type: 'modal',
          text: <span style={{paddingRight: 10,paddingLeft: 10}}>弹窗</span>,
          className: 'modal-button',
          modal: {
            title: '这是一个弹窗',
            showClose: true,
            showCancel: true,
            showConfirm: true,
            confirmable: true,
            onConfirm: () => console.log(1),
            onCancel: () => console.log(2),
            onClose: () => console.log(3),
            children: (
              <div style={{width: 480, height: 320, padding: 30}}>
                <span>Hello World！</span>
              </div>
            )
          }
        }
      ]
    }

    return (
      <Card>
        <div className="demo">
          <BraftEditor {...editorProps} />
        </div>
      </Card>
    )

  }

}
export default connect(({ articleeditor }) => ({ articleeditor }))(Articleeditor)