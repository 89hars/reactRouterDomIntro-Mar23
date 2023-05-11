import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PizzaPage from './pages/PizzaPage'
import ProfilePage from './pages/ProfilePage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/pizzas/:pizzaId' element={<PizzaPage />} />
      <Route path='/profile' element={<ProfilePage />} />

      <Route path='*' element={<h1>404 Not Found</h1>} />
    </Routes>
  )
}

export default App
