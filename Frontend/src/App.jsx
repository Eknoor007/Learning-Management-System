import React from 'react'
import Dashboard from './Dashboard'
import LoginPage from './LoginPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import Content from './Content';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/content" element={<Content />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
