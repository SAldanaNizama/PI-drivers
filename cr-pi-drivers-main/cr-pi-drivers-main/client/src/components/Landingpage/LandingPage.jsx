import "./LandingPage.css"
import { NavLink } from "react-router-dom"
const LandingPage = () => {
  return (
    <div className="landing">

      <div className="welcom">
        <h1>WELCOM TO MY DRIVERS API !!!!</h1>
      </div>
      <NavLink to="/home">
        <button>HOME</button>
      </NavLink>
    </div>
  )
}

export default LandingPage