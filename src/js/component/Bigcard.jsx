import React from 'react';
import '/src/styles/bigcard.css';

const MyCard = () => {
  return (
     <div className="conteiner">
      <div className="card carta text-bg-dark m-4">
        <img src="https://img.freepik.com/fotos-premium/selva-tropical-verde-muy-bonita-arbol-grande_875722-14381.jpg" className="card-img-foto" alt="..."  />
        <div className="card-img-overlay">
          <h1 className="card-title">A warm Welcome</h1>
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique pariatur sequi eum tempore aliquid inventore soluta doloribus est dicta voluptatibus odio, minima ex modi temporibus unde at? Magnam, id aut.</p>
          <a href="#" className="btn btn-primary mt-4">Call to action!</a>
        </div>
      </div>
    </div>
  );
};

export default MyCard;