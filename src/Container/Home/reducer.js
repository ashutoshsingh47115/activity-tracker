import { fromJS } from 'immutable';
import {GET_ALL_USER_DATA_SUCCESS} from './constants'

const initialState = fromJS({
    userLists : []
})

const home = (state = initialState, action) => {

    switch (action.type) {

        case GET_ALL_USER_DATA_SUCCESS:
            return state.set('userLists', fromJS(action.payload.data))

        default:
          return state
    }

}
export default home