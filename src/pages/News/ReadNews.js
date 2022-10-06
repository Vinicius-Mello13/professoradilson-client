import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api/api";

export function ReadNews() {
  const { id } = useParams();
  console.log(id);
  // const navigate = useNavigate();
  const [news, setNews] = useState({});
  useEffect(() => {
    async function fetchTopic() {
      try {
        const response = await api.get(`/api/1.0/news/${id}`);
        console.log(response);
        setNews({ ...response.data });
      } catch (err) {
        console.log(err);
      }
    }
    fetchTopic();
  }, [id]);



  // function handleChange(event) {
  //   setForm({ ...form, [event.target.name]: event.target.value });
  //   console.log(form);
  // }

  // async function handleSubmit(e) {
  //   e.preventDefault();

  //   try {
  //     const response = await api.post("api/1.0/comments", form);

  //     window.location.reload();
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const [comments, setComments] = useState({});
  useEffect(() => {
    async function fetchTopic() {
      try {
        const response = await api.get("/api/1.0/comments");
        setComments([...response.data]);
      } catch (err) {
        console.log(err);
      }
    }
    fetchTopic();
  }, []);
  console.log(comments);


  



  return (
    <div>
      <div>
        <h1>{news.title}</h1>
        <p>{news.news}</p>
      </div>
      <div></div>


    </div>
  );
}
