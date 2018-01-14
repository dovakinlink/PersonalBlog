import { PropTypes } from 'react'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import {Card, Table, Form, Input, Button, Row,Col} from 'antd'
import {SearchForm} from '../../components'

const FormItem = Form.Item;
const columns = [
    {
        title: '编号',
        dataIndex: 'article_no',
        key: 'article_no',
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
        dataIndex: 'created_time',
        key: 'created_time',
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

const data = [
    {
        article_no: '1',
        title: '母猪的产后与护理',
        author: 'Link',
    },
    {
        article_no: '1',
        title: '母猪的产后与护理',
        author: 'Link',
    },
    {
        article_no: '1',
        title: '母猪的产后与护理',
        author: 'Link',
    },
    {
        article_no: '1',
        title: '母猪的产后与护理',
        author: 'Link',
    },
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
class Article extends React.Component {



    render() {
        const { article } = this.props
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
                        <Col>
                            <Button 
                                ghost={true}
                                type="primary" icon="plus"
                                onClick={() => {
                                    this.props.dispatch(routerRedux.push('/editor'))
                                }}>
                            </Button>
                        </Col>
                    </Row>
                </Card>
                <Card>
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