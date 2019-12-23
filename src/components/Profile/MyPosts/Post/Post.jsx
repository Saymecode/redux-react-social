import React from 'react'
import classes from './Post.module.css'

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://i0.wp.com/salesforce-developer.ru/wp-content/uploads/avatars/no-avatar.jpg?ssl=1" alt=""/>
      {props.message}
      <div>
        <span>likes {props.likes}</span>
      </div>
    </div>
  )
}

export default Post