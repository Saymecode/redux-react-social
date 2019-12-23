import { createSelector } from 'reselect'

export const getUsers = (state) => {
  return state.usersPage.users
}

export const getUsersSelector = (state) => {
  return getUsers(state)
}

export const getUserSuperSelector = createSelector(getUsers, (users) => {
  return users.filter(u=>true)
})

export const getPageSize = (state) => {
  return state.usersPage.pageSize
}