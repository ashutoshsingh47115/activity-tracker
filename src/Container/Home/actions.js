import {
    GET_ALL_USER_DATA,
    GET_ALL_USER_DATA_SUCCESS
} from './constants'


export const getAllUserData = () => {

    return {
        type: GET_ALL_USER_DATA
    }
}

export const getAllUserDataSuccess = (data) => {

    return {
        type: GET_ALL_USER_DATA_SUCCESS,
        payload: {
            data
        }
    }
}