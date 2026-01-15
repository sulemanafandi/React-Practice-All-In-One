import React from "react";
import Header from '../components/Header'
import '../css/Home.css'
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="banner-container pb-4">
        <Header/>
        <div className="banner-content">
          <Link to="" className="btn btn-primary fw-bold">Explore</Link>
        </div>
      </div>
    </>
  );
}

export default Home;
