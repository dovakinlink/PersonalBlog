import { regist } from '../services/admin';
import { message } from 'antd'
import { routerRedux } from 'dva/router'
export default {
    namespace: 'user',
    state: {
        confirmDirty: false,
        isState: 1,
        avatar:"",
    },
    subscriptions: {
      setup ({ dispatch, history }) {
      }
    },
    effects: {
        *regist({payload}, { call, put }) {
            const data = yield call(regist,payload);
            if(data.success){
                message.success('注册成功!')
                yield put(routerRedux.push('/usermanager'))
                return
            }
            message.error(data.message)
        }
    },
    reducers: {
      update(state, action) {
          return {...state, ...action.payload}
      },
      querySuccess (state, { payload }) {
        return { ...state, data: payload }
      }
    }
  }