import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";

export function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    whatsapp: "",
    address: "",
    burgh: "",
    city: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post("/api/1.0/user/signup", form);
      // navigate("/news")
    } catch (error) {
      // console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="formName">Nome:</label>
      <input
        id="formName"
        name="name"
        type="text"
        value={form.name}
        onChange={handleChange}
      />

      <label htmlFor="formEmail">E-mail:</label>
      <input
        id="formEmail"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
      />
      <label htmlFor="formPassword">Senha:</label>
      <input
        id="formPassword"
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
      />
      <label htmlFor="formConfirmPassword">Confirmação de senha</label>
      <input
        id="formConfirmPassword"
        type="password"
        name="confirmPassword"
        value={form.confirmPassword}
        onChange={handleChange}
      />

      <label htmlFor="formWhatsapp">WhatsApp</label>
      <input
        id="formWhatsapp"
        type="whatsapp"
        name="whatsapp"
        value={form.whatsapp}
        onChange={handleChange}
      />

      <label htmlFor="formAddress">Endereço</label>
      <input
        id="formAddress"
        type="address"
        name="address"
        value={form.address}
        onChange={handleChange}
      />

      <label htmlFor="formBurgh">Bairro</label>
      <input
        id="formBurgh"
        type="burgh"
        name="burgh"
        value={form.burgh}
        onChange={handleChange}
      />

      <label htmlFor="formCity">Cidade</label>
      <input
        id="formCity"
        type="city"
        name="city"
        value={form.city}
        onChange={handleChange}
      />

      <button type="submit">Cadastrar</button>
    </form>
  );
}
