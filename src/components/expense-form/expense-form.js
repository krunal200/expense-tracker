import React, { PureComponent }from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './expense-form.scss';
import { INPUT_ID, INPUT_VALIDATION_REGEX, TAG_LIST, DEFAULT_SELECTED_TAGS, FORM_TYPE } from './expense-form-constants';
import Select from 'react-select';

class ExpenseForm extends PureComponent {
    constructor (props) {
        super(props);
        this.state = {
            expenseDate: new Date(),
            [ INPUT_ID.AMOUNT ]: '',
            [ INPUT_ID.DESCRIPTION ]: '',
            selectedTags: DEFAULT_SELECTED_TAGS,
            type: FORM_TYPE.EXPENSE
        };
        this[ INPUT_ID.AMOUNT ] = React.createRef();
        this[ INPUT_ID.DESCRIPTION ] = React.createRef();
    }

    handleSubmit = (event) => {
        event.preventDefault();
    };

    handleDateChange = (expenseDate) => {
        this.setState({
            expenseDate
        });
    };

    handleInputChange = (event) => {
        const { target : { name, value } } = event;
        this.setState({
            [name]: value
        });
    };

    handleTypeChange = (event) => {
        this.setState({
            type: event.target.value
        });
    };

    validateInput = (name) => {
        switch (name) {
            case INPUT_ID.AMOUNT:
                return INPUT_VALIDATION_REGEX.AMOUNT.test(this.state[INPUT_ID.AMOUNT]);

            case INPUT_ID.DESCRIPTION:
                return INPUT_VALIDATION_REGEX.DESCRIPTION.test(this.state[INPUT_ID.DESCRIPTION]);

            default:
                return true;
        }
    };

    handleTagSelection = (selectedTags) => {
        this.setState({ selectedTags })
    };

    renderInputField ({ label, stateProp, type = 'text', focus = false }) {
        const additionalProps = {};
        if(focus) {
            additionalProps.autoFocus = true;
        }
        return (
            <label className='field'>
                <div className='field-name'>{label} :</div>
                <input
                    type={type}
                    value={this.state[stateProp]}
                    name={stateProp}
                    onChange={this.handleInputChange}
                    ref={this[INPUT_ID[stateProp]]}
                    className='field-input'
                    { ...additionalProps }
                />
            </label>
        );
    }

    renderTimeField () {
        return (
            <label className='field'>
                <div className='field-name'>Time :</div>
                <div className='datepicker-wrapper'>
                    <DatePicker
                        selected={this.state.expenseDate}
                        onChange={this.handleDateChange}
                        dateFormat='MMMM d, yyyy h:mm aa'
                        withPortal
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode='select'
                        timeInputLabel="Time:"
                        showTimeInput
                    />
                </div>
            </label>
        );
    }

    renderAmountField () {
        return  this.renderInputField ({ label: 'Amount', stateProp: INPUT_ID.AMOUNT, type: 'number', focus: true });
    }

    renderDescription () {
        return this.renderInputField({ label: 'Description', stateProp: INPUT_ID.DESCRIPTION })
    }

    renderExpenseField () {
        return (
            <div className='field'>
                <div className='field-name'>Type :</div>
                <label className='form-radio-hr'>
                    <input
                        type='radio'
                        value={FORM_TYPE.EXPENSE}
                        name='type'
                        onChange={this.handleTypeChange}
                        checked={this.state.type === FORM_TYPE.EXPENSE}
                    />
                    Expense
                </label>
                <label className='form-radio-hr'>
                    <input
                        type='radio'
                        value={FORM_TYPE.INCOME}
                        name='type'
                        onChange={this.handleTypeChange}
                        checked={this.state.type === FORM_TYPE.INCOME}
                    />
                    Income
                </label>
            </div>
        );
    }

    renderTagSelector () {
        return (
            <label className='field'>
                <div className='field-name'>Tags: </div>
                <Select
                    value={this.state.selectedTags}
                    options={TAG_LIST}
                    onChange={this.handleTagSelection}
                    className='react-select-container'
                    classNamePrefix="react-select"
                    closeMenuOnSelect={false}
                    isMulti
                />
            </label>
        );
    }

    renderSubmitBtn () {
        return (
            <div className='field'>
                <div className='field-name'> </div>
                <input type='submit' value='Save' />
            </div>
        );
    }

    render () {
        return (
        <form className='expense-form' onSubmit={this.handleSubmit}>
            {this.renderTimeField()}
            {this.renderAmountField()}
            {this.renderDescription()}
            {this.renderExpenseField()}
            {this.renderTagSelector()}
            {this.renderSubmitBtn()}
        </form>
        )
    }
}

export default ExpenseForm;