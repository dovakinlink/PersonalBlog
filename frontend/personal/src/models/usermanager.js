import {parse} from 'qs';
import {query, destroy} from '../services/user';
import { message } from 'antd'; 

export default {
    namespace: 'usermanager',
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
                if (location.pathname === '/usermanager') {
                  dispatch({
                    type: 'query',
                    payload: parse(location.query)
                  });
                }
            })
        }
    },
    effects: {
        * query({payload},{call, put}) {
            const {data, page} = yield call(query, parse(payload));
            if(data){
                yield put({
                    type: 'update',
                    payload:{
                        data:data,
                        pagination:page,
                        condition: (payload == null ? {} : payload),
                    }
                })
            }
        },
        * destroy({payload}, {call, put}) {
            const { message, success } = yield call(destroy, parse(payload));
            if(success){
                message.success('删除成功！')
                yield put({
                    type: 'query',
                    payload:{}
                })
            } else {
                message.error(message)
            }
        }
    },
    reducers: {
        reset(state, action) {
            return { ...InitStateData }
        },
        update(state,action){
            return {...state,...action.payload}
        },
    }
}