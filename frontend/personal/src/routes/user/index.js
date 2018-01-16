import { PropTypes } from 'react'
import React from 'react'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import { Card, Row, Col, Icon, Upload, message} from 'antd'
import  BaseForm from './components/BaseForm'
import styles from '../userprofile/profile.less'
import classnames from 'classnames'
import {getCookie,delCookie} from '../../utils/helper'
const imgAvatar = require('../../assets/img/marc.jpg')
const Dragger = Upload.Dragger
class User extends React.Component {

    render() {
        const {user,dispatch } = this.props;
        const {confirmDirty, isState, avatar} = user;
        const baseFormProps = {
            confirmDirty,
            isState,
            dispatch: this.props.dispatch,
        }
        const uploadProps = {
            name: 'avatar',
            multiple: false,
            action: 'http://localhost:8000/api/upload/fileupload',
            headers: {
                'Authorization': 'Bearer ' + getCookie('user_session'),
            },
            onChange(info){
                if(info.file.status === 'done' ){
                    message.success(`${info.file.name}上传成功`);
                    dispatch({
                        type:'user/update',
                        payload:{
                            avatar: info.file.name
                        }
                    })
                    // this.setState({avatar: "http://localhost:3000/uploads/avatar/" + info.file.name})
                }
            }
        }
        return(
            <div>
                <Row className={styles.showcase}>
                    <Col xs={24} sm={24} md={12} lg={15} xl={15}>
                        <Card
                            bordered={false}
                            noHovering
                            title={<div className={classnames(styles['card-header'], { [styles.pink]: true})}>
                                <h4><Icon type='user' /></h4>
                            </div>}>
                            <BaseForm {...baseFormProps} />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={1} lg={1} xl={1} style={{ marginTop: 60 }} />
                    <Col xs={24} sm={24} md={11} lg={8} xl={8}>
                        <Card
                            bordered={false}
                            noHovering
                            title={<div className={styles['card-avatar']}>
                                <a><img className={styles.img} src={`http://localhost:3000/uploads/avatar/${avatar}`} /></a>
                            </div>}>
                            <div style={{ marginTop: 50 }}>
                                <Dragger {...uploadProps} >
                                    <p className="ant-upload-drag-icon">
                                        <Icon type="inbox" />
                                    </p>
                                    <p className="ant-upload-text">点击或拖拽照片进行上传</p>
                                </Dragger>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default connect(({ user }) => ({ user }))(User)