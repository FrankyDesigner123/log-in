import { REGISTER_USER_SUCCESS,LOGIN_USER_SUCCESS } from '../actions/authActions';

const initialState = {
    user: {},
    errors: {}
}

export default function(state = initialState, actions){

    switch(actions.type){
        case REGISTER_USER_SUCCESS:
            return{
                ...state,
                user: actions.payload
            }
        case LOGIN_USER_SUCCESS:
            return{
                ...state,
                user: actions.payload
            }
    }
     
    return state;
}