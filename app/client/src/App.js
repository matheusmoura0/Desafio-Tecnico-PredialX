import React from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ClientesDashboard from './pages/ClientesDashboard';
import RegisterEmployee from './pages/ColaboradorDashboard';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
      <Routes>
      <Route
        path="/"
        element={<Login />}
      />
      <Route
        path="/dashboard/register"
        element={<Register />}
      />
      <Route
        path="/dashboard"
        element={<Dashboard />}
      />
      <Route
        path="/registerCustomer"
        element={<ClientesDashboard />}
      />
      <Route
        path="/registerEmployee"
        element={<RegisterEmployee />}
      />
      </Routes>

  );
}

export default App;
