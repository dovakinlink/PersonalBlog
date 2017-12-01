import { query } from '../services/table'

export default {
  namespace: 'table',
  state: {
    data: []
  },
  subscriptions: {
    setup ({ dispatch, history }) {
    }
  },
  effects: {
    * query ({ payload }, { put, call }) {
      const data = yield call(query, payload)
      if (data && data.length > 0) {
        yield put({
          type: 'querySuccess',
          payload: data
        })
      }
    }
  },
  reducers: {
    querySuccess (state, { payload }) {
      return { ...state, data: payload }
    }
  }
}
