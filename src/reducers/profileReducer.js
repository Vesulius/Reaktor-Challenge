const profileReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_PROFILE':
      return action.name
    case 'CLOSE_PROFILE':
        return ''
    default:
      return state
  }
}

export const setProfile = name => {
  return {
    type: 'SET_PROFILE',
    name 
  }
}

export const closeProfile = () => {
  return {
    type: 'CLOSE_PROFILE',
  }
}

export default profileReducer
