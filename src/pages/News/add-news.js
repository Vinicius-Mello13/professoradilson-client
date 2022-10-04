import { api } from "../../api/api";
import { useState } from "react";

export function CreateNews() {
  const [form, setForm] = useState({
    title: "",
    body: "",
  });

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form)
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post("/api/1.0/news", form);
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
        name="body"
        type="text"
        value={form.body}
        onChange={handleChange}
      ></textarea>
      <button type="submit">Enviar</button>
    </form>
  );
}
