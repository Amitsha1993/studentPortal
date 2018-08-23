import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { render } from 'react-dom';
import Student from './components/student';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const reducer = (state = {}, action) => {
    switch (action.type) {
        case "FETCH_REQUEST":
            return state;
        case "FETCH_SUCCESS":
            return { ...state, posts: action.payload };
        default:
            return state;
    }
}




const store = createStore(reducer,
    applyMiddleware(thunk)
);

ReactDOM.render(<Provider store={store}>
    <Router>

        <div className="portal">
            <h2>Student Portal</h2>
            <ul>
                <li><Link to={'/'}>Student Result Board</Link></li>
                <li><Link to={'/Student'}>Admission Form</Link></li>

            </ul>
            <hr />
            <Switch>
                <Route exact path='/' component={App} />
                <Route exact path='/Student' component={Student} />
            </Switch>
        </div>
    </Router>
</Provider>, document.getElementById('root'));
registerServiceWorker();
