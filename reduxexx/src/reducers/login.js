const LoggedReducer =(state=false, action)=>{

    switch(action.type){
        case "SIGN_IN":
            return !state

            default: 
                  return state= false;
    }


}

export default LoggedReducer;