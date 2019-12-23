import React, { useState, useEffect } from 'react'

const ProfileStatusWithHooks = function (props) {

  let [editMod, setEditMod] = useState(false)
  let [status, setStatus] = useState(props.status)

  const activateEditMode = () => {
    setEditMod(true)
  }

  const deactivateEditMode = () => {
    setEditMod(false)
    props.updateStatus(status)
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  return (
    <div>
      <div>
        { !editMod &&
        <span onDoubleClick={activateEditMode}>{props.status || 'Add something new'}</span>}
      </div>
      <div>
        { editMod && <input value={status} autoFocus={true} onChange={onStatusChange} onBlur={deactivateEditMode}/>}
      </div>
    </div>
  )
}

export default ProfileStatusWithHooks