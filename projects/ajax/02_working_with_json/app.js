// Add event listeners

document.getElementById('button-1').addEventListener('click', loadCustomer);
document.getElementById('button-2').addEventListener('click', loadCustomers);

function loadCustomer(event) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'customer.json', true);
    xhr.onload = function () {
        if (this.status === 200) {
            const customer = JSON.parse(this.responseText);

            const rowEl = `<tr>
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.company}</td>
            <td>${customer.phone}</td>
        </tr>`

            document.getElementById('customer-table').innerHTML = rowEl;
        }
    };
    xhr.send();
}

function loadCustomers(event) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'customers.json', true);
    xhr.onload = function () {
        if (this.status === 200) {
            const customers = JSON.parse(this.responseText);

            let rowElements='';
            customers.forEach(customer => {
                rowElements += `<tr>
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.company}</td>
            <td>${customer.phone}</td>
        </tr>`
            })

            document.getElementById('customers-table').innerHTML = rowElements;
        }
    };
    xhr.send();
}