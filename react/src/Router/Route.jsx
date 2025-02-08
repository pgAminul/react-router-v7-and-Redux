import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../Component/Home";
import Error from "../Component/Error";
import NavbarLayout from "../Component/NavbarLayout";
import About from "../Component/About";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavbarLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Route>

        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
