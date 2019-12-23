import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getStatus, getUserProfile, savePhoto, updateStatus } from '../../redux/profile-reducer'
import { Redirect, withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component{

  refreshProfile() {
    let userId = this.props.match.params.userId
    if(!userId) {
      userId = this.props.authorizedUserId
      if(!userId) {
        this.props.history.push('/login')
      }
    }
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  componentDidMount () {
    this.refreshProfile()
  }

  componentDidUpdate (prevProps) {
    if(this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile()
    }
  }

  render(props) {
    if(!this.props.isAuth) {
      return <Redirect to={'/login'} />
    }

    return (
      <Profile isOwner={!this.props.match.params.userId} {...this.props} status={this.props.status} updateStatus={this.props.updateStatus} savePhoto={this.props.savePhoto}/>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
})

export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)