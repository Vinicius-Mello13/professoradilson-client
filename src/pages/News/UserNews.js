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
        <h1 class="usernews-welcome-text" style={{ margin: '0' }}>Acompanhe aqui nosso trabalho!</h1>
      </div>
      <div>
        {topics.map((currentTopic) => {
          return (
            <div key={currentTopic._id} class="card">
              <Link className="link" to={`/read-news/${currentTopic._id}`}>
                <h2 class="title-news">{currentTopic.title}</h2>
              </Link>
            </div>
          );
        })}
      </div>

      <div style={{ backgroundColor: 'white', padding: '15px' }}>
        <div style={{ display:'inline-block', position: 'relative', width:'50%'}}>
          <img className='imageOpinion' src='https://iili.io/mBNXNj.png' alt='Deixe sua opinião'></img>
        </div>
        <div style={{ display:'inline-block', position: 'relative', width:'50%', justifyContent: 'center'}}>
        <form onSubmit={handleSubmit} >
          <div>
            <label style={{ margin: 20}}>Deixe aqui sua sugestão, crítica ou solicitação</label>
            <textarea
              className="textarea-user"
              name="body"
              type="text"
              value={form.body}
              onChange={handleChange}
              placeholder={"Mensagem..."}
            ></textarea>
            <div style={{justifyContent: 'center', display: 'flex'}}>
            <button class="usernews-button" type="submit">
              Enviar
            </button>
            </div>
          </div>          
        </form>
        </div>
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
