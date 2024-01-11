import ChildTwo from "./ChildTwo"
import Childone from "./Childone"
import User from "./User"
import { useSelector } from "react-redux"

function MainContent() {
  const Data = useSelector((state) => state.user)
  console.log(Data)
  return (
    <div>
        <img src="https://c4.wallpaperflare.com/wallpaper/288/472/57/the-sun-minimalism-japan-sword-warrior-hd-wallpaper-preview.jpg" >
        </img>
        <h1>Main Content</h1>
        <h2>Hi {Data.username}</h2>
        <Childone />
        <ChildTwo />
        <User />   
    </div>
  )
}

export default MainContent