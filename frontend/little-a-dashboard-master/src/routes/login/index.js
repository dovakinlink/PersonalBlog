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
      dispatch({ type: 'login/showLoginLoading' })
      // wait for 1.5 seconds on purpose
      setTimeout(() => {
        dispatch({ type: 'login/login', payload: values })
      }, 1500)
    })
  }

  return (
    <div>
      <div className={styles.background} />
      <div className={styles.card}>
        <div className={styles.logo}>
          <img alt={'logo'} src={config.logo} />
          <span>{config.name}</span>
        </div>
        <form>
          <FormItem>
            {getFieldDecorator('username', {
              rules: [
                {
                  required: true
                }
              ]
            })(<Input size='large' onPressEnter={handleOk} placeholder='Username' />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true
                }
              ]
            })(<Input size='large' type='password' onPressEnter={handleOk} placeholder='Password' />)}
          </FormItem>
          <Row style={{ textAlign: 'center' }}>
            <Button type='dashed' ghost size='large' onClick={handleOk} loading={loginLoading}>
              SIGN IN
            </Button>
            <p><span>any username or password</span></p>
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
