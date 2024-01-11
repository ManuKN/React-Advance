import { useParams } from "react-router-dom"


function useURLparam() {
  const {testing1} = useParams()
  return testing1
}

export default useURLparam