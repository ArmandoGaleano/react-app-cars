import React, { Component, Fragment } from 'react';
import { store, actions } from '../redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { TableStyled, TrHead, TrBody, Td } from '../../view/components/TableStyled';
import uuid from 'uuid';

class Table extends Component {
    constructor(props) {
        super();
        this.props = props;
        this.state = {
            dbCars: [],
            key: ''
        }
        console.log(this.state)
    }
    componentDidMount() {
        store.subscribe(() => {

            this.setState({
                dbCars: store.getState().tableCars.filtersCar,
                key: uuid()

            })
        })
    }
    render() {
        return (
            <Fragment>
                <TableStyled>
                    <thead>
                        <TrHead>
                            <th>ID</th>
                            <th>Car Name</th>
                            <th>Car Brand</th>
                            <th>Price</th>
                        </TrHead>
                    </thead>
                    <tbody>
                        {this.state.dbCars.map((car, index) => {
                            if (index % 2 !== 0) {
                                return (

                                    <TrBody type='dark' key={car['id']}>
                                        <Td border>{car['id']}</Td>
                                        <Td border>{car['carName']}</Td>
                                        <Td border>{car['carBrand']}</Td>
                                        <Td>${car['price']}</Td>
                                    </TrBody>
                                )
                            } else {
                                return (
                                    <TrBody type='light' key={car['id']}>
                                        <Td border>{car['id']}</Td>
                                        <Td border>{car['carName']}</Td>
                                        <Td border>{car['carBrand']}</Td>
                                        <Td>${car['price']}</Td>
                                    </TrBody>
                                )
                            }
                        })}
                    </tbody>

                </TableStyled>
            </Fragment>
        )
    }
}
export default Table;