import { api } from "../../api/api";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function UserNews() {
  const [topics, setTopics] = useState([]);
  const navigate = useNavigate();
  const [readComments, setReadComments] = useState([]);
  const [form, setForm] = useState({
    body: "",
  });

  async function deleteTopic(_id) {
    try {
      await api.delete(`/api/1.0/news/${_id}`);

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function fetchTopic() {
      try {
        const response = await api.get("/api/1.0/comments");
        setReadComments([...response.data]);
      } catch (err) {
        console.log(err);
      }
    }
    fetchTopic();
  }, []);

  async function deleteSuggestions(_id) {
    try {
      await api.delete(`/api/1.0/comments/${_id}`);

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post("api/1.0/comments", form);

      window.location.reload();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function fetchTopic() {
      try {
        const response = await api.get("/api/1.0/news");
        setTopics([...response.data]);
      } catch (err) {
        console.log(err);
      }
    }
    fetchTopic();
  }, []);

  return (
    <div>
      {/* <header
        style={{
          backgroundColor: "blue",
          position: "absolute",
          width: "100%",
          height: "90px",
          justifyContent: "space-between",
          boxShadow: "0px 1px 1px black",
          display: "flex",
        }}
      >
        <div className="nav-bar">
          <img
            src="https://iili.io/poFqP4.png"
            alt="Brasão Barretos"
            style={{
              width: "100px",
              height: "75px",
            }}
          ></img>
        </div>
        <div
          className="nav-bar"
          style={{
            border: "2px solid black",
            borderRadius: "0 0 45px 45px",
            borderTop: "hidden",
            backgroundColor: "white",
            boxShadow: "0px 5px 5px 2px black",
          }}
        >
          <p
            style={{
              fontWeight: "bold",
              fontSize: "25px",
              fontFamily: "verdana",
            }}
          >
            NOTÍCIAS
          </p>
        </div>
        <div className="nav-bar">
          <ul>
            <li>
              <a
                href="#"
                style={{
                  color: "white",
                  fontSize: "12px",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                <p>MATÉRIAS</p>
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  color: "white",
                  fontSize: "12px",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                <p>SUGESTÕES</p>
              </a>
            </li>
          </ul>
        </div>
      </header> */}

      <header>
        <img />
        <p>NOTÍCIAS</p>
        <div>
          <ul>
            <li>
              <p>MATÉRIAS</p>
            </li>
            <li>
              <p>SUGESTÕES</p>
            </li>
          </ul>
        </div>
      </header>
      <body>
        {/* 1 */}
        <div>
          {/* 2 */}
          <div>
            {/* 4 */}
            <div>
              <h1>O vereador mais votado de Barretos!</h1>
            </div>
            {/* 5 */}
            <div>
              <h3>Texto menor de apresentação</h3>
              <button>Botão</button>
            </div>
            {/* 6 */}
            <div></div>
          </div>
          {/* 3 */}
          <div>
            <img />
          </div>
          {/* ---------------------------------- */}
          {/* 7 */}
          <div>
            {/* 8 */}
            <div>
              {/* 9 */}
              <div>
                <img />
              </div>
              {/* 10 */}
              <div>
                {/* 11 */}
                <div>
                  <h4>1336 votos!</h4>
                </div>
                {/* 12 */}
                <div>
                  <h6>Mandato 2021-2024</h6>
                </div>
              </div>
            </div>
          </div>
          {/* ---------------------------------- */}
          {/* 13 */}
          <div>
            {/* 14 */}
            <div>
              {/* 16 */}
              <div>
                <h3>Nossas conquistas!</h3>
              </div>
              {/* 17 */}
              <div>
                <ul>
                  <li>
                    <p>Conquista 1</p>
                  </li>
                  <li>
                    <p>Conquista 2</p>
                  </li>
                  <li>
                    <p>Conquista 3</p>
                  </li>
                  <li>
                    <p>Conquista 4</p>
                  </li>
                </ul>
              </div>
            </div>
            {/* 15 */}
            <div>
              <img />
            </div>
          </div>
          {/* ---------------------------------- */}
          {/* 18 */}
          <div>
            {/* 19 */}
            <div>
              <img />
            </div>
            {/* 20 */}
            <div>
              <img />
            </div>
            {/* 21 */}
            <div>
              <img />
            </div>
            {/* 22 */}
            <div>
              <img />
            </div>
          </div>
          {/* ---------------------------------- */}
          {/* 23 */}
          <div>
            {/* 24 */}
            <div>
              {/* 25 */}
              <div>
                <h2>
                  Acompanhe aqui nosso trabalho, veja as notícias e dê sugestões
                  para nossa cidade no portal!
                </h2>
              </div>
              {/* 26 */}
              <div>
                {/* 27 */}
                <div>
                  <button>Entrar</button>
                </div>
                {/* 28 */}
                <div>
                  <button>Cadastrar</button>
                </div>
              </div>
            </div>
          </div>
          {/* ---------------------------------- */}
          {/* 29 */}
          <div>
            {/* 30 */}
            <div><h6>2022 Todos os direitos reservados. Desenvolvido por Equipe de Tecnologia Professor Adilson Ventura</h6></div>
          </div>
        </div>
      </body>
    </div>
  );
}
