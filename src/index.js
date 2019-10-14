import React from "react";
import ReactDOM from 'react-dom';
import './app/styles/index.css';
import App from './app/components/App';
import { Provider } from 'react-redux'
import store from './app/redux/store'

const root = <Provider store={store}>
                <App />
            </Provider>

ReactDOM.render(root, document.getElementById('root'));
