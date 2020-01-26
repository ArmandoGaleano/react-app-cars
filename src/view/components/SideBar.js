import React, { Component } from 'react';
import { store, actions } from '../../controller/redux';

class SideBar extends Component{
    constructor(props){
        super();
        this.state = {
            inputSearch: ''
        }
    }
    handleInputChange = (event) => {
        store.dispatch(actions.addFilter(event.target.value))
    }
    render(){
        return(
            <form action='return false'>
                <input type='text' onChange={this.handleInputChange}></input>
            </form>
        )
    }
}
export default SideBar;