import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Register";
import ClaimCertificate from "./ClaimCertificate";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-6">Impairathon</h1>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/claimcertificate" element={<ClaimCertificate />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
