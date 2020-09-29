
let initialState={
    sal:20000
}
let reducer=(state=initialState,action)=>{
    let newState={...state}

    switch(action.type){
        case "Inc_Sal":
            newState.sal+=action.value;
            break;

            case "Dec_Sal":
            newState.sal-=action.value;
            break;
   
    }
    return newState
}

export default reducer;
