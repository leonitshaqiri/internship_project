import React from "react";
import { Routes, Route } from "react-router-dom";
import BookDetails from "./components/header/BookDetails";
// import PageTitle from "./components/header/page-title";
import Home from "./components/Home";
import Layout from "./components/layout";
import Login from "./components/Login";
// import Login from "./components/Login";

function App() {
  return (
    <div>
      {/* <Login /> */}
      {/* <PageTitle title={"Login"} /> */}
      <Layout>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="home-page" element={<Home />} />
          <Route path="home-page/:bookId" element={<BookDetails />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
