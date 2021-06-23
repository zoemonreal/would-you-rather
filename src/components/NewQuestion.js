import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddQuestion } from '../actions/question'


class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
  }
  handleChange = (e) => {
    const optionName = e.target.name  
    const optionValue = e.target.value

    if(optionName === 'option-1')
       { 
            this.setState(() => ({
             optionOneText : optionValue
         }))
       }else{         
        this.setState(() => ({
            optionTwoText : optionValue
        }))
       }
  }
  handleSubmit = (e) => {
    e.preventDefault()

    const { optionOneText, optionTwoText } = this.state

    const { dispatch, id } = this.props

    dispatch(handleAddQuestion(optionOneText, optionTwoText, id))

    this.setState(() => ({
      optionOneText: '',
      optionTwoText: '',
      toHome: id ? false : true,

    }))
  }
  render() {
    const { optionOneText, optionTwoText, toHome } = this.state

    if (toHome === true) {
      return <Redirect to='/' />
    }


    return (
      <div>
        <h4 className='center'>Add Question</h4>
<div className="">
    <div className="col s12 m7">
      <div className="card ">
        <div className="card-content ">        
        <form className='' onSubmit={this.handleSubmit}>
          <input
            placeholder="Option 1"
            name="option-1"
            value={optionOneText}
            onChange={this.handleChange}
            className='avatar'
          />
        <input
            placeholder="Option 2"
            name="option-2"
            value={optionTwoText}
            onChange={this.handleChange}
            className=''
          />
          <button
            className='waves-effect waves-light btn'
            type='submit'
            disabled={optionOneText === '' || optionTwoText ===''}>
              Submit
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

export default connect()(NewQuestion) 