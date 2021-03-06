import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button, Row, Form, Input } from 'antd'
import { config } from 'utils'
import styles from './login.less'

const FormItem = Form.Item

const Login = ({
  login,
  dispatch,
  form: {
    getFieldDecorator,
    validateFieldsAndScroll
  }
}) => {
  const { loginLoading } = login

  function handleOk () {
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      dispatch({ 
        type: 'login/login', 
        payload: {
          user: values
        }
      })
    })
  }

  return (
    <div>
      <div className={styles.background} />
      <div className={styles.card}>
        <div className={styles.logo}>
          <img alt={'logo'} src={config.logo} width="30%" height="30%"/>
          <span>{config.name}</span>
        </div>
        <form>
          <FormItem>
            {getFieldDecorator('account', {
              rules: [
                {
                  required: true
                }
              ]
            })(<Input size='large' onPressEnter={handleOk} placeholder='用户名/邮箱/手机号' />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true
                }
              ]
            })(<Input size='large' type='password' onPressEnter={handleOk} placeholder='密码' />)}
          </FormItem>
          <Row style={{ textAlign: 'center' }}>
            <Button type='dashed' ghost size='large' onClick={handleOk} loading={loginLoading}>
              登录
            </Button>
            <p><span></span></p>
          </Row>
        </form>
      </div>
    </div>
  )
}

Login.propTypes = {
  form: PropTypes.object,
  login: PropTypes.object,
  dispatch: PropTypes.func
}

export default connect(({ login }) => ({ login }))(Form.create()(Login))
