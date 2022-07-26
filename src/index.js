import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//import the pages to be routed
import Expenses from './Routes/expenses';
import Invoices from './Routes/invoices';
import Invoice from './Routes/invoice';

//connect app to browser URL with BrowserRouter and teach React Router to render app at different URLs by using Route config
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='expenses' element={<Expenses />} />
        <Route path='invoices' element={<Invoices />} >
          <Route
           index
           element={
            <div className='index-route'>
              <p>Select an Invoice</p>
            </div>
           } />
          <Route path=':invoiceId' element={<Invoice />} />
        </Route>
        <Route 
          path='*' 
          element={
            <div className='no__match'>
              <p>Oops, nothing to see here! But always remember, your dreams to be a world class software engineer is valid Opeyemi...Believe!</p>
            </div>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
