var customerName = 'bob'

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
};

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'mary';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'sam';
}