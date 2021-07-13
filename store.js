import thunk from 'redux-thunk'
import {createStore,combineReducers,compose,applyMiddleware} from 'redux';
const initialstate={};

const reducer = combineReducers({
    
    

})

  



const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialstate,composeEnhancer(applyMiddleware(thunk)));
export default store;