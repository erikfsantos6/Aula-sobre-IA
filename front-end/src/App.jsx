import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import CadastroPage from './pages/CadastroPage'
import ListaPage from './pages/ListaPage'
import { ToastContainer } from 'react-toastify'

function App() {

return (
  <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cadastro' element={<CadastroPage />} />
          <Route path='/lista' element={<ListaPage />} />
        </Routes>
      </main>
      <Footer />
      <ToastContainer autoClose={3000} />
    </>
  )
}

export default App