const InitStateData = {
    current:0,
    content:"",
}

export default {
    namespace: 'editor',
    state:{
        ...InitStateData
    },
    subscriptions: {
        setup ({ dispatch, history }) {
        }
    },
    effects: {

    },
    reducers: {
        update(state,action){
            return {...state,...action.payload}
        },
    }
}