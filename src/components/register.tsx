import React, { useState } from "react";

export default function FormRegister() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false); // Estado que determina si ya se ha enviado el formulario

  // Función para manejar el cambio de los inputs
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true); // Indicamos que el formulario ha sido enviado
  };

  // Si el formulario fue enviado, mostramos el nuevo componente

  return (
    <>
      <h1>register</h1>
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
    </>
  );
}
