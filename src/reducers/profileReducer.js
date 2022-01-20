const profileReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_PROFILE':
      return action.name
    default:
      return state
  }
}

export const setProfileVal = name => {
  return {
    type: 'SET_PROFILE',
    name
  }
}

export default profileReducer
