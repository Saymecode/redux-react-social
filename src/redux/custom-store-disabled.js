import profileReducer from './profile-reducer'
import sidebarReducer from './sidebar-reducer'
import dialogsReducer from './dialogs-reducer'

let customStoreDisabled = {
  _state:  {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you?', likes: 10},
        {id: 2, message: 'It\'s my first post', likes: 10},
      ],
      newPostText: 'test'
    },
    dialogsPage: {
      dialogs: [
        {id: 1, name: 'Dim'},
        {id: 2, name: 'Valera'}
      ],
      messages: [
        {id: 1, message: 'Message 1'},
        {id: 2, message: 'Message 2'}
      ],
      newMessageBody: ''
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('State changed')
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action){
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callSubscriber(this._state)
  }
}

export default customStoreDisabled;