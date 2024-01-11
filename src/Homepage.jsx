import { NavLink } from "react-router-dom"

function Homepage() {
  return (
    <main>
        <section>
            <h1>Practicing React Concepts <br/> Get into the adventure of react JS</h1>
            <h2>Contect API , React Router , Form Validation , Core React hooks  , Prop Drilling</h2>   
            <NavLink to='/login'>Login Now</NavLink>    
        </section>
    </main>
  )
}

export default Homepage