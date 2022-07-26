//Mock database

let invoices = [
    {
        name: "Lesley Makeovers Inc", 
        number: 2020, 
        amount: "NGN200,000", 
        due: "20/10/2020", 
    }, 
    {
        name: "Makosail Ventures Ltd", 
        number: 2022, 
        amount: "NGN100,000", 
        due: "01/08/2022", 
    }, 
    {
        name: "Dees Provisions Store", 
        number: 2021, 
        amount: "NGN420,000", 
        due: "15/09/2021", 
    }, 
    {
        name: "1xBet Gaming Platform", 
        number: 2022, 
        amount: "NGN450,000", 
        due: "30/09/2022", 
    }, 
    {
        name: "Nubela Pte Ltd", 
        number: 2022, 
        amount: "NGN1,500,000", 
        due: "31/08/2022", 
    }, 
];

export function getInvoices() {
    return invoices;
}

export function getInvoice(number) {
    return invoices.find(
        (invoice) => invoice.number === number
    )
}

export function deleteInvoice(number) {
    invoices = invoices.filter(
        (invoice) => invoice.number !== number
    );
}