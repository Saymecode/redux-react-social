import React from 'react'
import { connect } from 'react-redux'
import {
  follow, requestUsers,
  setCurrentPage,
  unfollow
} from '../../redux/users-reducer'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import { usersAPI } from '../../api/api'
import { compose } from 'redux'
import { getPageSize, getUserSuperSelector } from '../../redux/users-selectors'

class UsersContainer extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    const {currentPage, pageSize} = this.props
    this.props.getUsers(currentPage, pageSize)
  }

  onPageChanged = (pageNumber) => {
    const {getUsers, pageSize} = this.props
    getUsers(pageNumber, pageSize)
  }

  render () {
    return <>
      { this.props.isFetching ? <Preloader /> : null }
      <Users {...this.props} onPageChanged={this.onPageChanged}/>
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUserSuperSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  }
}

export default compose(
  connect(mapStateToProps, {follow, unfollow, setCurrentPage, getUsers: requestUsers})
)(UsersContainer)