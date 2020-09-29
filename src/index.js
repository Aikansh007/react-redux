import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
//import reducer from './store/reducer'
import './index.css';
import App from './App';
import AppDumb  from './containers/appDumb'
import salaryApp  from   './reducers/rootRuducer';

// const store =createStore(reducer);
// ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));

const store =createStore(salaryApp);
ReactDOM.render(<Provider store={store}> <AppDumb /> </Provider>, document.getElementById('root'));
