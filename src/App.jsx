import "./App.css";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/about"
          element={<div className=" mt-[85px]">about page</div>}
        />
        <Route
          path="/contact"
          element={<div className=" mt-[85px]">contact page</div>}
        />
      </Routes>
    </>
  );
}

export default App;
