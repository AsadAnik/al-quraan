import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/home/Home';
import DynamicChapter from './components/chapter/Chapter';

///Applications Route Section for created the Route...
const Routes = () => {
    return (
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/:id' exact component={DynamicChapter} />
                </Switch>
    )
}

export default Routes;