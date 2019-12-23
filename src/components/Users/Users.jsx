import React from 'react'
import styles from './Users.module.css'
import userPhoto from '../../assets/images/users-vector-icon-png_260862.jpg'
import { NavLink } from 'react-router-dom'
import Paginator from '../common/Paginator/Paginator'
import User from './User'

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i=1; i<=pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize}/>
      <div>
        {
          users.map(user => (
              <div>
                <User user={user} {...props} key={user.id}/>
              </div>
            )
          )
        }
      </div>
    </div>
  )
}

export default Users