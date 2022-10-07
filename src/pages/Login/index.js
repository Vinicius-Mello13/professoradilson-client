import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { api } from "../../api/api";
import { Link, useNavigate } from "react-router-dom";
import style from "../../../src/style.css";

export function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { setLoggedInUser } = useContext(AuthContext);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post("/api/1.0/users/login", form);
      setLoggedInUser({ ...response.data });

      localStorage.setItem("loggedInUser", JSON.stringify(response.data));

      navigate("/user-news");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div class="page">
      <form onSubmit={handleSubmit}>
        <h1 class="welcome-text">Olá, caro munícipe!</h1>
        <h2 class="welcome-text">
          Seja bem-vindo ao nosso espaço, aqui você acompanha nosso trabalho,
          oferece sugestões, opiniões e participa do dia-a-dia da nossa querida
          cidade! Faça seu login ou cadastre-se e vamos juntos por uma Barretos
          cada vez melhor!!!
        </h2>
        <label class="input-name">Email:</label>
        <input
          class="input"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <label class="input-name">Senha:</label>
        <input
          class="input"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <button type="submit" class="button">
          Entrar!
        </button>
        <h class="clique-aqui">
          Ainda não é cadastrado? <Link to="/signup">Clique aqui</Link> e faça
          parte do nosso espaço
        </h>
        <a href="https://freeimage.host/i/Qwp88J">
          <img
          class="photo"
            src="https://iili.io/Qwp88J.md.jpg"
            alt="Qwp88J.md.jpg"
            border="0"
          />
        </a>
      </form>
    </div>
  );
}
