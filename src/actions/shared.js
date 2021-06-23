import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/question'
import { showLoading, hideLoading } from 'react-redux-loading'


// const AUTHED_ID = 'tylermcginnis'

export function handleInitialData (AUTHED_ID) {
  return (dispatch) => {
    dispatch(showLoading())

    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(hideLoading())

      })
  }
} 