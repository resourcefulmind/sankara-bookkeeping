//bring in Link
import { NavLink, Outlet, useSearchParams } from "react-router-dom";
///bring in the invoices from the mock database
import { getInvoices } from "../data";

export default function Invoices() {
    let invoices = getInvoices();
    let [ searchParams, setSearchParams ] = useSearchParams();

    return (
        <div>
            <h2>Invoices</h2>
            <div className="invoices__nav">
                <nav>
                    <input 
                        value={searchParams.get("filter") || ""} 
                        onChange={(event) => {
                            let filter = event.target.value;
                            if (filter) {
                                setSearchParams({ filter });
                            } else {
                                setSearchParams({});
                            }
                        }} 
                        type="text" />
                    {invoices
                    .filter((invoice) => {
                        let filter = searchParams.get("filter");
                        if(!filter) return true;
                        let name = invoice.name.toLowerCase();
                        return name.startsWith(filter.toLowerCase());
                    })
                    .map((invoice) => (
                        <NavLink style={({ isActive }) => {
                            return {
                                display: "block", 
                                margin: "1.6rem 0", 
                                color: isActive ? "red" : "", 
                            };
                        }} 
                        className="app__invoice__link" 
                        to={`/invoices/${invoice.number}`} 
                        key={invoice.number}
                        >
                            {invoice.name}
                        </NavLink>
                    ))}
                </nav>
                <Outlet />
            </div>
            
        </div>
    )
}