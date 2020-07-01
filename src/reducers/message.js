import * as Types from './../constants/ActionType';
import * as Message from './../constants/Message';
var initialState = Message.MGS_WELCOME;
const message = (state = initialState, action) => {
    
    switch (action.type) {
        case Types.CHANGE_MESSAGE:
            return action.message //action sent to reducer
        default: return state;
    }
}


export default message;

