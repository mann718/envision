// import React from 'react'
// import Headers from '../component/Headers.js';
// import '../styles/Home.css'
// import ResearchSlider from '../component/ResearchSlider.js';

// const Home = () => {
//   return (
//     <>
//     <div className="home-container">
//         <Headers/> 
//         <div className="white-box">
//             {/* Adjust the height as needed */}
//         </div>

//         <div className="color-box">
//             {/* Adjust the height as needed */}
//             <div className='child1'></div>
//             <div className='child2'>
//               <div className='headercontent'>
//             <h1>What is Envision?</h1>
//             <p>Netflix is an American subscription video on-demand over-the-top streaming service. The service primarily distributes original and acquired films and television shows from various genres, and it is available internationally in multiple languages</p>
//             </div>
//             </div>

//         </div>
        
//         <div className="color-box">
//             {/* Adjust the height as needed */}
//             <ResearchSlider/>
//         </div>

//         <div className="color-box">
//             {/* Adjust the height as needed */}
        
//             <div className='child1'></div>
//             <div className='child2'>
//               <div className='headercontent'>
//             <h1>About Us !</h1>
//             <p>Netflix is an American subscription video on-demand over-the-top streaming service. The service primarily distributes original and acquired films and television shows from various genres, and it is available internationally in multiple languages</p>
//             </div>
//             </div>


       
//         <div className='child4'></div>
//         </div>
        
//     </div>
//    </>
//   )
// }

// export default Home


import React from 'react';
import Headers from '../component/Headers.js';
import '../styles/Home.css';
import ResearchSlider from '../component/ResearchSlider.js';
// import Homenvision from '../component/homenvision.png'
import Footer from '../component/footer.js';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <Headers /> 
        <div className="white-box">
          {/* Optional: Add more content or adjust the height as needed */}
          <a href="/register" className="clickable-area"></a>
        </div>

        <div className="color-box">
          <div className='child1'>
          <img src="https://i.pinimg.com/736x/f9/b7/d3/f9b7d3e089929430a8e5bedb8c973fbc.jpg" alt="Description" className='image' />
          {/* <img src="https://i.pinimg.com/736x/d3/97/c8/d397c815938384083a3862d447eb2d8c.jpg" alt="Description" className='image' /> */}
          </div>
          <div className='child2'>
            <div className='headercontent'>
              <h1>What is Envision?</h1>
              <p>An AI-driven educational video generator that takes user prompts and transforms them into engaging, effective learning videos. Our tool enhances educational content with visually captivating elements to boost understanding and retention.</p>
              <p>Click the above play button ▷ to generate a video </p>
            </div>
          </div>
        </div>
       
        <div className="color-box">
      
          <ResearchSlider />
        </div>

        <div className="color-box">
          <div className='child3'>
            <img src="https://i.pinimg.com/736x/d3/97/c8/d397c815938384083a3862d447eb2d8c.jpg" alt="Description" className='image2' />
          </div>
          <div className='child4'>
            <div className='headercontent'>
            <h1>About Us!</h1>
                <p>
                  We are building an AI-enhanced educational video generator with the belief that artificial intelligence can revolutionize the way we learn. Our mission is to transform user-provided prompts into engaging and visually rich educational content that enhances understanding and retention.
                </p>
                <p>
                   Our team of four is united by our commitment to leveraging AI for the betterment of education. Each member brings unique qualities—persistence, hard work, speed, and confidence—that drive our project forward. Supported by our college and faculty, who continually inspire and encourage us, we are dedicated to creating a tool that empowers learners and educators alike.
                </p>
            </div>
          </div>
          <div className='child4'></div>
         
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default Home;
