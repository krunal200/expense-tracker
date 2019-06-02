export const INPUT_ID = {
    AMOUNT: 'amount',
    DESCRIPTION: 'description'
};

export const INPUT_VALIDATION_REGEX = {
    AMOUNT: /(?:^\d*\.\d+$)|(?:^\d+$)/,
    DESCRIPTION: /^.+$/
};

export const TAG_LIST = [{
    value: 'HDFC_CREDIT_CARD',
    label: 'HDFC Credit Card'
}, {
    value: 'HDFC_SAVING_ACC',
    label: 'HDFC Saving Account'
}, {
    value: 'CASH',
    label: 'Cash'
}, {
    value: 'ICICI_CREDIT_CARD',
    label: 'ICICI Credit Card'
}, {
    value: 'ICICI_SAVING_ACC',
    label: 'ICICI Saving Account'
}];

export const DEFAULT_SELECTED_TAGS = TAG_LIST
    .filter( tag => tag.value === 'HDFC_CREDIT_CARD');

export const FORM_TYPE = {
  EXPENSE: 'expense',
  INCOME: 'income'
};