import React from 'react';
import '../styles/Tag.css';

function Tag() {
  return (
    <div className="tag-container"> 
      <div className="tag-content">
        <h1>Você conseguiu!</h1> 

        <p> Estamos muito orgulhosos de você, agora...</p>
        <ul>
          <li>Fala um pouco mais sobre sua raça, suas particularidades.</li>
          <li>Gostaria de saber como decidiu ir para a Hexside e o que espera estudar lá.</li>
          <li>Você já tem interesse em algum clã/coven? Qual seria?</li>
          <li>Deixo aberto caso queira falar curiosidades sobre seu personagem, uma trilha sonora? Dublagem por exemplo?</li>
        </ul>
      </div>    
    </div>
  );
}

export default Tag;
