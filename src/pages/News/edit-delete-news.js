import { api } from "../../api/api";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function News() {
  const [topics, setTopics] = useState([]);
  const navigate = useNavigate();

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
        const response = await api.get("/api/1.0/news/");
        console.log(response);
        console.log(response.data);
        setTopics([...response.data]);
      } catch (err) {
        console.log(err);
      }
    }
    fetchTopic();
  }, []);

  return (
    <div>
      <div>
        <h1>Acompanhe aqui nosso trabalho</h1>
        <h6><Link to="/add-news">Adicionar Notícia</Link></h6>
      </div>
      <div>
        {topics.map((currentTopic) => {
          return (
            <div key={currentTopic._id}>
              <h2>{currentTopic.title}</h2>
              <p>{currentTopic.body}</p>
              <button
                onClick={() => {
                  navigate(`/edit-topic/${currentTopic._id}`);
                }}
              >
                Editar
              </button>
              <button
                onClick={() => {
                  deleteTopic(currentTopic._id);
                }}
              >
                Deletar
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
