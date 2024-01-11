import useURLparam from "./useURLparam"

function ChildTwo() {
    const values = useURLparam()
  return (
    <div>
        <button onClick={() =>(console.log({values}))}>ChildRoute 2</button>
    </div>
  )
}

export default ChildTwo