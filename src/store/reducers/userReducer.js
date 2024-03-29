
const initialState = {
	users: null,
}

const applySetUsers = (state, action) => ({
	...state,
	users: action.users
})

const applySetUser = (state, action) => ({
	...state,
	users: {
		...state.users,
		[action.uid]: action.user
	}
})

function userReducer(state = initialState, action){
	switch(action.type){
		case 'USERS_SET':{
			return applySetUser(state, action);;
		}
    	case 'USER_SET': {
    	  return applySetUser(state, action);
    	}
    default:
      return state;
	}
}

export default userReducer;
