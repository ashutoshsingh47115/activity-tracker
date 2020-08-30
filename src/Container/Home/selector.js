import {createSelector} from 'reselect'


const home = (state) => state.home

export const selectUserData = () => createSelector(home,(state) =>  state.get('userLists').toJS())