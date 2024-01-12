import { useState } from "react"
import { redirect, useParams} from "react-router-dom"

function Carrer() {
    const[query , setQuery] = useState('')
    //const[searchParams , setSearchParams] = useSearchParams()
    const {values} = useParams()

    const handleSubmit = (e) =>{
     e.prevent.Default()
     //setSearchParams({Query:query})
     setQuery(values)
     redirect(`/App/${values}`)
    }
    
  return (
    <div>
        <h1>Carrer</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={(e)=> setQuery(e.target.value)}></input>
        <button type="submit">set Query</button>
        {/* <h2>Your Query : {searchParams.get('Query')}</h2> */}
        </form>
    </div>
  )
}

export default Carrer