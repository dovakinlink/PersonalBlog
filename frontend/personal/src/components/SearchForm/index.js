import react, {Component, PropTypes} from 'react';
import {Link} from 'dva/router';
import {Menu, Icon,Input,DatePicker,Select,Form,Row,Col,Button} from 'antd';
import {connect} from 'dva'
import _ from 'lodash'
import './index.css'

const { MonthPicker, RangePicker } = DatePicker;

const FormItem = Form.Item
const Option = Select.Option
/**
 * 根据映射找到相应的组件
 * */
const fieldControls=(type,props={options:[]})=> {
  return {
    "Select": <Select {...props} >{
      buildOptions(props.options)
    }</Select>,
    "Input": <Input {...props}/>,
    "DatePicker": <DatePicker {...props} style={{ width: '100%' }}/>,
    "MonthPicker": <MonthPicker {...props} style={{ width: '100%' }}/>,
    "RangePicker": <RangePicker {...props} style={{ width: '100%' }}/>
  }[type]
}

/**
 * 为select添加options
 * */
export const buildOptions = (array=[])=>{
  return array.map(obj=>{
    if('key' in obj){
      return <Option key={obj.key} value={obj.key}>{obj.value}</Option>
    }else{
      for(var key in obj){
        return <Option key={key} value={key} >{obj[key]}</Option>
      }
    }
  })
}


/***
 * 为formItem动态添加组件
 *
 * */
const buildFields = ({label,type,props={}})=>{
  let newProps={
    placeholder: `${type === 'Select' ? '请选择' : '请输入'}${label}`
  }
  Object.assign(newProps,props)
  return fieldControls(type,newProps)
}

const SearchForm = (props) => {

  const {onOk,onReset,set_search_form,fields,form} = props
  let searchData
  const {
    getFieldDecorator,
    validateFields,
    getFieldsValue,
    resetFields,
    setFieldsValue,
  } = form
  if(set_search_form){
    set_search_form(form)
  }
  let formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 17 },
  };

  let spanValue = 6;

  /**
   * 根据传入json配置FormItem
   * **/
  const formFields=()=>{
    return fields && fields.map((field,index)=>{
      if (field.formItemLayoutCustom){
        formItemLayout = {
          ...field.formItemLayoutCustom
        }
      }
      if (field.spanCustom) {
        spanValue = field.spanCustom;
      }
      return <Col span={spanValue} key={index} >
        <FormItem {...formItemLayout} label={` ${field.label}`}>
          {getFieldDecorator(`${field.name}`,{
            ...field.fieldsProps
          })(
            buildFields(field)
          )}
        </FormItem>
      </Col>
    })
  }

  const momentToString=(key,value)=>{
    const field = _.find(fields,{name: key});
    const defaultFormat = 'YYYY-MM-DD HH:mm:ss'
    const format = field['props'] && field['props']['showTime']
      && field['props']['showTime']['format'] || defaultFormat
    const isDataFormat = ['YYYY-MM-DD','YYYY/MM/DD'].indexOf(format) != -1
    if(value instanceof moment){
      return isDataFormat ? value.startOf('day').format(format) : value.format(format)
    }
    if(value instanceof Array && value[0] instanceof moment ){
      if(isDataFormat){
        return [value[0].startOf('day').format(defaultFormat),
          value[1].endOf('day').format(defaultFormat)]
      }else{
        return [value[0].format(format), value[1].format(format)]
      }
    }
    return value
  }

  const handleSearch=()=>{
    let fieldsValue=getFieldsValue()
    let data={}
    Object.keys(fieldsValue).forEach(key=>{
      let value = fieldsValue[key];
      if(value != undefined){
        data[key] = momentToString(key,value)
        if(typeof value === 'string' && value.split(',').length > 1 && key.match(/_eq$/)){
          delete data[key]
          data[key.replace(/_eq$/, '_in')] = value.split(',')
        }
      }
    })
    searchData = data
    onOk(data)
  }

  const handleReset=()=>{
    resetFields()
    onReset()
  }
  return (
    <div>
      <Form className="ant-advanced-search-form">
        <Row type="flex">{[formFields(),<Col key={fields.length} span={6} style={{ textAlign: 'center' }}>
          <Button type="primary" htmlType="submit" onClick={handleSearch}>查询</Button>
          <Button style={{ marginLeft: 8 }} onClick={handleReset}>
            重置
          </Button>
        </Col>]}</Row>
      </Form>
    </div>
  )
}

SearchForm.propTypes = {
  onOk: PropTypes.func,
  onReset: PropTypes.func,
  fields: PropTypes.array,
  form: PropTypes.object,
}

export default Form.create()(SearchForm)
