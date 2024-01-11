import useURLparam from "./useURLparam"

function Childone() {
    const values = useURLparam()
  return (
    <div>
        <button onClick={() =>(console.log({values}))}>ChildRoute 1</button>
    </div>
  )
}

export default Childone