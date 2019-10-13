import React from 'react'
import { BrowserRouter as Router,Route,Link} from "react-router-dom";
import {Signup} from './../../container/index'



class RouterExample extends React.Component {
render (){

    return(
<div>
    <Router>
        <Route exact path = "/" component = {Signup} />
    </Router>
</div>

    )
}

}

export default RouterExample
