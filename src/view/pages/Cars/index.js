import React, { Component } from 'react';
import './Cars.css';
import { store, actions } from '../../../controller/redux';
import setBackgroundForBody from '../../_assets/js/styledOfPage';
import SideBar from '../../components/SideBar';
import Table from '../../../controller/apiCars/Table';



class Cars extends Component {
    constructor(props) {
        super();
        this.getCars();
    }
    
    getCars() {
        fetch("http://localhost/git/react-app-cars/src/model/apiCars/index.php")
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                store.dispatch(actions.setInitialState(responseJson))
            })

    }
    setBodyBG = () => {
        if (this.props.bodyBackground) {
            setBackgroundForBody(true);
        } else {
            setBackgroundForBody(false);
        }
    }
    componentDidMount(){
        this.setBodyBG();
        console.log('ok')
    }
    render() {
        return (
            <div className="page cars">
                <SideBar/>
                <Table/>
            </div>
        )
    }
}

export default Cars;