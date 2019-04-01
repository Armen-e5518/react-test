import {combineReducers} from 'redux'
import car from './car'
import active from './activ-car'

console.log('all_reducers')

const all_reducers = combineReducers({
    cars: car,
    active: active
})
export default all_reducers