import React from 'react'
import { BrowserRouter as Router,Route,Link} from "react-router-dom";
import {Signup,Home} from './../../container/index'



class RouterExample extends React.Component {
render (){

    return(
<div>
    <Router>
        <Route exact path = "/" component = {Signup} />
        <Route path = "/home" component = {Home} />
    </Router>
</div>

    )
}

}

export default RouterExample
