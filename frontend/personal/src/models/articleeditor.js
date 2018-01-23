import {create} from '../services/article'

export default {
    namespace: 'articleeditor',
    state:{
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
        }
    },
    reducers: {
        update(state, action) {
            return {...state, ...action.payload}
        },
    }
}