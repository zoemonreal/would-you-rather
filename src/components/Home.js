import React, { Component } from 'react'
import Question from './Question'
import { connect } from 'react-redux'



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { questionsAnswered: false, questionsUnAnswered: true };
    this.handleClickTab = this.handleClickTab.bind(this);
  }
  
  handleClickTab = (e) => {
    e.preventDefault()
    const { name } = e.target;
    
    this.setState(()=>{
      if(name === "questionsAnswered")
      {
        return { 
          questionsAnswered : true,
          questionsUnAnswered : false
        };

      }else{
        return { 
          questionsAnswered : false,
          questionsUnAnswered : true
        };
      }
    })

    
  }
  render() {
    const {questionsUnAnswered , questionsAnswered} =this.state
    const {userQuestionsUnAnswered, userQuestionsAnswered } = this.props
    return (
      <div className="col s12 m7">
      <h3 className='center'>Questions</h3>
       <div className="card">
    <div className="card-content">
    </div>
    <div className="card-tabs">
      <ul className="tabs tabs-fixed-width">
        <li className="tab"><a href="#test4" name="questionsUnAnswered" className={questionsUnAnswered ? "active" : ""}  onClick={this.handleClickTab} > Unanswered</a></li>
        <li className="tab"><a href="#test5" name="questionsAnswered" className={questionsAnswered ? "active" : ""} onClick={this.handleClickTab} >Answered</a></li>
      </ul>
    </div>
    <div className="card-content grey lighten-4">
      {questionsUnAnswered &&
      <div id="test4">  
        <ul className=''>
            {userQuestionsUnAnswered.length === 0 && <h5>All questions answered!</h5>}
            {userQuestionsUnAnswered.map((user) => (
              <li key={user.id}>
                <Question id={user.id} />
              </li>
            ))}
          </ul>
        </div>}
        {questionsAnswered &&
      <div id="test4">  
        <ul className=''>
        {userQuestionsAnswered.length === 0 && <h5>There's not questions answered!</h5>}

            {userQuestionsAnswered.map((user) => (
              <li key={user.id}>
                <Question id={user.id} />
              </li>
            ))}
          </ul>
        </div>}
     
    </div>
  </div>
      
     
      </div>
    )
  }
}

function mapStateToProps({ questions, authedUser }) {
  const questionsIds= Object.keys(questions)
  .sort((a, b) => questions[b].timestamp - questions[a].timestamp);
  const userQuestionsUnAnswered= Object.values(questions).filter((question) =>
  !question.optionOne.votes.includes(authedUser) && !question.optionTwo.votes.includes(authedUser)).sort((a, b) => b.timestamp - a.timestamp);

   const userQuestionsAnswered= Object.values(questions).filter((question) =>
   question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)).sort((a, b) => b.timestamp - a.timestamp);


  return {
    questionsIds,
    userQuestionsUnAnswered,
    userQuestionsAnswered

  }
}

export default connect(mapStateToProps)(Home)