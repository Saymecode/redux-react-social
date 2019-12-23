import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import classes from './Dialogs.module.css'
import { Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../common/FormControls/FormsControls'
import { maxLengthCreator, required } from '../../utils/validators/validators'

const Dialogs = (props) => {
  let state = props.dialogsPage

  let dialogsElements = state.dialogs.map(item => <DialogItem name={item.name} key={item.id} id={item.id}/>)
  let messagesElements = state.messages.map(item => <Message message={item.message} key={item.id} id={item.id}/>)
  let newMessageBody = state.newMessageBody

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        <div>{messagesElements}</div>
        <AddMessageFormRedux onSubmit={addNewMessage}/>
      </div>
    </div>
  )
}

let maxLength20 = maxLengthCreator(20)

const AddMessageForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name='newMessageBody' placeholder='Enter your message' validate={[required, maxLength20]}/>
      </div>
      <div><button>Send</button></div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs