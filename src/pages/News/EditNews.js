import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../api/api";

export function EditNews() {
  const { id } = useParams();
  console.log(id);
 
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    news: "",
  });

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.put(`/api/1.0/news/${id}`, form);

      navigate("/admin-news");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function fetchTopic() {
      try {
        const response = await api.get(`/api/1.0/news/${id}`);
        console.log(response);
        delete response.data._id;
        setForm({ ...response.data });
      } catch (err) {
        console.log(err);
      }
    }
    fetchTopic();
  }, [id]);

  return (
    <form onSubmit={handleSubmit}>
      <label>Título</label>
      <input
        name="title"
        type="text"
        value={form.title}
        onChange={handleChange}
      ></input>


      <label>Notícia</label>
      <textarea
        name="news"
        type="text"
        value={form.news}
        onChange={handleChange}
      ></textarea>
      <button type="submit">Enviar</button>
    </form>
  );
}
