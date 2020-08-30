import {fork} from 'redux-saga/effects'

import home from '../src/Container/Home/saga'

export default function * rootSaga () {
    yield fork(home)
}