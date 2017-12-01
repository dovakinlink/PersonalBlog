import React from 'react'
import { Row, Col, Card, Button } from 'antd'
import swal from 'sweetalert2'
import styles from './alert.less'
import * as sa2css from 'sweetalert2/dist/sweetalert2.min.css'

class SweetAlert extends React.Component {

  handleAlert = (props) => {
    swal(props);
  }

  render () {
    return (
      <div>
        <Row className={styles.header}>
          <Col span={24}>
            <h1>Sweet Alert 2</h1>
            <h2>A beautiful, responsive, customizable, accessible (WAI-ARIA) replacement for JavaScript's popup boxes, for more detail, please see the <a href='https://github.com/limonte/sweetalert2' target='_blank'>doc</a></h2>
          </Col>
        </Row>
        <Row gutter={48} className={styles.showcase}>
          <Col span={8}>
            <Card bordered={false} noHovering>
              <p>A basic message</p>
              <Button type='primary' size='large'
                onClick={() => this.handleAlert({
                  title: 'Any fool can use a computer'})}
                >Try Me</Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card bordered={false} noHovering>
              <p>A title with a text under</p>
              <Button type='primary' size='large'
                onClick={() => this.handleAlert({
                  title: 'The Internet?',
                  text: 'That thing is still around?',
                  type: 'question'})}
                >Try Me</Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card bordered={false} noHovering>
              <p>A success message</p>
              <Button type='primary' size='large'
                onClick={() => this.handleAlert({
                  title: 'Good job!',
                  text: 'You clicked the button.',
                  type: 'success'})}
                >Try Me</Button>
            </Card>
          </Col>
        </Row>
        <Row gutter={48} className={styles.showcase}>
          <Col span={8}>
            <Card bordered={false} noHovering>
              <p>A message with auto close timer</p>
              <Button type='primary' size='large'
                onClick={() => this.handleAlert({
                  title: 'Auto close alert!',
                  text: 'I will close in 2 seconds.',
                  timer: 2000})}
                >Try Me</Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card bordered={false} noHovering>
              <p>Custom HTML description and buttons</p>
              <Button type='primary' size='large'
                onClick={() => this.handleAlert({
                  title: '<i>HTML</i> <u>example</u>',
                  type: 'info',
                  html:
                    'You can use <b>bold text</b>, ' +
                    '<a href="//github.com">links</a> ' +
                    'and other HTML tags',
                  showCloseButton: true,
                  showCancelButton: true,
                  confirmButtonText: '<i class="anticon anticon-like-o"></i> Great!',
                  cancelButtonText: '<i class="anticon anticon-dislike-o"></i>'
                })}
                >Try Me</Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card bordered={false} noHovering>
              <p>A warning message, with a function attached to the "Confirm"-button...</p>
              <Button type='primary' size='large'
                onClick={() => this.handleAlert({
                  title: 'Are you sure?',
                  text: "You won't be able to revert this!",
                  type: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, delete it!'
                })}
                >Try Me</Button>
            </Card>
          </Col>
        </Row>
        <Row gutter={48} className={styles.showcase}>
          <Col span={8}>
            <Card bordered={false} noHovering>
              <p>... and by passing a parameter, you can execute something else for "Cancel".</p>
              <Button type='primary' size='large'
                onClick={() => swal({
                  title: 'Are you sure?',
                  text: "You won't be able to revert this!",
                  type: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, delete it!',
                  cancelButtonText: 'No, cancel!',
                  confirmButtonClass: 'btn btn-success',
                  cancelButtonClass: 'btn btn-danger'
                }).then(() => {
                  swal(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                }, (dismiss) => {
                  // dismiss can be 'cancel', 'overlay',
                  // 'close', and 'timer'
                  if (dismiss === 'cancel') {
                    swal(
                      'Cancelled',
                      'Your imaginary file is safe :)',
                      'error'
                    )
                  }
                })}
                >Try Me</Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card bordered={false} noHovering>
              <p>A message with custom width, padding and background</p>
              <Button type='primary' size='large'
                onClick={() => this.handleAlert({
                  title: 'Custom width, padding, background.',
                  width: 600,
                  padding: 100,
                  background: '#fff url(//bit.ly/1Nqn9HU)'
                })}
                >Try Me</Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card bordered={false} noHovering>
              <p>Ajax request example</p>
              <Button type='primary' size='large'
                onClick={() => this.handleAlert({
                  title: 'Submit email to run ajax request',
                  input: 'email',
                  showCancelButton: true,
                  confirmButtonText: 'Submit',
                  showLoaderOnConfirm: true,
                  preConfirm: function (email) {
                    return new Promise((resolve, reject) => {
                      setTimeout(() => {
                        if (email === 'taken@example.com') {
                          reject('This email is already taken.')
                        } else {
                          resolve()
                        }
                      }, 2000)
                    })
                  },
                  allowOutsideClick: false
                })}
                >Try Me</Button>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default SweetAlert
