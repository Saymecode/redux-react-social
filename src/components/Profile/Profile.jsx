import React from 'react'
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = (props) => {
  return (
    <div className={classes.content}>
      <ProfileInfo isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus} savePhoto={props.savePhoto}/>
      <MyPostsContainer store={props.store}/>
    </div>
  )
}

export default Profile