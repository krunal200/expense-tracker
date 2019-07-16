import React from 'react';
import ExpenseForm from '../../../components/expense/add/form';
import Header from '../../../components/header'

export default function ExpenseAddScreen() {
    return (
        <>
            <Header />
            <ExpenseForm />
        </>
    );
}