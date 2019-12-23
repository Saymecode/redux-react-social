import { profileAPI } from '../api/api'

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

const initialState = {
  posts: [
      {id: 1, message: 'Hi, how are you?', likes: 10},
      {id: 2, message: 'It\'s my first post', likes: 10},
  ],
  profile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {id: 3, message: action.newPostText, likes: 0}
      return {...state, posts: [...state.posts, newPost], newPostText: ''}
    }
    case SET_USER_PROFILE: {
      return {...state, profile: action.profile}
    }
    case SET_STATUS: {
      return {...state, status: action.status}
    }
    case SAVE_PHOTO_SUCCESS: {
      return {...state, profile: {...state.profile, photos: action.photos}}
    }
    default:
      return state
  }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getUserProfile = (userId) => async (dispatch) => {
  const response = await profileAPI.getProfile(userId)
  if(response.status === 200) {
    dispatch(setUserProfile(response.data))
  }
}

export const getStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId)
  dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
  await profileAPI.updateStatus(status)
  dispatch(setStatus(status))
}

export const savePhoto = (file) => async (dispatch) => {
  const response = await profileAPI.savePhoto(file)
  dispatch(savePhotoSuccess(response.data.data.photos))
}

export default profileReducer