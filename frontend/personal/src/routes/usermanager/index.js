import { PropTypes } from 'react'
import React from 'react'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import {Card, Table, Form, Input, Button, Row,Col, Badge} from 'antd'
import {SearchForm} from '../../components'

const FormItem = Form.Item;
const columns = [
    {
        title: '用户编号',
        dataIndex: 'code',
        key: 'code',
    },
    {
        title: '用户名',
        dataIndex: 'username',
        key: 'username',
        render: (text) => {
            return <a href="#">{text}</a>
        }
    },
    {
        title: '账号',
        dataIndex: 'account',
        key: 'account',
    },
    {
        title: '状态',
        dataIndex: 'state',
        key: 'state',
        render: (text) => {
            if(text == 0){
                return <span>
                    <Badge status="success" text="启用" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
            } else {
                return <span>
                    <Badge status="error" text="停用" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
            }
        }
    },
    {
        title: '创建时间',
        dataIndex: 'created_at',
        key: 'created_at',
    },
    {
        title: '操作',
        key: 'action',
        render: (text, record) => {
            return <span>
                <a href="#">删除</a>
            </span>
        }
    }
]

class Usermanager extends React.Component {
    render() {
        const { usermanager, dispatch } = this.props
        const {data, pagination, condition} = usermanager;

        const searchFormProps = {
            onOk:(data)=>{
                if(data.username){
                    data.username = '%' + data.username + '%';
                }
                dispatch({
                    type: 'usermanager/query',
                    payload: data,
                })
            },
            onReset:()=>{
                dispatch({
                    type: 'usermanager/query',
                    payload: {},
                })
            },
            fields:[
                {
                    label: '编号',//必填
                    name: 'code',//必填
                    type: 'Input',//必填
                },
                {
                    label: '用户名',//必填
                    name: 'username',//必填
                    type: 'Input',//必填
                },
                {
                    label: '账号',//必填
                    name: 'account',//必填
                    type: 'Input',//必填
                },
            ]
        }
        const onPageChange = (page) => {
            dispatch({
              type: 'usermanager/query',
              payload: {
                ...condition,
                page: page.current,
                pageSize: page.pageSize,
              },
            })
        };

        return(
            <div>
                <Card>
                    <Row>
                        <SearchForm {...searchFormProps} />
                    </Row>
                </Card>
                <Card style={{marginTop: 15}} >
                    <Table 
                        columns={columns}
                        dataSource={data}
                        scroll={{ x: 500 }}
                        pagination = {pagination}
                        />
                </Card>
            </div>
        )
    }
}

Usermanager.protoTypes = {
    usermanager: PropTypes.object
}

export default connect(({ usermanager }) => ({ usermanager }))(Usermanager)