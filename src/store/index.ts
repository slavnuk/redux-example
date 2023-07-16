import { applyMiddleware, combineReducers, createStore } from 'redux';
import { countryReducer } from './countryReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const rootReducer = combineReducers({
    countries: countryReducer
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
