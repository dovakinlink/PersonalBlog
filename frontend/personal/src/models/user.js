import { regist } from '../services/admin';
import { message } from 'antd'
import { routerRedux } from 'dva/router'
export default {
    namespace: 'user',
    state: {
        confirmDirty: false,
        isState: 1,
        avatar:"UNADJUSTEDNONRAW_thumb_1.jpg",
    },
    subscriptions: {
      setup ({ dispatch, history }) {
      }
    },
    effects: {
        *regist({payload}, { call, put }) {
            debugger
            const data = yield call(regist,payload);
            debugger
            if(data.success){
                message.success('注册成功!')
                yield put(routerRedux.push('/home'))
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