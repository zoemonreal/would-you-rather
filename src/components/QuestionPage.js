import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import { withRouter } from 'react-router-dom'
import QuestionResults  from './QuestionResults';
import QuestionPoll  from './QuestionPoll';
import Error from './ErrorPage'



class QuestionPage extends Component {
  
    
  render() {
      const { question, answered} = this.props
  
      if (question === null) {
        return <Error/>
      }
  
      const {
       id, 
      } = question
  
      return (
        <div>
            {answered ? <QuestionResults id={id}/>: <QuestionPoll id={id}/>}
  </div>

        
      )
    }
  }
  
  function mapStateToProps ({authedUser, users, questions}, props) {
    const { id } = props.match.params

    const question = questions[id]; 
    const answered=  question && (question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser));

  
    return {
      authedUser,
      question: question
        ? formatQuestion(question, users[question.author], authedUser)
        : null,
        answered
     
    }
  }
  
  export default withRouter(connect(mapStateToProps)(QuestionPage)) 
