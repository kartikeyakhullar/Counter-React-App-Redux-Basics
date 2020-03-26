import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,applyMiddleware,compose} from 'redux'
import rootReducer from "./store/reducer"
import { Provider } from "react-redux"
import thunk from "redux-thunk"


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = (store)=>{
    return next =>{
        return action =>{
            console.log("Middleware part 1",action);
            const result = next(action);
            console.log("Middleware part 2",store.getState());
            return result;
        }
    }
}


const store = createStore(rootReducer,composeEnhancers(applyMiddleware(logger,thunk)));

ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
