import { api } from "../../api/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function CreateNews() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    news: "",
  });

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form)
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post("api/1.0/news", form
      );

      navigate("/news");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

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
