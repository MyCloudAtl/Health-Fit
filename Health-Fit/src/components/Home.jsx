import React from "react"
import RegisterForm from "./RegisterForm.jsx";
import Logout from "./Logout.jsx";
import Login from './Login.jsx'

const Home = () => {

    return (
      <div className="home">
          <div>
        <h1>Health-Fit</h1>
          <RegisterForm />
          <Login />
          <Logout />
      </div>
      </div>
    )
  }
export default Home  
