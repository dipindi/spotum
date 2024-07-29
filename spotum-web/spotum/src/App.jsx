import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import Team from "./Team";
import FileUpload from "./Fileupload";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="main">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <hr className="divider"></hr>
                  <Team />
                </>
              }
            />
            <Route path="/upload" element={<FileUpload />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
