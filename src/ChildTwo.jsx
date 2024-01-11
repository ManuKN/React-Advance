import { useNavigate } from "react-router-dom"
import useURLparam from "./useURLparam"

function ChildTwo() {
    const values2 = useURLparam()
    const navigate = useNavigate()
  return (
    <div>
       <h2>{values2}</h2>
    <button onClick={() => navigate('/App')}>Go Back2</button>
    </div>
  )
}

export default ChildTwo