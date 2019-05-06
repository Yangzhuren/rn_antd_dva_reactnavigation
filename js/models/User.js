import {createAction} from '../actions'

export default {
    namespace: 'user',
    state: {
        name: '',
        mobile: '',
        clickCount: 0
    },
    reducers: {
        getUserInfo(state, {payload}) {
            return {...state, ...payload}
        }
    },
    effects: {
        * checkUser({payload}, {call, put}) {
            yield put(
                createAction('getUserInfo')({
                    ...payload
                })
            )
        }
    }
}