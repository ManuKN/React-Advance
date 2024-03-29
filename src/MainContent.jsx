// import ChildTwo from "./ChildTwo"
// import Childone from "./Childone"
import User from "./User"
import { useSelector } from "react-redux"
import CurrencyConverter from "./CurrencyConverter"
import { useParams } from "react-router"

function MainContent() {
  const {values} = useParams()
  const Data = useSelector((state) => state.user)
  console.log(Data)
  return (
    <div>  
        <img src="https://c4.wallpaperflare.com/wallpaper/288/472/57/the-sun-minimalism-japan-sword-warrior-hd-wallpaper-preview.jpg" >
        </img>
        <h1>Main Content</h1>
        <h2>Hi {Data.username}</h2>
        <h3>Query : {values}</h3>
        {/* <Childone />
        <ChildTwo /> */}
        {/* <ul>
         <li><Link to='/App/testing1'>ChildOne</Link></li>
         <li><Link to='/App/testing1/testing2'>ChildTwo</Link></li>
         </ul> */}
         <CurrencyConverter />
        <User />   
    </div>
  )
}

export default MainContent