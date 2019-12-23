import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import { Redirect, Route, Switch } from 'react-router-dom'
import UsersContainer from './components/Users/UsersContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Preloader from './components/common/Preloader/Preloader'
import { initializeApp } from './redux/app-reducer'

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

class App extends React.Component {
  catchAllUnhandledErrors (reason, promise) {
    alert('Some error occured')
  }

  componentDidMount () {
    this.props.initializeApp()
    window.addEventListener('unhundledrejection', this.catchAllUnhandledErrors)
  }

  componentWillUnmount () {
    window.removeEventListener('unhundledrejection', this.catchAllUnhandledErrors)
  }

  render () {
    if(!this.props.initialized) return <Preloader/>

    return (
      <div className='app-wrapper'>
        <HeaderContainer/>
        <Sidebar/>
        <div className='app-wrapper-content'>
          <Switch>
            <Redirect exact from="/" to="/profile" />
            <Route path="/dialogs" render={() => <React.Suspense fallback={<Preloader />}><DialogsContainer store={this.props.store}/></React.Suspense>}/>
            <Route path="/profile/:userId?" render={() => <React.Suspense fallback={<Preloader />}><ProfileContainer store={this.props.store}/></React.Suspense>}/>
            <Route path="/users" render={() => <UsersContainer/>}/>
            <Route path="/login" render={() => <Login/>}/>
          </Switch>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  connect(mapStateToProps, {initializeApp}))
  (App)
