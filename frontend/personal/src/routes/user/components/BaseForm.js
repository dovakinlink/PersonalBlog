import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import {Form, Input, Switch, Button } from 'antd';
import styles from '../../userprofile/profile.less'

const FormItem = Form.Item;
const BaseForm = ({
    confirmDirty,
    isState,
    dispatch,
    form,
    avatar,
}) => {
    const {
        getFieldValue,
        validateFields,
        getFieldDecorator,
        validateFieldsAndScroll,
        resetFields,
        getFieldsValue,
    } = form
    const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 6 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 14 },
        },
      };
    const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 14,
            offset: 6,
          },
        },
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validateFieldsAndScroll((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            let formData = getFieldsValue();
            formData.state = isState;
            dispatch({
                type: 'user/regist',
                payload: {
                    user: formData,
                    avatar: avatar,
                }
            })
          }
        });
      }

    const handleConfirmBlur = (e) => {
        const value = e.target.value;
        dispatch({
            type: 'user/update',
            payload:{
                confirmDirty: confirmDirty || !!value,
            }
        })
    }
    const handleNotNull = (rule, value, callback) => {
        if( value && value.length > 3){
            callback();
        } else {
            callback('输入内容过短');
        }
    }
    const checkPassword = (rule, value, callback) => {
        if (value && value !== getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }
    const checkConfirm = (rule, value, callback) => {
        if (value && confirmDirty) {
            validateFields(['confirm'], { force: true });
        }
        callback();
    }

    const handleSwitchChange = (state) => {
        dispatch({
            type: 'user/update',
            payload: {
                isState: state ? 1 : 0,
            }
        })
    }

    const handleReset = () => {
        resetFields();
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label="用户名"
                    hasFeedback
                    >
                        {getFieldDecorator('username', {
                            rules: [
                            {
                                required: true, message: '请输入用户名!',
                            },{
                                validator: handleNotNull,
                            }],
                        })(
                            <Input />
                        )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="手机号"
                    hasFeedback
                    >
                        {getFieldDecorator('account', {
                            rules: [
                            {
                                required: true, message: '请输入手机号！',
                            },{
                                validator: handleNotNull,
                            }],
                        })(
                            <Input />
                        )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="密码"
                    hasFeedback
                    >
                    {getFieldDecorator('password', {
                        rules: [{
                        required: true, message: '请输入密码!',
                        }, {
                        validator: checkConfirm,
                        }],
                    })(
                        <Input type="password" />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="再次输入密码"
                    hasFeedback
                    >
                    {getFieldDecorator('confirm', {
                        rules: [{
                        required: true, message: '请再次输入密码!',
                        }, {
                        validator: checkPassword,
                        }],
                    })(
                        <Input type="password" onBlur={handleConfirmBlur} />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="是否启用"
                    >
                        <Switch checkedChildren="开" 
                            unCheckedChildren="关" 
                            defaultChecked 
                            onChange={handleSwitchChange}/>
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">注册</Button>{' '}
                    <Button onClick={handleReset}>重置</Button>
                </FormItem>
            </Form>
        </div>
    )
}

export default Form.create()(BaseForm)