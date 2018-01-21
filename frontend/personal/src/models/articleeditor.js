export default {
    namespace: 'articleeditor',
    state:{
        htmlContent: "",
    },
    subscriptions: {
        setup ({ dispatch, history }) {
        }
    },
    effects: {

    },
    reducers: {
        update(state, action) {
            return {...state, ...action.payload}
        },
    }
}