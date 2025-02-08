import React, { useState } from "react";
import { NewPage } from "./newPage";

type FirstLoginProps = {
  onMessageChange: (submitted: boolean) => void;
};

export default function FirstLogin({ onMessageChange }: FirstLoginProps) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    onMessageChange(false); // Notificamos que el formulario fue enviado
  };

  if (submitted) {
    return <NewPage />;
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleInputChange}
          placeholder="Ingresa tu email"
          required
        />
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleInputChange}
          placeholder="Ingresa tu contraseña"
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
