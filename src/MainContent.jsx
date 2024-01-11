// import ChildTwo from "./ChildTwo"
// import Childone from "./Childone"
import User from "./User"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function MainContent() {
  const Data = useSelector((state) => state.user)
  console.log(Data)
  return (
    <div>
      {/* <ul>
      <li><Link to='/Home'>Home</Link></li>
      <li><Link to='/Carrer'>Carrer</Link></li>
      <li><Link to='/Docs'>Documentation</Link></li>
      <li><Link to='/FeedBack'>FeedBack</Link></li>
      </ul> */}
        <img src="https://c4.wallpaperflare.com/wallpaper/288/472/57/the-sun-minimalism-japan-sword-warrior-hd-wallpaper-preview.jpg" >
        </img>
        <h1>Main Content</h1>
        <h2>Hi {Data.username}</h2>
        {/* <Childone />
        <ChildTwo /> */}
        <ul>
         <li><Link to='/App/:testing1'>ChildOne</Link></li>
         <li><Link to='/App/:testing1/:testing2'>ChildTwo</Link></li>
         </ul>
        <User />   
    </div>
  )
}

export default MainContent