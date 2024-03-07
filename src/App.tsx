import "./App.css";
import { Routes, Route, HashRouter, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
// import Home from "./components/Home";
import Footer from "./shared/Footer";
import Codex from "./components/Codex";
import Nickname from "./components/Nickname";
import Avatar from "./components/Avatar";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <HashRouter basename="/">
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="nickname" />} />
          <Route path="nickname" element={<Nickname />} />
          <Route path="avatar" element={<Avatar />} />
          <Route path="codex" element={<Codex />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
