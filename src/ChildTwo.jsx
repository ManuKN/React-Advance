import { useNavigate, useParams } from "react-router-dom"
//import useURLparam from "./useURLparam"

function ChildTwo() {
    const {values2} = useParams()
    const navigate = useNavigate()
  return (
    <div>
       <h2>Params 2 : {values2}</h2>
    <button onClick={() => navigate('/App')}>Go Back2</button>
    </div>
  )
}

export default ChildTwo