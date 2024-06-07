import React from 'react';
import '/src/styles/tinycards.css';

const CardGrid = () => {
  const cards = [
    { title: 'Card 1', image: 'https://images.nintendolife.com/aeb50f52b1a35/nintendo-switch.large.jpg', text: 'Llevate todos los juegos de nintendo que quieras GRATIS'},
    { title: 'Card 2', image: 'https://gmedia.playstation.com/is/image/SIEPDC/tekken-8-cover-01-en-12jan24?$native$', text: 'AHORA esto no es un baitclic pero si haces clic ganaras un millons de dolares que te pagara directamente Sony, no nos hacemos responsable por lo pendejo que seas' },
    { title: 'Card 3', image: 'https://assets.xboxservices.com/assets/36/e3/36e335da-9137-41ca-b8ec-f0847a0e53a6.jpg?n=Console-NewGames-5Blades-FullBleed.jpg', text: 'Xbox vende todo lo que tiene a precio de un 1 la accion, a que esperas toca el boton y descarga un virus.' },
    { title: 'Card 4', image: 'https://saudigazette.com.sa/uploads/images/2018/03/08/750226.PNG', text: 'se nos acaban las ideas, pero igual pisa el boton' },
  ];

  return (
    <div className="row  row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-xl-4 g-4 m-4">
      {cards.map((card, index) => (
        <div key={index} className="col">
          <div className="card">
            <img src={card.image} className="card-img-top card-photo" alt={card.title} />
            <div className="card-body text-center">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.text}</p>
            </div>
            <div className="card-footer text-center bg-white">
              <button type="button" className="btn btn-primary">Pisa el boton!</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;






// import React from 'react';
// import '/src/styles/tinycards.css';

// const CardGrid = () => {
//   const cards = [
//     { title: 'Card 1', image: 'https://images.nintendolife.com/aeb50f52b1a35/nintendo-switch.large.jpg', text: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'},
//     { title: 'Card 2', image: 'https://gmedia.playstation.com/is/image/SIEPDC/tekken-8-cover-01-en-12jan24?$native$', text: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.' },
//     { title: 'Card 3', image: 'https://assets.xboxservices.com/assets/36/e3/36e335da-9137-41ca-b8ec-f0847a0e53a6.jpg?n=Console-NewGames-5Blades-FullBleed.jpg', text: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.' },
//     { title: 'Card 4', image: 'https://saudigazette.com.sa/uploads/images/2018/03/08/750226.PNG', text: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit toamte.tomate tomate toamte tomate tomate toamtetomate tomate toamtetomate tomate toamte' },
//   ];

//   return (
//     <div className="row  row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 m-4">
//       {cards.map((card, index) => (
//         <div key={index} className="col">
//           <div className="card h-100">
//             <img src={card.image} className="card-img-top card-photo" alt={card.title} />
//             <div className="card-body card-lg text-center pt-3 p-0">
//               <h5 className="card-title">{card.title}</h5>
//               <p className="card-text">{card.text}</p>
//               <div className="card-footer m-0">
//               <button type="button" className="btn btn-primary">Primary</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CardGrid;