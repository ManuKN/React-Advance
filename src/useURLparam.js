import { useParams } from "react-router-dom"


function useURLparam() {
  const {values} = useParams()
  return values
}

export default useURLparam