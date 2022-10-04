import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { News } from "./pages/News/edit-delete-news";
import { AuthContextComponent } from "./contexts/authContext";
import { ErrorPage } from "./pages/ErrorPage";
import { CreateNews } from "./pages/News/add-news";

function App() {
  return (
    <>
      <AuthContextComponent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/news" element={<News />} />
          <Route path="/add-news" element={<CreateNews />} />   
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;
