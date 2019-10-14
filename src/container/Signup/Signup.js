import React from 'react'
import Input from './../../component/input'
import Button from './../../component/button'
import {
    // SignupFunc,
    LoginFun} from './../../config/store/action'
import firebase from './../../config/firebase/firebase'
import {connect} from 'react-redux'
import Modal from './../../component/model/model'

class Signup extends React.Component {
constructor(){
    super()
    this.state = {
email : "",
password: "",
model : false
    }
}
GetData = (data)=> {
this.setState({
[data.target.name] : data.target.value
})
}


// SetValue = async()=> {
//    this.setState({
//        model : true
//    })
//     await this.props.SignupFunc(this.state)
//    await console.log("SignUp Successfully")
   

// }



SetValue = async() => {
try {
await this.props.Login(this.state)
this.props.history.push("/home")
}
catch(err){
    console.log(err)
}
}



render(){
console.log(this.props.state)
    return(
 <div>
     <Input name = "email" onchange = {this.GetData}/>
     <Input name = "password" onchange = {this.GetData}/>
     <Button onclick = {this.SetValue}/>
   {/* <Modal />  */}
   </div>

    )
}
}

let mapStateToProps = (state)=> {
return {
    state: state
}
}

let mapDispatchToProps = (dispatch)=> {
return {
// SignupFunc : (state)=> dispatch(SignupFunc(state)),
Login : (state)=> dispatch(LoginFun(state))
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Signup)
