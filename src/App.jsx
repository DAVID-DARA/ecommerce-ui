import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Homepage/HomePage'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<HomePage/>} path='/'/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
