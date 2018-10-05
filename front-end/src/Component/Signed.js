import React, {Component} from 'react'
import Header from './Header'

class Signed extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div className="container">
                    <h1 className="text-center text-dark">Please What Would You Like To Do?</h1>
                    <div className="display-inline" >
                        <a href="/lend" style={{marginRight:50}} class="btn btn-info btn-lg">LEND MONEY</a>
                        <a href="/borrow" type="button" class="btn btn-outline-info btn-lg">BORROW MONEY</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Signed;