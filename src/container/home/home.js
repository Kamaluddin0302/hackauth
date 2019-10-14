import React from 'react'
import Input from './../../component/input'
import Button from './../../component/button'
import {SaveValue} from './../../config/store/action'
import {connect} from 'react-redux'

class Home extends React.Component {

    constructor(){
        super()
        this.state = {
            value : ''
        }
    }

GetValue = (e)=> {
    let Name = e.target.name
    this.setState({
        [Name] : e.target.value
    })
}

Setvalue = ()=> {
    this.props.SaveValue(this.state)
}

    render(){
        return(
            <div>
                <Input name = "value" onchange = {this.GetValue}/>
                <Button onclick = {this.Setvalue}/>
            </div>
        )
    }
}

let mapStateToProps = (state)=> {
    console.log(state)

return {
    state: state
}
}

let mapDispatchToProps = (dispatch)=> {
    return {
        SaveValue : (state)=> dispatch(SaveValue(state))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home)