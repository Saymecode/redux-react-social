import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormControls/FormsControls'

const MyPosts = React.memo((props) => {
  let postsElements = props.posts.map(item => <Post message={item.message} likes={item.id}/>)

  let onAddPost = (values) => {
    props.addPost(values.newPostText)
  }

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <AddMessageFormRedux onSubmit={onAddPost}/>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  )
})

let maxLength15 = maxLengthCreator(15)

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name='newPostText' placeholder={'Add post text'} component={Textarea} validate={[required, maxLength15]}/>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export default MyPosts