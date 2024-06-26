import React from "react"
import RegisterForm from "./RegisterForm.jsx";
import Login from './Login.jsx';

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
