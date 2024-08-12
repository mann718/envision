// import React, { useState } from 'react';
// import '../styles/ResearchSlider.css';


// const CardSlider = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
  
//     const cards = [
//       { id: 1, title: 'Card 1', content: 'Content for Card 1' },
//       { id: 2, title: 'Card 2', content: 'Content for Card 2' },
//       { id: 3, title: 'Card 3', content: 'Content for Card 3' },
//       { id: 4, title: 'Card 4', content: 'Content for Card 4' },
//       { id: 5, title: 'Card 5', content: 'Content for Card 5' }
//     ];
  
//     const nextSlide = () => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
//     };
  
//     const prevSlide = () => {
//       setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
//     };
  
//     return (
//       <div className="card-slider">
//         <button className="slider-button prev" onClick={prevSlide}>
//           &lt;
//         </button>
        
//         <div className="slider-container" style={{ transform: `translateX(-${currentIndex * (100 - 20)}px)` }}>
//           {cards.map((card, index) => (
//             <div
//               key={card.id}
//               className={`card ${index === currentIndex ? 'active' : ''}`}
//             >
//               <h3>{card.title}</h3>
//               <p>{card.content}</p>
//             </div>
//           ))}
//         </div>
//         <button className="slider-button next" onClick={nextSlide}>
//           &gt;
//         </button>
//       </div>
//     );
//   };
  
//   export default CardSlider;


// import React, { useState } from 'react';
// import '../styles/ResearchSlider.css';

// const CardSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const cards = [
//     { id: 1, title: 'Card 1', content: 'Content for Card 1' },
//     { id: 2, title: 'Card 2', content: 'Content for Card 2' },
//     { id: 3, title: 'Card 3', content: 'Content for Card 3' },
//     { id: 4, title: 'Card 4', content: 'Content for Card 4' },
//     { id: 5, title: 'Card 5', content: 'Content for Card 5' },
//     { id: 6, title: 'Card 6', content: 'Content for Card 5' }
//   ];

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
//   };

//   return (
//     <div className="card-slider">
//       {/* <button className="slider-button prev" onClick={prevSlide}>
//         &lt;
//       </button> */}
//       <div
//         className="slider-container"
//         style={{ transform: `translateX(-${currentIndex * (100 - 20)}px)` }}
//       >
//         {cards.map((card, index) => (
//           <div
//             key={card.id}
//             className={`card ${index === currentIndex ? 'active' : ''}`}
//           >
//             <h3>{card.title}</h3>
//             <p>{card.content}</p>
//           </div>
//         ))}
//       </div>
//       <button className="slider-button next" onClick={nextSlide}>
//         &gt;
//       </button>
//     </div>
//   );
// };

// export default CardSlider;

import React, { useState } from 'react';
import '../styles/ResearchSlider.css';

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    { id: 1, title: 'Introduction to Machine Learning', description: 'This video provides an introductory overview of machine learning, explaining key concepts and algorithms used in the field.', link: 'https://www.youtube.com/watch?v=ukzFI9rgwfU' },
    { id: 2, title: 'The Basics of Quantum Computing', description: 'Learn the fundamentals of quantum computing, including quantum bits and superposition. This video simplifies complex topics for beginners.', link: 'https://www.youtube.com/watch?v=6gkK5dxctKQ' },
    { id: 3, title: 'Understanding Neural Networks', description: 'A comprehensive introduction to neural networks, covering how they work, their architecture, and their applications in various fields.', link: 'https://www.youtube.com/watch?v=aircAruvnKk' },
    { id: 4, title: 'A Survey on Machine Learning Algorithms for Big Data', description: 'This paper surveys various machine learning algorithms designed to handle big data. It provides insights into their effectiveness and use cases.', link: 'https://arxiv.org/abs/1704.07437' },
    { id: 5, title: 'Deep Learning for Computer Vision: A Brief Review', description: 'A review of deep learning techniques applied to computer vision tasks. It highlights advancements and challenges in the field.', link: 'https://arxiv.org/abs/1609.07685' },
    { id: 6, title: 'Quantum Computing: Progress and Prospects', description: 'This paper discusses recent progress in quantum computing, including theoretical advancements and practical implementations.', link: 'https://arxiv.org/abs/1903.05046' }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const handleCardClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="card-slider">
      <div
        className="slider-container"
        style={{ transform: `translateX(-${currentIndex * (100 - 20)}px)` }}
      >
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`card ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleCardClick(card.link)}
          >
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
      <button className="slider-button prev" onClick={prevSlide}>
        &lt;
      </button>
      <button className="slider-button next" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default CardSlider;
