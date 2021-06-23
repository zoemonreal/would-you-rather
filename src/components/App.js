import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LeadBoard from './LeadBoard'
import Home from './Home'
import LoadingBar from 'react-redux-loading'
import NewQuestion from './NewQuestion'
import QuestionPage from './QuestionPage'
import Error from './ErrorPage'

import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

import Login from './Login'
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom'
import Nav from './Nav'



class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            
           {this.props.authedUser!== null && <Nav  />}
            
            {this.props.loading === true
              ? null
              : <div>
                 
               <Switch>

     
                  <PrivateRoute path='/' exact component={Home}  authedUser={this.props.authedUser} />
                  <PrivateRoute path='/question/:id' component={QuestionPage} authedUser={this.props.authedUser} />
                  

                  <PrivateRoute path='/add' component={NewQuestion} authedUser={this.props.authedUser}/>
                  <PrivateRoute path='/leadboard' component={LeadBoard} authedUser={this.props.authedUser}/>

                  <PublicRoute restricted={true} path='/login'  component={Login} authedUser={this.props.authedUser} />
                  <Route component={Error} />
              </Switch>
      
                </div>}
          </div>
        </Fragment>
      </Router>
    
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: false, //authedUser === null,
    authedUser
  }
}

export default connect(mapStateToProps)(App) 