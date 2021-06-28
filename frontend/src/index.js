import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import App from './App/index';
import * as serviceWorker from './serviceWorker';
import 'react-toastify/dist/ReactToastify.css';

// Auth Context
import AuthContextProvider from "./contexts/Auth";
import UserDataContext from "./contexts/UserData";
import reducer from './store/reducer';
import config from './config';
import createBrowserHistory from 'history/createBrowserHistory';
const store = createStore(reducer);
const history = createBrowserHistory();

const app = (
    <Provider store={store}>
        <BrowserRouter basename={config.basename} history={history} >
            {/* basename="/datta-able" */}
            <AuthContextProvider>
            	<UserDataContext>
            		<App />
            	</UserDataContext>
            </AuthContextProvider>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
