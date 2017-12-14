import { routerRedux } from 'dva/router'
import { message } from 'antd'
import {login} from '../services/admin'
import { Toast } from '../components'
import Cookie from '../misc/cookie'
const isLogin=()=>{
  return Cookie.get('user_session')
}

export default {
  namespace: 'login',
  state: {
    login: !!isLogin(),
    loginLoading: false
  },

  effects: {
    * login ({
      payload
    }, {call, put }) {
      const {success,user,message} = yield call(login,payload);
      yield put({ type: 'hideLoginLoading' })
      if(success){
        Cookie.set('user_session', user.authentication_token);
        Cookie.set('user_account', user.account);
        Cookie.set('user_id', user.id);
        yield put(routerRedux.push('/dashboard'))
      } else {
          Toast.show(message, {type:"error"})
      }
      message.success('Welcome!')
    }
  },
  reducers: {
    showLoginLoading (state) {
      return {
        ...state,
        loginLoading: true
      }
    },
    hideLoginLoading (state) {
      return {
        ...state,
        loginLoading: false
      }
    }
  }
}
