import { query } from '../services/article'

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
                if (location.pathname === '/articleeditor') {
                  dispatch({
                    type: 'query',
                    payload: parse(location.query)
                  });
                }
            })
        }
    },
    effects: {
        * query({payload}, {call, put}) {
            const data = yield call(query, payload);
            if(data){

            }
        }
    },
    reducers: {
        update(state, action) {
            return {...state, ...action.payload}
        },
    }
}