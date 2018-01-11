import axios from 'axios'
import querystring from 'querystring'
import jsonp from 'jsonp'
import {getAuthHeader} from './auth'
import {getCookie,delCookie} from './helper'
import Cookie from '../misc/cookie'
import {
  objStrip,
  formDataStrip,
  objectToFormData,
  isFormData
} from './object'

const fetch = (options) => {
  let {
    method = 'get',
    data = {},
    fetchType,
    url,
  } = options

  axios.defaults.responseType = 'json';
  const token = getCookie('user_session');
  const authHeader = getAuthHeader(token);
  axios.defaults.headers = authHeader;

  if(isFormData(data)){
    data = formDataStrip(data);
  } else {
    data = objStrip(data);
  }
  //参数去空格
  if (JSON.stringify(data) != "{}"){
    for(var key in data) {
      if (data[key] && [String].indexOf(data[key].constructor) != -1) {
        data[key] = String(data[key]).replace(/(^\s*)|(\s*$)/g,'').replace(/^(null|undefined)$/g,'')
      }
    }
  }
  data['t']= new Date().getTime();

  switch (method.toLowerCase()) {
    case 'get':
      return axios.get(`${url}?${qs.stringify(data)}`)
    case 'geta':
      return axios.get(url, {
        params: data,
        paramsSerializer: function (params) {
          return qs.stringify(params, { arrayFormat: 'brackets' })
        }
      })
    case 'delete':
      return axios.delete(url, {data})
    case 'head':
      return axios.head(url, data)
    case 'post':
      return axios.post(url, data)
    case 'put':
      return axios.put(url, data)
    case 'patch':
      return axios.patch(url, data)
    default:
      return axios(options)
  }
}

const buildMessages = (data) => {
  if (data && data.length > 0) {
    const messages = data.map(d => {
      let body = JSON.parse(d.body)
      return body.message ? body.message : ""
    })
    return messages.join("\n")
  }
  return undefined;
}

export default function request(options){
  const origin = options.url;
  return fetch(options).then((response) => {
    const { statusText, status } = response;
    let data = response.data;
    let meesage_str = buildMessages(data);
    return {
      code: data.code,
      message: data.message,
      success: data.success,
      data: data.data,
      // code: 0,
      // status,
      // message: message_str ? meesage_str : statusText,
      // type: data.success ? 'success' : 'error',
      // ...data,
    }
  }).catch((error) => {
    let {message} = error.response.data
    return {
      success: false, code: 1,type:'error', message: message
    }
  })
}

const formatJson = (k, v) => {
  if (v === undefined) {
    return ''
  }
  return v
}

function check401 (response) {
  if (response.status === 401) {
    const key = 'Unauthorized'
    return Promise.reject({ key })
  }
  return response
}

function checkStatus (response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  const error = new Error(response.statusText)
  error.response = response
  throw error
}

function jsonParse (res) {
  if (res.status !== 200) {
    return Promise.reject(res)
  }
  return res.json().then((result) => {
    if (result) {
      if (result.isError) {
        console.log('result.isError')
        return Promise.reject(new Error(result.message))
      } else {
        return result.data
      }
    }
    return null
  })
}

// /**
//  * Requests a URL, returning a promise.
//  *
//  * @param  {string} url
//  * @param  {object} [options]
//  * @return {object}
//  */
// function request (url, options) {
//   const opts = { ...options }
//   opts.credentials = 'include'
//   opts.headers = {
//     ...opts.headers,
//     'Content-Type': 'application/json;charset=utf-8'
//   }

//   return fetch(url, opts)
//     .then(checkStatus)
//     .then(check401)
//     .then(jsonParse)
//     .catch((err) => {
//       throw new Error(`${err.message}`, err.message || '错误')
//     })
// }

// /**
//  * post。
//  * @param url
//  * @param data
//  * @param options
//  */
// function post (url, data = {}, options) {
//   return request(url, { ...options, method: 'POST', body: JSON.stringify(data, formatJson) })
// }

// /**
//  * delete
//  * @param url
//  * @param options
//  */
// function del (url, options) {
//   return request(url, { ...options, method: 'DELETE' })
// }

// /**
//  * put
//  * @param url
//  * @param data
//  * @param options
//  */
// function put (url, data = {}, options) {
//   return request(url, { ...options, method: 'PUT', body: JSON.stringify(data, formatJson) })
// }
// /**
//  * patch
//  * @param url
//  * @param data
//  * @param options
//  */
// function patch (url, data = {}, options) {
//   return request(url, { ...options, method: 'PATCH', body: JSON.stringify(data, formatJson) })
// }

// /**
//  * get
//  * @param url
//  * @param options
//  */
// function get (url, data, options) {
//   return request(`${url}${data ? '?' + querystring.stringify(data) : ''}`, { ...options, method: 'GET' })
// }

