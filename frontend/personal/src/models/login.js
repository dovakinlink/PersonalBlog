import { routerRedux } from 'dva/router'
import { message } from 'antd'
import {login} from '../services/admin'

export default {
  namespace: 'login',
  state: {
    loginLoading: false
  },

  effects: {
    * login ({
      payload
    }, {call, put }) {
      const data = yield call(login,payload);
      yield put(routerRedux.push('/dashboard'))
      yield put({ type: 'hideLoginLoading' })
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
