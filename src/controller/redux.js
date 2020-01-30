import { combineReducers, createStore } from 'redux';
import uuid from 'uuid';
const INITIAL_STATE = {
    dbCars: [{
        id: '',
        cars: []
    }],

    filtersCar: [{
        id: '',
        cars: []
    }]
}

//Redux
const returnArrayCars = (payload) => {
    let arrayCars = [];
    
    payload.map(car => {
        arrayCars.push({ id: uuid(), car: car })
    })
    //console.log(arrayCars);
    return arrayCars;
}
const checkFilter = (car, payload) => {
    let inputFilter = payload.toLowerCase().split('');
    let carName = car['carName'].toLowerCase().split('');
    let error = false
    for (let i = 0; i < inputFilter.length; i++) {
        if (carName[i] !== inputFilter[i]) {
            error = true;
        }
    }
    if (error) {
        return false
    } else {
        return true;
    }

}
const tableCars = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'SET_INTIAL_STATE':
            return { ...state, dbCars: returnArrayCars(payload), filtersCar: returnArrayCars(payload) }
        case 'FILTER':
            {
                if (payload === '') {
                    return { ...state, filtersCar: state.dbCars }
                } else {
                    return { ...state, filtersCar: state.dbCars.filter(({id, car}) => checkFilter(car, payload)) }
                }
            }
        default:
            return state;
    }
}

const reducers = combineReducers({
    tableCars
})

const store = createStore(reducers);

const actions = {
    setInitialState: (payload) => ({
        type: 'SET_INTIAL_STATE',
        payload: payload
    }),
    addFilter: (payload) => ({
        type: 'FILTER',
        payload: payload
    })
}

export { store, actions };