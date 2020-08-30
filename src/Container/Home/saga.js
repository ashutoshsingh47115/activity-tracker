import {put, takeLatest, all} from 'redux-saga/effects'
import {GET_ALL_USER_DATA} from './constants'
import axios from 'axios'
import {getAllUserDataSuccess} from './actions'


function * getUser (action) {
   
    try {
        const response = yield (axios.get('https://951809ea-4dd4-430e-b7dd-6a9c4b704f68.mock.pstmn.io/api/users'))
        yield put (getAllUserDataSuccess(response.data.members))

    }
    catch (err) {
        console.log(err)
    }
}

function * getAllUser () {
    yield takeLatest(GET_ALL_USER_DATA, getUser)
}

export default function * home () {
    yield all([getAllUser()])
}