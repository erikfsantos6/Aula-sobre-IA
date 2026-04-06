import { useState } from "react";
import "./style.css";
import Footer from "./Footer";

export default function App() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Torcedor cadastrado: " + nome + " (" + email + ")");
  };

  return (
    <div className="container">
      <h1>Santos FC ⚽</h1>

      <p>
        O Santos Futebol Clube é um dos maiores times do Brasil, conhecido por
        revelar grandes jogadores como Neymar.
      </p>

      <h2>Destaque: Neymar</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Adicionar</button>
      </form>

      <Footer />
    </div>
  );
}