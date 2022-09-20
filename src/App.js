import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Screen1 from "./screens/screen1";
import Screen2 from "./screens/screen2";
import Screen3 from "./screens/screen3";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Screen1 />} />
        <Route path="/screen2" element={<Screen2 />} />
        <Route path="/screen3" element={<Screen3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
