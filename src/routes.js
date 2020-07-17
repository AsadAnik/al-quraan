import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/home/Home';
import DynamicChapter from './components/chapter/Chapter';

const Routes = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/:id' exact component={DynamicChapter} />
                </Switch>
            </div>
        </Router>
    )
}

export default Routes;