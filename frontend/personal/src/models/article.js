import { query, destroy } from '../services/article'
import {parse} from 'qs';
import { message } from 'antd'

export default {
    namespace: 'article',
    state:{
        data:[],
        pagination: {
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: total => `共 ${total} 条`,
            current: 1,
            total: null,
            pageSizeOptions:['10','20','30','40']
        },
        condition:{},
    },
    subscriptions: {
        setup ({ dispatch, history }) {
            history.listen(location => {
                if (location.pathname === '/article') {
                  dispatch({
                    type: 'query',
                    payload: {
                        
                    }
                  });
                }
            })
        }
    },
    effects: {
        * query({payload}, {call, put}) {
            const data = yield call(query, payload);
            if(data){
                yield put({
                    type: 'update',
                    payload: {
                        data: data.data,
                    }
                })
            }
        },
        * delete({payload}, {call, put}) {
            const data = yield call(destroy, payload);
            if(data.success){
                message.success(data.message)
                put({
                    type: 'query',
                    payload: {}
                })
            } else {
                message.error(data.message)
            }
        }
    },
    reducers: {
        update(state, action) {
            return {...state, ...action.payload}
        },
    }
}