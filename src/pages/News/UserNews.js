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
    <div style={{
      backgroundColor: 'blue',
      position: 'fixed',
      width: '100%',
      height: '90px',
      justifyContent: 'space-between',
      boxShadow: '0px 1px 1px black',
      display: 'flex',
    }}>
      <div className='nav-bar'>
        <img src='https://iili.io/poFqP4.png' alt='Brasão Barretos'
          style={{
            width: '100px',
            height: '75px',
         
          }}></img>
      </div>
      <div className='nav-bar' style={{
        border: '2px solid black',
        borderRadius: '0 0 45px 45px',
        borderTop: 'hidden',
        backgroundColor: 'white',
        boxShadow: '0px 5px 5px 2px black'
      }}>
        <p style={{
          fontWeight: 'bold',
          fontSize: '25px',
          fontFamily: 'verdana'
        }}>
          NOTÍCIAS
        </p>
      </div>
      <div className='nav-bar'>
        <ul>
          <li><a href='#' style={{color:'white',fontSize:'12px', fontWeight:'bold', textDecoration:'none'}}><p>MATÉRIAS</p></a></li>
          <li><a href='#' style={{color:'white',fontSize:'12px', fontWeight:'bold',textDecoration:'none'}}><p>SUGESTÕES</p></a></li>
        </ul>
      </div>
    </div >
  );
}
