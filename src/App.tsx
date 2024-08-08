

import './App.scss'


import { Routes, Route } from 'react-router-dom';

import HomePage from "./pages/Home"
import DemoPage from './pages/Dome';

function App() {


  return (
    <>
    <main className='w-full h-screen bg-slate-800'>

    <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/demo" element={<DemoPage />}/>
    
    </Routes>

    </main>
    </>
  )
}

export default App
