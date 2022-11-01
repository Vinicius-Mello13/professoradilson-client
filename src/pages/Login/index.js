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

  // const requiredField = [
  //   {
  //   type:'mail',
  //   message:'O Campo e-mail é obrigatório'
  //   },
  //   {
  //     type:'password',
  //     message:'O Campo senha é obrigatório'
  //   }
  // ]

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post("/api/1.0/user/login", form);
      console.log(response);
      setLoggedInUser({ ...response.data });
      localStorage.setItem("loggedInUser", JSON.stringify(response.data));
      if (response.data.user.role === "ADMIN") {
        navigate("/admin-news");
      } else {
        navigate("/user-news");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div class="row">
      <div class="page-login-01">
        <img
          class="img-adilson"
          src="https://iili.io/bBNwmX.jpg"
          alt="Câmara Municipal"
        ></img>
      </div>

      <div class="page-login-02">
        <form onSubmit={handleSubmit}>
          <div class="e-0">
            <label class="enter-text">Entrar</label>
          </div>
          <div>
            <hr></hr>
          </div>
          <div class="login-input e-0">
            <input
              class="input"
              placeholder="E-mail*"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div class="login-input e-0">
            <input
              class="input"
              placeholder="Senha*"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </div>
          <div class="e-0 justify-center">
            <button
              type="submit"
              class="button"
              style={{ marginTop: 15, marginBottom: 5 }}
            >
              Entrar
            </button>
          </div>
          <div class="e-0 justify-center">
            <h class="clique-aqui">
              Ainda não é cadastrado? <Link to="/signup">Clique aqui</Link> e
              cadastre-se.
            </h>
          </div>
        </form>
      </div>
    </div>
  );
}
