//import useParam to be used to get the :invoiceId param from the URL
import { useParams, useNavigate, useLocation } from "react-router-dom"
import { getInvoice, deleteInvoice } from "../data";

export default function Invoice() {
    let navigate = useNavigate();
    let location = useLocation();
    let params = useParams();
    let invoice = getInvoice(parseInt(params.invoiceId, 10));

    return (
        <div className="perInvoiceDisplay">
            <h2>Name of Company: {invoice.name}</h2>
            <hr />
            <h2>Total Due: {invoice.amount}</h2>
            <hr />
            <h2>Payment is due: {invoice.due}</h2>
            <p>
                <button
                    onClick={() => {
                        deleteInvoice(invoice.number);
                        navigate("/invoices" + location.search);
                    }}
                >
                    Delete
                </button>
            </p>
        </div>
    )
}