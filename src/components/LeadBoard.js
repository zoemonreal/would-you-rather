import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScoreCard from './ScoreCard'


class LeadBoard extends Component {
  
  render() {
     const  { usersScore} =this.props;
    return (
      <div className="col s12 m7">
      <h3 className='center'>Leaderboard</h3>
       <div className="card">
    <div className="card-content">
    </div>
    <div className="card-tabs">

    </div>
    <div className="card-content grey lighten-4">
    {usersScore.map((user) => (
            <ScoreCard key={user.id}
             name={user.name}
             avatar={user.avatarUrl}
             answered= {user.answeredResults}
             asked = {user.questionsResults}  
             score = {user.score}
            />
    
    ))}
     
    </div>
  </div>
      

      </div>
    )
  }
}

function mapStateToProps({ users, questions }) {


  const usersScore= Object.keys(users).map((user) => {
    
    let answers = 0;
    let questions_count = 0;
     Object.values(questions).forEach((question) => {
        if (question.optionOne.votes.includes(user) || question.optionTwo.votes.includes(user)){
          answers++;
        }
        if(question.author===user){
          questions_count++;
        }
     });
   // const questions = //users[user].questions.length;
    const score = answers + questions_count;


    return {
        id: users[user].id,
        name: users[user].name,
        avatarUrl: users[user].avatarURL,
        answeredResults: answers ,
        questionsResults: questions_count,    
        score: score
    };
  })
  
  .sort((a,b) => (
    b.score - a.score
  ))
  return {
    usersScore,
    users

  }
}

export default connect(mapStateToProps)(LeadBoard)