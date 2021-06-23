import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import { Link, withRouter } from 'react-router-dom'


class Question extends Component {
     
  render() {
      const { question } = this.props
  
      if (question === null) {
        return <p>This question doesn't exists</p>
      }
  
      const {
        name, avatar, optionOneText, optionTwoText, id, 
      } = question
  
      return (
        <div className="col s12 m7">
    <div className="card small horizontal">
      <div className="card-image">
        <img src={avatar}  alt='' />
      </div>
      <div className="card-stacked">
        <div className="card-content">
  <h5>{name} asks...</h5>
                        <h4 className="red-text text-darken-2">Would you rather...</h4>
              
              <p>{optionOneText}</p>
              <p className=""><b>OR</b></p>

              <p>{optionTwoText}</p>
        </div>
        <div className="card-action">
        <Link to={`/question/${id}`} className='btn'> View Poll  </Link>
        </div>
      </div>
    </div>
  </div>

        
      )
    }
  }
  
  function mapStateToProps ({authedUser, users, questions}, { id }) {
    const question = questions[id]
  
    return {
      authedUser,
      question: question
        ? formatQuestion(question, users[question.author], authedUser)
        : null
    }
  }
  
  export default withRouter(connect(mapStateToProps)(Question)) 
