import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Counter from './Counter';
import Test from './Test';
import { BrowserRouter as Router, Route } from "react-router-dom";


function todo(state={}, action) {
    switch (action.type) {
        case 'add':
            return {
                count: state['count'] + 1
            }
        case 'minus':
                return {
                    ...state,
                    count: state['count'] - 1
                }
        default:
            return state
    }
}

const store = createStore(todo, {count: 1})

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route exact path="/" component={Counter} />
            <Route path="/test" component={Test} />
        </Router>
    </Provider>,
    document.getElementById('root')
)