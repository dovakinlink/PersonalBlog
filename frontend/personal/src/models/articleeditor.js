import {create } from '../services/article'
import { message } from 'antd'
import { routerRedux } from 'dva/router'

export default {
    namespace: 'articleeditor',
    state:{
        title: "",
        content: null,
        htmlContent: null,
    },
    subscriptions: {
        setup ({ dispatch, history }) {

        }
    },
    effects: {
        * create({payload}, {call, put}) {
            const data = yield call(create, payload);
            if(data.success){
                message.success(data.message);
                yield put(routerRedux.push('/article'))
            } else {
                message.error(data.message);
            }
        }
    },
    reducers: {
        update(state, action) {
            return {...state, ...action.payload}
        },
    }
}