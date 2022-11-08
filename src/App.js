import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { News } from "./pages/News/AdminNews";
import { AuthContextComponent } from "./contexts/authContext";
import { ErrorPage } from "./pages/ErrorPage";
import { CreateNews } from "./pages/News/CreateNews";
import { EditNews } from "./pages/News/EditNews";
import { ReadNews } from "./pages/News/ReadNews";
import { UserNews } from "./pages/News/UserNews";
import Navbar from "./components/NavBar";

function App() {
  return (
    <>
    {/* <Navbar></Navbar> */}
      <AuthContextComponent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-news" element={<News />} />
          <Route path="/user-news" element={<UserNews />} />
          <Route path="/add-news" element={<CreateNews />} />
          <Route path="/edit-news/:id" element={<EditNews />} /> 
          <Route path="/read-news/:id" element={<ReadNews />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;
