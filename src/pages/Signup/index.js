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
    <div class="row">
      <div class="page-login-01">
        <img
          class="img-adilson"
          src="https://iili.io/bBNwmX.jpg"
          alt="Professor Adilson"
        ></img>
      </div>
      <div class="page-login-02">
        <form onSubmit={handleSubmit}>
      
        <div class="text-header">
            <label class="enter-text">Cadastre-se aqui e fique por dentro do nosso trabalho!</label>
          </div>
       
          <div class="login-input e-0">
            <input
              placeholder="Nome"
              class="input"
              id="formName"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div class="login-input e-0">
            <input
              placeholder="E-mail"
              class="input"
              id="formEmail"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div class="login-input e-0">
            <input
              placeholder="Senha"
              class="input"
              id="formPassword"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
            />
          </div>
          <div class="login-input e-0">
            <input
              placeholder="Confirmação de senha"
              class="input"
              id="formConfirmPassword"
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div class="login-input e-0">
            <input
              placeholder="WhatsApp"
              class="input"
              id="formWhatsapp"
              type="whatsapp"
              name="whatsapp"
              value={form.whatsapp}
              onChange={handleChange}
            />
          </div>
          <div class="login-input e-0">
            <input
              placeholder="Endereço"
              class="input"
              id="formAddress"
              type="address"
              name="address"
              value={form.address}
              onChange={handleChange}
            />
          </div>
          <div class="login-input e-0">
            <input
              placeholder="Bairro"
              class="input"
              id="formBurgh"
              type="burgh"
              name="burgh"
              value={form.burgh}
              onChange={handleChange}
            />
          </div>
          <div class="login-input e-0">
            <input
              placeholder="Cidade"
              class="input"
              id="formCity"
              type="city"
              name="city"
              value={form.city}
              onChange={handleChange}
            />
          </div>
          <div class='buttonCadastro'>
            <button class="button" type="submit" style={{ marginTop: 15, marginBottom: 5 }}>
              Cadastrar
            </button>

          </div>
        </form>
      </div>
    </div>
  );
}
