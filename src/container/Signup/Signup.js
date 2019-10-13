import React from 'react'
import Input from './../../component/input'
import Button from './../../component/button'

import firebase from './../../config/firebase/firebase'

class Signup extends React.Component {
constructor(){
    super()
    this.state = {
email : "",
password: "",
    }
}
GetData = (data)=> {
this.setState({
[data.target.type] : data.target.value
})
}


SetValue = ()=> {
    let {email ,password} = this.state

    console.log(email)
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((res)=>{
        console.log(res)
        firebase.firestore().collection("User").doc(res.user.uid).set(this.state)
        .then(()=> {
            this.props.history.push("/Login")
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



SetValue = () => {
        let {email ,password} = this.state
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((res)=> {
        console.log(res)
        firebase.database().ref("/").child("Loginuser").child(res.user.uid).set(this.state)
    })
    .catch((error)=> {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
        // ...
      });
}



render(){
console.log(this.state)
    return(
 <div>
     <Input name = "email" onchange = {this.GetData}/>
     <Input name = "password" onchange = {this.GetData}/>
     <Button onclick = {this.SetValue}/>
 </div>

    )
}
}


export default Signup