import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import { withRouter } from 'react-router-dom'


class QuestionResults extends Component {
  
   render() {
      const { question, userVote, totalVotes, optionOneVotes, optionTwoVotes , optionOnePorcentage, optionTwoPorcentage} = this.props
  
      if (question === null) {
        return <p>This question doesn't exists</p>
      }
  
      const {
        name, avatar, optionOneText, optionTwoText 
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
                        {optionOneText} - {optionOnePorcentage}% ({optionOneVotes}) {userVote ===1 &&   <span className="white-text badge blue">Your vote!</span>}
                        <div className="progress">
                        <div className="determinate" style={{width: `${optionOnePorcentage}%`}}></div>

</div>
{optionTwoText} - {optionTwoPorcentage}% ({optionTwoVotes}) {userVote ===2 &&   <span className="white-text badge blue">Your vote!</span>}
                        <div className="progress">
                        <div className="determinate" style={{width: `${optionTwoPorcentage}%`}}></div>

</div>
              
        </div>
        <div className="card-action">
        <h6>Total: {totalVotes}</h6>
        </div>
      </div>
    </div>
  </div>

        
      )
    }
  }
  
  function mapStateToProps ({authedUser, users, questions}, { id }) {
    const question = questions[id];
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes= question.optionTwo.votes.length;
    const userVote=  question.optionOne.votes.includes(authedUser) ? 1 : 2;
    const totalVotes = optionOneVotes + optionTwoVotes;
    const optionOnePorcentage = (optionOneVotes * 100) / totalVotes;
    const optionTwoPorcentage = (optionTwoVotes * 100) / totalVotes;

  
    return {
      authedUser,
      question: question
        ? formatQuestion(question, users[question.author], authedUser)
        : null,
      optionOneVotes,
      optionTwoVotes ,
      optionOnePorcentage,
      optionTwoPorcentage,
      userVote,
      totalVotes
    }
  }
  
  export default withRouter(connect(mapStateToProps)(QuestionResults)) 
