import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser';


class Login extends Component {
    state = {
      userId: "",
    }
    handleChange = (e) => {
      const optionValue = e.target.value
  
     
              this.setState(() => ({
                userId : optionValue
           }))
     
    }
    handleSubmit = (e) => {
      e.preventDefault()
  
      const { userId } = this.state

      const { dispatch} = this.props
  
      dispatch(setAuthedUser(userId));  
      this.setState(() => ({
        
        toHome: userId ? false : true,
  
      }))
    }
    render() {
      const { userId, toHome } = this.state
  
      if (toHome === true) {
        return <Redirect to='/' />
      }
  
  
      return (
        
        <div>
          <h4 className="center">Would you rather..<img src="https://cdn0.iconfinder.com/data/icons/education-collection-2/32/question_mark_online-512.png"  
          className="center avatar" alt=""/>  </h4>
      <div className="">
     <div className="col s12 m7">
        <div className="card ">
        <div className="card-content ">   
                  <form className='' onSubmit={this.handleSubmit}>
     
          <select className="browser-default" value={this.state.value} defaultValue="" onChange={this.handleChange}>
              <option value="" disabled>Select an user</option>

              {this.props.usersdId.map((user) => (<option key={user} value={user}>{this.props.users[user].name}</option>))}

  	        </select>
           <br/>
            <button
              className='waves-effect waves-light btn'
              type='submit'
              disabled={userId === ''}>
                Sign in
            </button>
          </form>
        </div>
        </div>
        </div>
      </div>
            </div>

      
      )
    }
  }
  
  function mapStateToProps({  users }) {
    return {
        usersdId: Object.keys(users),
        users
    }
}

export default connect(mapStateToProps)(Login);
