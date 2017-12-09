import React, {Component} from 'react';
import {Switch, Route, Router, Redirect} from 'react-router-dom';
import history from './utils/history';
import {SlotMachine, NotFound, Gifts} from './containers';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';


class App extends Component {
    render() {
        const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Switch>
                        <Route exact={true} path="/" component={SlotMachine}/>
                        <Route path="/gifts" component={Gifts}/>
                        <Route path="/404" component={NotFound}/>
                        <Redirect to="/404"/>
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

export default App;
