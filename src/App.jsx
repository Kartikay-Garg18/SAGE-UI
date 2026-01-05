import AuthPage from './components/AuthPage'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Home from './components/Home'
import Hero from './components/Landing/Hero.jsx'
import MeetingRoom from './components/MeetingRoom'

const App = () => {
  const {isAuthenticated} = useSelector((state) => state.auth);

  return (
    <div className="select-none">
    <Routes>
      <Route path='/' element={<Hero/>}></Route>
      <Route path='/auth' element={!isAuthenticated? <AuthPage /> : <Navigate to="/home" />}></Route>
      <Route path='/home' element={isAuthenticated ? <Home /> : <Navigate to="/auth" />}></Route>
      <Route path='/schedule' element={isAuthenticated ? <Home /> : <Navigate to="/auth" />}></Route>
      <Route path='/room/:roomCode' element={isAuthenticated ? <MeetingRoom /> : <Navigate to="/auth" />}></Route>
    </Routes>
    </div>
  )
}

export default App