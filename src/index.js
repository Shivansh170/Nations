import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router";
import About from "./mycomponents/About";
import Finalpage from "./mycomponents/Finalpage";
import Hero from "./mycomponents/Hero";
import Region from "./mycomponents/Region";
import Contact from "./mycomponents/Contact";
import Terms from "./mycomponents/Terms";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Hero />} />
          <Route path="about" element={<About />} />
          <Route path="finalpage" element={<Finalpage />} />
          <Route path="region/africa" element={<Region></Region>} />
          <Route path="region/asia" element={<Region></Region>} />
          <Route path="region/europe" element={<Region></Region>} />
          <Route path="region/southamerica" element={<Region></Region>} />
          <Route path="region/northamerica" element={<Region></Region>} />
          <Route path="/terms" element={<Terms></Terms>} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
