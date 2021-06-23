import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser';

class Nav extends Component {

   handleLogOut = (e) => {
      e.preventDefault()
  

      const { dispatch} = this.props
  
      dispatch(setAuthedUser(null));  
     
    }
  render (){
    return( <nav className='nav-wrapper '>

      <ul>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/add' activeClassName='active'>
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to='/leadboard' activeClassName='active'>
            Leaderboard          
            </NavLink>
        </li>
      </ul>
      <ul className="right">
      <li> Hello, {this.props.user?.name+ ''} !</li>
      <li>
        <NavLink to={'/'} activeClassName='active' onClick={this.handleLogOut}>
            Log out
          </NavLink></li>
      </ul>
    </nav>)
  }
} 

function mapStateToProps ({ authedUser , users }) {
  return {
    user: users[authedUser]
      
  }
}

export default connect(mapStateToProps)(Nav) 