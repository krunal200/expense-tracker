import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ExpenseAddForm from './components/expense/add/form'

export default function AppRouter () {
    return (
        <Router>
            <Switch>
                <Route path='/' component={ExpenseAddForm} />
            </Switch>
        </Router>
    );
}