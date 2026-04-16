import './App.css'
import Header from "./components/Header";
import AdicionarUsuario from "./components/AdicionarUsuario";
import Footer from "./components/Footer"
function App() {
  

  return (
    <>
      <div className="App">
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