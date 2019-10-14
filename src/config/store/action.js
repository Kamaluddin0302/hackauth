import firebase from './../firebase/firebase'
let SignupFunc = (data)=> {
    console.log(data)
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then((res) => {
                console.log(res)
                firebase.firestore().collection("User").doc(res.user.uid).set(this.state)
                data.uid = res.user.uid
                dispatch({
                    type: "Signup",
                })
            })
            .catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage)
                // ...
            });
    }
}


let LoginFun = (state)=> {

return dispatch => {
    firebase.auth().signInWithEmailAndPassword(state.email, state.password)
    .then((res)=> {
        firebase.database().ref("/").child("Loginuser").child(res.user.uid).set(this.state)

        dispatch({
           type : "Login"
        })
    })
    .catch((error)=> {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
        // ...
      });
}
}


let SaveValue = (state)=> {
    console.log(state)
    return dispatch => {
        firebase.firestore().collection("Alldata").add(state).then(()=>{
            dispatch({
                type : "value",
                value: state
            })

        })
    }
}


export {SignupFunc,LoginFun,SaveValue}















