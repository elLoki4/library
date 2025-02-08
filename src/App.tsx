import "./styles.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import FirstLogin from "./components/Login";

import FormRegister from "./components/register";

// Componente para manejar el formulario de email y contraseña
export default function App() {
  const [state, setState] = useState(false);

  const handleMessageCHange = (newMessage: any) => {
    setState(newMessage);
    const List = document.getElementById("list");

    if (List) {
      state ? true : List.remove();
    } else {
      console.error("El elemento con ID 'list' no existe en el DOM.");
    }
  };

  return (
    <div className="container">
      <Router>
        <div>
          <nav>
            <ul id="list">
              <li>
                <Link to="/">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/"
              element={<FirstLogin onMessageChange={handleMessageCHange} />}
            />
            <Route path="/register" element={<FormRegister />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
