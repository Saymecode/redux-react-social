import React from 'react'
import styles from './Paginator.module.css'

let Paginator = ({onPageChanged, totalUsersCount, pageSize, currentPage }) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize)
  let pages = []
  for (let i=1; i<=pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      {
        pages.map(p=><span onClick={(e) => {onPageChanged(p)}} className={currentPage === p && styles.selectedPage}>{p}</span>)
      }
    </div>
  )
}

export default Paginator