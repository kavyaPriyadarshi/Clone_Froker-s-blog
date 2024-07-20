import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={BlogList} />
                <Route path="/blogs/:id" component={BlogDetail} />
            </Switch>
        </Router>
    );
};

export default App;
