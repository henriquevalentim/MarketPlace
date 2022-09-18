import { Routes, Route, Link } from 'react-router-dom'
import { Button } from '@mui/material'
import Home from './Screens/Home'
import Login from './Screens/Login'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
