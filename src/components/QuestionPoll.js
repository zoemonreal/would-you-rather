import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { formatQuestion } from '../utils/helpers'
import { handleAddQuestionAnswer } from '../actions/question'



class QuestionPoll extends Component {
    constructor(props) {
        super(props);
        this.state = { answer: '',  };
        
        this.onValueChange = this.onValueChange.bind(this);
    }
    onValueChange(event) {

        this.setState({
            answer: event.target.value
        });
    }
    
    handleSubmit = (e) => {
        e.preventDefault()

        const { answer } = this.state

        const { dispatch, id, authedUser } = this.props

        dispatch(handleAddQuestionAnswer(authedUser, id, answer))

    }

    render() {
        const { question } = this.props
        const { name, avatar, optionOneText, optionTwoText } = question

        if (question === null) {
            return <p>This question doesn't exists</p>
        }

  
       

        return (

         <div className="col s12 m7">
    <div className="card horizontal">
      <div className="card-image">
        <img src={avatar}  alt='' />
      </div>
      <div className="card-stacked">
       <div className="card-content">

                        <h5>{name} asks...</h5>
                        <h4 className="deep-purple-text">Would you rather...</h4>

                        <form className='' onSubmit={this.handleSubmit}>

                            <div onChange={this.onValueChange}>

                                <p> <label> <input type="radio" value="optionOne" name="option" /> <span>{optionOneText}</span></label> </p>
                                <p className=""><b>OR</b></p>
                                <p><label><input type="radio" value="optionTwo" name="option" /> <span>{optionTwoText} ?</span></label></p>

                            </div>
                            <button
                            className='btn'
                            type='submit'
                            disabled={this.state.answer === ''}>
                            Submit 
                        </button>
                        </form>
                    </div>
        
      </div>
    </div>
  </div>


        )
    }
}

function mapStateToProps({ authedUser, users, questions }, {id}) {

    const question = questions[id]

    return {
        id,
        authedUser,
        question: question
            ? formatQuestion(question, users[question.author], authedUser)
            : null
    }
}

export default withRouter(connect(mapStateToProps)(QuestionPoll))
