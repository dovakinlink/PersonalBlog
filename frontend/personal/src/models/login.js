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
      const data = yield call(login,payload);
      yield put({ type: 'hideLoginLoading' })
      if(data.success){
        let user = data.data.user
        Cookie.set('user_session', user.authentication_token);
        Cookie.set('user_account', user.account);
        Cookie.set('user_id', user.id);
        yield put(routerRedux.push('/home'))
      } else {
        message.error(data.message + "!  暂不支持注册，如需账号许可请联系站长")
        return;
      }
      message.success('登录成功!')
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
