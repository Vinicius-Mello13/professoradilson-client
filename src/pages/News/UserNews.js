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
    <div class="page">
      <div>
        <h1 class="usernews-welcome-text">Acompanhe aqui nosso trabalho!</h1>
      </div>
      <div>
        {topics.map((currentTopic) => {
          return (
            <div key={currentTopic._id} class="card">
              <Link className= "link" to={`/read-news/${currentTopic._id}`}>
                <h2 class="title-news">{currentTopic.title}</h2>
              </Link>
            </div>
          );
        })}
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <label class="sugestao">
            Deixe Aqui sua Sugestão, Crítica ou Solicitação
          </label>
          <input
            class="news-input"
            name="body"
            type="text"
            value={form.body}
            onChange={handleChange}
          ></input>
          <button class="usernews-button" type="submit">
            Enviar
          </button>
        </form>
      </div>

      <div>
        {readComments.map((currentTopic) => {
          return (
            <>
              <div key={currentTopic._id}>
                <p class="sugestoes">{currentTopic.body}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
