import { PropTypes } from 'react'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import {Card, Table, Form, Input, Button, Row,Col, Popconfirm} from 'antd'
import {SearchForm} from '../../components'

const FormItem = Form.Item;

class Article extends React.Component {

    render() {
        const { article, dispatch } = this.props
        const { data } = article

        const columns = [
            {
                title: '编号',
                dataIndex: 'no',
                key: 'no',
            },
            {
                title: '标题',
                dataIndex: 'title',
                key: 'title',
                render: (text) => {
                    return <a href="#">{text}</a>
                }
            },
            {
                title: '作者',
                dataIndex: 'author',
                key: 'author',
            },
            {
                title: '创作时间',
                dataIndex: 'created_at',
                key: 'created_at',
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => {
                    return <Popconfirm title="确认删除吗?" 
                                onConfirm={() => {
                                    dispatch({
                                        type: 'article/delete',
                                        payload: {
                                            id: record.id,
                                        }
                                    })
                                }} 
                                onCancel={() => {}} 
                                okText="是" cancelText="否">
                        <a>删除</a>
                    </Popconfirm>
                }
            }
        ]
        
        const searchFormProps = {
            onOk:(data)=>{
        
            },
            onReset:()=>{
        
            },
            fields:[
                {
                    label: '标题',//必填
                    name: 'title',//必填
                    type: 'Input',//必填
                    props:{ //props选填
                     
                    },
                    fieldsProps:{
                      
                    }
                },
            ]
        }
        
        return(
            <div>
                <Card>
                    {/* <Form>
                        <Row>
                            <FormItem label="标题">
                                <Input placeholder="输入标题" />
                            </FormItem>
                            <Button >搜索</Button>
                            <Button onClick={() => {
                                this.props.dispatch()
                                routerRedux.push('/editor')
                            }}>新增</Button>
                        </Row>
                    </Form> */}
                    <Row>
                        <Col>
                            <SearchForm {...searchFormProps} />
                        </Col>
                        {/* <Col>
                            <Button 
                                ghost={true}
                                type="primary" icon="plus"
                                onClick={() => {
                                    this.props.dispatch(routerRedux.push('/articleeditor'))
                                }}>
                            </Button>
                        </Col> */}
                    </Row>
                </Card>
                <Card style={{marginTop: 15}}>
                    <Table 
                        columns={columns}
                        dataSource={data}
                        />
                </Card>
            </div>
        )
    }
}

Article.protoTypes = {
    article: PropTypes.object
}

export default connect(({ article }) => ({ article }))(Article)