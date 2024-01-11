import { useNavigate } from "react-router-dom";
import useURLparam from "./useURLparam"

function Childone() {
  const navigate = useNavigate()
    const values = useURLparam()
    console.log(values);
  return(
    <div>
       <h2>Params 1:{values}</h2>
    <button onClick={() => navigate('/App')}>Go Back1</button>
    </div>
  )
}

export default Childone