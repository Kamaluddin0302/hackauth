let InitialState = {
    name  :''
}


let reducer = (state = InitialState,action)=> {

switch(action.type){
    case "Qayoom" :
        return {
            state
        }

   default :
   return {
       state
   }

}

}

export default reducer