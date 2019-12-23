import preloader from '../../../assets/images/spinner.gif'
import React from 'react'

let Preloader = (props) => {
  return <div style={{backgroundColor: 'white'}}><img src={preloader} alt=""/></div>
}

export default Preloader