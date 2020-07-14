import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/home/Home';
import DynamicSupter from './components/supter/Supter';

const Routes = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/supter/:id' exact component={DynamicSupter} />
                </Switch>
            </div>
        </Router>
    )
}

export default Routes;