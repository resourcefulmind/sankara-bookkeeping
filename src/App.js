import React from "react";
//add links and add Outlet to nest UI components for shared layout when child route matches
import { Link, Outlet } from "react-router-dom";

import '../src/Global.css'

function App() {
  return (
    <div>
      <h1>Sankara Limited Bookkeeper</h1>
      <nav className="app__nav">
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
