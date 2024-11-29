import React from 'react';
import '../styles/Hero.css';
import { useNavigate } from 'react-router-dom';


function Hero() {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/Runas'); 
  };

  return (
    <div className="hero-container">
      <h1>Bem vindo aluno da Hexside!</h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>Está muito escuro. Que tal um feitiço de luz para enxergarmos a terceira tag?</p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <button onClick={handleStartClick}>Iniciar</button>
    </div>
  );
}

export default Hero;
