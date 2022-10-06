import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { api } from "../../api/api";
import { Link, useNavigate } from "react-router-dom";

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
      const response = await api.post("/api/1.0/user/login", form);
      setLoggedInUser({ ...response.data });

      localStorage.setItem("loggedInUser", JSON.stringify(response.data));

      navigate("/user-news");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>OLÁ, CARO MUNÍCIPE! SEJA BEM-VINDO AO NOSSO ESPAÇO, 
        AQUI VOCÊ ACOMPANHA NOSSO TRABALHO, OFERECE SUGESTÕES, 
        OPINIÕES E PARTICIPA DO DIA-A-DIA DA NOSSA QUERIDA CIDADE! 
        FAÇA SEU LOGIN OU CADASTRE-SE E VAMOS JUNTOS POR UMA BARRETOS CADA VEZ MELHOR</h1>
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <label>Senha:</label>
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
      />
      <button type="submit">Entrar!</button>

      <h6>Ainda não é cadastrado? <Link to="/signup">Clique aqui</Link> e faça parte do nosso espaço</h6>
    </form>
  );
}
