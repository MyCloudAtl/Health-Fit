import { Link } from "react-router-dom"
import React from "react"
import BigCalendar from "../BigCalendar.jsx"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import RegisterForm from "./RegisterForm.jsx";
import Login from "./Login.jsx";

const Home = () => {

    return (
      <div className="home">
          <div>
        <h1>Health-Fit</h1>
          <RegisterForm />
          <Login />
      </div>
      </div>
    )
  }
export default Home  
