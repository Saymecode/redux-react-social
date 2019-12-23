const SEND_MESSAGE = 'SEND-MESSAGE'

const initialState = {
  dialogs: [
    {id: 1, name: 'Dim'},
    {id: 2, name: 'Valera'}
  ],
  messages: [
    {id: 1, message: 'Message 1'},
    {id: 2, message: 'Message 2'}
  ]
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let body = action.newMessageBody
      return {...state, messages: [...state.messages, {id: 1, message: body}]}
    }
    default:
      return state
  }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer