export function formatQuestion (question, author, authedUser) {
  const { id, optionOne  : { text: optionOneText, id: optionOneId }, optionTwo : { text: optionTwoText, id: optionTwoId }, timestamp } = question
  const { name, avatarURL } = author

  return {
    name,
    id,
    authedUser,
    timestamp,
    optionOneText,
    optionOneId,
    optionTwoText,
    optionTwoId,
    avatar: avatarURL,

  }
}