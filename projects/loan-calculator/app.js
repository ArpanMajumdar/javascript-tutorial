const loadForm = document.getElementById('loan-form');
loadForm.addEventListener('submit', displayResultsWithLoader);

function displayResultsWithLoader(event) {
    hideResults();
    showLoader();

    setTimeout(calculateLoan,2000);
    event.preventDefault();
}

function showLoader() {
    document.getElementById('loader').style.display = 'block';
}

function hideLoader() {
    document.getElementById('loader').style.display = 'none';
}

function showResults() {
    document.getElementById('results').style.display = 'block';
}

function hideResults() {
    document.getElementById('results').style.display = 'none';
}



function calculateLoan(event) {
    console.log('Calculating ...');

    // Input fields
    const loanAmount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');

    // Output fields
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(loanAmount.value);
    const calculatedInterestPerMonth = parseFloat(interest.value) / (100 * 12);
    const totalMonths = parseFloat(years.value) * 12;

    const x = Math.pow(1 + calculatedInterestPerMonth, totalMonths);
    const monthlyPaymentVal = (principal * x * calculatedInterestPerMonth) / (x - 1);
    const totalPaymentVal = monthlyPaymentVal * totalMonths;
    const totalInterestVal = totalPaymentVal - principal;

    console.log(monthlyPaymentVal);

    if (isFinite(monthlyPaymentVal)) {
        monthlyPayment.value = monthlyPaymentVal.toFixed(2);
        totalPayment.value = totalPaymentVal.toFixed(2);
        totalInterest.value = totalInterestVal.toFixed(2);

        hideLoader();
        showResults();
    } else {
        showError('Please check your numbers ...');
        loanAmount.value = '';
        interest.value = '';
        years.value = '';
    }



}

function showError(errorMsg) {
    // Create a div
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger';

    // Insert text
    errorDiv.appendChild(document.createTextNode(errorMsg));

    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    card.insertBefore(errorDiv, heading);

    hideResults();
    hideLoader();
    setTimeout(clearError, 3000);
}

function clearError() {
    document.querySelector('.alert').remove();
    console.log(loanAmount);
    loanAmount.value = '';
    interest.value = '';
    years.value = '';
}