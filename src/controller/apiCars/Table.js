import React, { Component, Fragment } from 'react';
import { store, actions } from '../redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { TableStyled, Head, TrBody, Td, Container, Th } from '../../view/components/TableStyled';
import './Table.css';
import uuid from 'uuid';

class Table extends Component {
    constructor(props) {
        super();
        this.props = props;
        this.state = {
            dbCars: []
        }
    }
    componentDidMount() {
        store.subscribe(() => {

            this.setState({
                dbCars: store.getState().tableCars.filtersCar

            })
            console.log(store.getState().tableCars.filtersCar)
        })
    }
    render() {
        return (
            <Fragment>
                <TableStyled>
                    <Head>
                        <Th>ID</Th>
                        <Th>Car Name</Th>
                        <Th>Car Brand</Th>
                        <Th>Price</Th>
                    </Head>
                    <TransitionGroup className='body'>
                        {this.state.dbCars.map(({ id, car }, index) => {
                            if (index % 2 > 0) {
                                return (
                                    <CSSTransition
                                        key={id}
                                        timeout={300}
                                        classNames="item"
                                    >
                                        <TrBody type='dark'>
                                            <Container>
                                                <Td border>{car['id']}</Td>
                                            </Container>
                                            <Container>
                                                <Td border carName>{car['carName']}</Td>
                                            </Container>
                                            <Container>
                                                <Td border>{car['carBrand']}</Td>
                                            </Container>
                                            <Container>
                                                <Td>${car['price']}</Td>
                                            </Container>
                                        </TrBody>
                                    </CSSTransition>
                                )
                            }else{
                                return (
                                    <CSSTransition
                                        key={id}
                                        timeout={300}
                                        classNames="item"
                                    >
                                        <TrBody type='light'>
                                            <Container>
                                                <Td border>{car['id']}</Td>
                                            </Container>
                                            <Container>
                                                <Td border carName>{car['carName']}</Td>
                                            </Container>
                                            <Container>
                                                <Td border>{car['carBrand']}</Td>
                                            </Container>
                                            <Container>
                                                <Td>${car['price']}</Td>
                                            </Container>
                                        </TrBody>
                                    </CSSTransition>
                                ) 
                            }

                        })}
                    </TransitionGroup>
                </TableStyled>


            </Fragment >
        )
    }
}
export default Table;