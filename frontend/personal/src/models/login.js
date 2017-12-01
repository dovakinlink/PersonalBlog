import { routerRedux } from 'dva/router'
import { message } from 'antd'

export default {
  namespace: 'login',
  state: {
    loginLoading: false
  },

  effects: {
    * login ({
      payload
    }, { put }) {
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
