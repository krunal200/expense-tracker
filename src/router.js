import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ExpenseAddScreen from './screens/expense/add'

export default function AppRouter () {
    return (
        <Router>
            <Switch>
                <Route path='/' component={ExpenseAddScreen} />
            </Switch>
        </Router>
    );
}