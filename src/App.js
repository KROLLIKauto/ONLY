import AuthForm from "./components/AuthForm"
import { Routes, Route, Navigate } from 'react-router-dom'
import MainPage from "./components/MainPage";
import { useState } from "react";
import Header from "./components/Header"

function App() {
  const [user, setUser] = useState('')

  const isValidEmail = (login) => {
    setUser(login)
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/authForm" element={<AuthForm isValidEmail={isValidEmail} />} />
        <Route path="/mainPage" element={<MainPage user={user} />} />

        <Route path="/" element={<Navigate replace to="/authForm" />} />
      </Routes>
    </div>
  );
}

export default App;
