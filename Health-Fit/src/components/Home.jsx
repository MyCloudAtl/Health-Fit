import { Link } from "react-router-dom"
import React from "react"
import BigCalendar from "../BigCalendar"

const Home = () => {

    return (
      <div className="home">
          <div>
        <h1>Health-Fit</h1>
        <BigCalendar/>
      </div>
      {/* <div className="nav">
        <Link to="/gym">Gym</Link>
        <Link to="/nutrition">Nutrition</Link>
      </div> */}
      </div>
    )
  }
export default Home  
