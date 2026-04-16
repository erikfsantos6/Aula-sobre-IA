import {useState} from 'react'
import './style.css'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import AdicionarUsuario from './components/AdicionarUsuario'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <Header/>
        <main>
          <AdicionarUsuario/>
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default App