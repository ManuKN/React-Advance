import { Outlet } from "react-router-dom"
//import MainContent from "./MainContent"
function AppLayout() {
  return (
    <div>
        <Outlet />
        {/* <MainContent /> */}
    </div>
  )
}

export default AppLayout