// Initial State

let InitialState = {
    allData : [],
}

// Reducer Function
let reducer = (state = InitialState, action) => {
    console.log(action.type)
    switch (action.type) {
           case "value":
            state.state.allData.push(action.value)
            return {
               ...state, allData: state.state.allData
            }
        default:
            return {
                state : state
            }
    }
}
export default reducer