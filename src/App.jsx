import { BrowserRouter, Route, Routes , Link } from 'react-router-dom'
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
//const ChildTwo = lazy(() => import("./ChildTwo"))
const CurrencyConverter = lazy(() => import("./CurrencyConverter"))
const Home = lazy(() => import("./Home"))
const Carrer = lazy(() => import("./Carrer"))
const Docs = lazy(() => import("./Docs"))
const FeedBack = lazy(() => import("./FeedBack"))
function App() {

  return (
  <Authuntication>
  <BrowserRouter>
  <ul>
      <li><Link to='/Home'>Home</Link></li>
      <li><Link to='/Carrer'>Carrer</Link></li>
      <li><Link to='/Docs'>Documentation</Link></li>
      <li><Link to='/FeedBack'>FeedBack</Link></li>
      </ul>
  <Suspense fallback={<Error />}>
  <Routes>
    <Route path='/' element={<Homepage />} />
    <Route path='/login' element={<Login />}/>
    <Route path='/Home' element={<Home />}/>
    <Route path='/Carrer' element={<Carrer />}/>
    <Route path='/Docs' element={<Docs />}/>
    <Route path='/FeedBack' element={<FeedBack />}/>
    <Route path= '/App' element={<AppLayout />}>
       <Route index element={<MainContent />}/>
       <Route path= 'App/converter' element={<CurrencyConverter />} />
       <Route path='App/:values' element={<Childone />} />
       {/* <Route path='App/:testing1' element={<Childone />} />
       <Route path='App/:testing1/:testing2' element={<ChildTwo />} /> */}
    </Route>
  </Routes>
  </Suspense>
  </BrowserRouter>
  </Authuntication>
  )
}

export default App
