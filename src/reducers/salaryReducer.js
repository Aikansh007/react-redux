
import {INC_SAL,DEC_SAL} from '../actions/actionTypes'
const salaryReducer=(state=20000,action)=>{
    let newState;
    switch(action.type){
        case INC_SAL:
            return(newState=state+action.payload);

            case DEC_SAL:
                    return(newState=state-action.payload);
                    default :
                    return state


    }
}

export default salaryReducer;