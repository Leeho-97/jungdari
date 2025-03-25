import { Outlet, Route, Routes, useLocation } from "react-router-dom";

//page
import Main from "./pages/Main";
import Mypage from './pages/Mypage';


function App() {

  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/mypage" element={<Mypage/>}/>
    </Routes>
  )
}

export default App

