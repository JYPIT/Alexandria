import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Book from "./routes/Book";
import Books from "./routes/Books";
import Home from "./screens/Home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":bookId" element={<Book />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
