import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { lazy } from 'react'
import { Suspense } from 'react'
import { Authuntication } from './context/Authuntication'

const Homepage = lazy(() => import("./Homepage"))
const Login = lazy(() => import("./Login"))
const Error = lazy(() => import("./Error"))
const AppLayout = lazy(() => import("./AppLayout"))
const MainContent  = lazy(() => import("./MainContent"))
const Childone = lazy(() => import("./Childone"))
const ChildTwo = lazy(() => import("./ChildTwo"))

function App() {

  return (
  <Authuntication>
  <BrowserRouter>
  <Suspense fallback={<Error />}>
  <Routes>
    <Route path='/' element={<Homepage />} />
    <Route path='/login' element={<Login />}/>
    <Route path= '/App' element={<AppLayout />}>
       <Route index element={<MainContent />}/>
       <Route path='/App/:testing1' element={<Childone />} />
       <Route path='/App/:testing2' element={<ChildTwo />} />
    </Route>
  </Routes>
  </Suspense>
  </BrowserRouter>
  </Authuntication>
  )
}

export default App
