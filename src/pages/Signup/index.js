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
      // if (user.role === "ADMIN") navigate("/admin-news");
      // else {
        navigate("/user-news");
      // }
    } catch (error) {
      // console.log(error);
    }
  }

  return (
    <>
      <h1 class="signup-welcome-text">
        Cadastre-se aqui e fique por dentro do nosso trabalho!
      </h1>
      <form onSubmit={handleSubmit}>
        <div class="signup-form">
          <label class="signup-label" htmlFor="formName">
            Nome:
          </label>
          <input
            class="signup-input"
            id="formName"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div class="signup-form">
          <label class="signup-label" htmlFor="formEmail">
            E-mail:
          </label>
          <input
            class="signup-input"
            id="formEmail"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div class="signup-form">
          <label class="signup-label" htmlFor="formPassword">
            Senha:
          </label>
          <input
            class="signup-input"
            id="formPassword"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
          />
        </div>
        <div class="signup-form">
          <label class="signup-label" htmlFor="formConfirmPassword">
            Confirmação de senha
          </label>
          <input
            class="signup-input"
            id="formConfirmPassword"
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div class="signup-form">
          <label class="signup-label" htmlFor="formWhatsapp">
            WhatsApp
          </label>
          <input
            class="signup-input"
            id="formWhatsapp"
            type="whatsapp"
            name="whatsapp"
            value={form.whatsapp}
            onChange={handleChange}
          />
        </div>
        <div class="signup-form">
          <label class="signup-label" htmlFor="formAddress">
            Endereço
          </label>
          <input
            class="signup-input"
            id="formAddress"
            type="address"
            name="address"
            value={form.address}
            onChange={handleChange}
          />
        </div>
        <div class="signup-form">
          <label class="signup-label" htmlFor="formBurgh">
            Bairro
          </label>
          <input
            class="signup-input"
            id="formBurgh"
            type="burgh"
            name="burgh"
            value={form.burgh}
            onChange={handleChange}
          />
        </div>
        <div class="signup-form">
          <label class="signup-label" htmlFor="formCity">
            Cidade
          </label>
          <input
            class="signup-input"
            id="formCity"
            type="city"
            name="city"
            value={form.city}
            onChange={handleChange}
          />
        </div>
        <button class="signup-button" type="submit">
          Cadastrar
        </button>
      </form>
    </>
  );
}
