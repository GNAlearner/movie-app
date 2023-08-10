import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleMovie from "./components/SingleMovie";
import Error from "./components/Error";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="movie/:id" element={<SingleMovie/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
