// import React, { useState } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { Physics, useBox } from '@react-three/cannon';
// import { Text3D } from '@react-three/drei';
// import { MeshStandardMaterial } from 'three';

// const FallingLetter = ({ position, letter, onClick }) => {
//   const [ref] = useBox(() => ({
//     mass: 1,
//     position,
//     args: [1, 1, 1],
//   }));

//   const material = new MeshStandardMaterial({ color: "white" });

//   return (
//     <Text3D ref={ref} font="/fonts/helvetiker_regular.typeface.json" size={1} onClick={onClick} material={material}>
//   {letter}
// </Text3D>
//   );
// };

// const FallingObject = ({ model, position, color, onClick }) => {
//   const [ref] = useBox(() => ({
//     mass: 2,
//     position,
//     args: [1, 1, 1],
//   }));

//   return (
//     <mesh ref={ref} position={position} onClick={onClick}>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={color} />
//     </mesh>
//   );
// };

// const ThreeScene = () => {
//   const [arranged, setArranged] = useState(false);

//   const handleClick = () => {
//     setArranged(true);
//   };

//   const positions = arranged
//     ? [[-4, 0, 0], [-3, 0, 0], [-2, 0, 0], [-1, 0, 0], [0, 0, 0], [1, 0, 0], [2, 0, 0], [3, 0, 0]]
//     : new Array(8).fill().map(() => [Math.random() * 10 - 5, Math.random() * 5 + 10, Math.random() * 10 - 5]);

//   const letters = 'ENVISIONLEARNIMAGINEEXECUTE'.split('');
//   const objects = [
//     { model: 'apple', color: 'red', position: [0, 10, 0] },
//     { model: 'globe', color: 'blue', position: [2, 10, 2] },
//     { model: 'play', color: 'green', position: [-2, 10, -2] },
//   ];

//   return (
//     <Canvas>
//       <ambientLight />
//       <pointLight position={[10, 10, 10]} />
//       <Physics>
//         {letters.map((letter, index) => (
//           <FallingLetter key={index} position={positions[index]} letter={letter} onClick={handleClick} />
//         ))}
//         {objects.map((obj, index) => (
//           <FallingObject key={index} {...obj} onClick={handleClick} />
//         ))}
//         <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
//           <planeGeometry args={[100, 100]} />
//           <meshStandardMaterial color="lightgray" />
//         </mesh>
//       </Physics>
//     </Canvas>
//   );
// };

// export default ThreeScene;


// import React from 'react';
// import { Canvas } from '@react-three/fiber';
// import { Physics, useBox } from '@react-three/cannon';
// import { Text3D, OrbitControls } from '@react-three/drei';
// import * as THREE from 'three';

// // Component for letters
// const GroundLetter = ({ position, letter, onClick }) => {
//   const [ref] = useBox(() => ({
//     mass: 0,
//     position,
//     args: [1, 1, 1],
//   }));

//   return (
//     <Text3D
//       ref={ref}
//       font="/fonts/helvetiker_regular.typeface.json"
//       size={1}
//       onClick={onClick}
//     >
//       {letter}
//       <meshStandardMaterial attach="material" color="white" />
//     </Text3D>
//   );
// };

// // Component for 3D objects (apple, play button, globe)
// const GroundObject = ({ model, position, color, onClick }) => {
//   const [ref] = useBox(() => ({
//     mass: 0,
//     position,
//     args: [1, 1, 1],
//   }));

//   return (
//     <mesh ref={ref} position={position} onClick={onClick}>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial attach="material" color={color} />
//     </mesh>
//   );
// };

// // Main scene component
// const Scene = () => {
//   // Positions for letters and objects
//   const letterPositions = [
//     [-4, 0.5, 0], [-3, 0.5, 0], [-2, 0.5, 0], [-1, 0.5, 0], [0, 0.5, 0],
//     [1, 0.5, 0], [2, 0.5, 0], [3, 0.5, 0]
//   ];

//   const objectPositions = [
//     { model: 'apple', color: 'red', position: [0, 0.5, 0] },
//     { model: 'globe', color: 'blue', position: [2, 0.5, 2] },
//     { model: 'play', color: 'green', position: [-2, 0.5, -2] },
//   ];

//   return (
//     <Canvas
//       camera={{ position: [0, 5, 10], fov: 60 }}
//       style={{ height: '100vh', width: '100vw' }}
//     >
//       <ambientLight intensity={0.5} />
//       <pointLight position={[10, 10, 10]} intensity={1} />
//       <OrbitControls />
//       <Physics>
//         {letterPositions.map((pos, index) => (
//           <GroundLetter key={index} position={pos} letter={'A'} />
//         ))}
//         {objectPositions.map((obj, index) => (
//           <GroundObject key={index} {...obj} />
//         ))}
//         <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
//           <planeGeometry args={[100, 100]} />
//           <meshStandardMaterial attach="material" color="lightgray" />
//         </mesh>
//       </Physics>
//     </Canvas>
//   );
// };

// export default Scene;


// import React from 'react';
// import { Canvas } from '@react-three/fiber';
// import { Physics, useBox } from '@react-three/cannon';
// import { Text3D, OrbitControls } from '@react-three/drei';

// // Ground component
// const Ground = () => {
//   const [ref] = useBox(() => ({
//     mass: 0, // Static ground
//     position: [0, -0.5, 0],
//     args: [100, 1, 100], // Size of the ground
//   }));

//   return (
//     <mesh ref={ref} receiveShadow>
//       <boxGeometry args={[100, 1, 100]} />
//       <meshStandardMaterial color="lightgray" />
//     </mesh>
//   );
// };

// // Draggable letter component
// const DraggableLetter = ({ letter, position }) => {
//   const [ref, api] = useBox(() => ({
//     mass: 1,
//     position,
//     args: [2, 2, 1],
//   }));

//   return (
//     <Text3D
//       ref={ref}
//       font="/fonts/helvetiker_regular.typeface.json"
//       size={2}
//       height={0.5}
//       onPointerDown={(event) => api.mass.set(0)} // Disable physics while dragging
//       onPointerUp={(event) => api.mass.set(1)}   // Enable physics after dragging
//       onPointerMove={(event) => {
//         if (event.buttons === 1) { // Only move if left mouse button is held
//           api.position.set(event.point.x, 1, event.point.z);
//         }
//       }}
//     >
//       {letter}
//       <meshPhongMaterial attach="material" color="orange" shininess={100} />
//     </Text3D>
//   );
// };

// // Component to render multiple letters
// const LettersWithPhysics = () => {
//   const letters = "ABCDEFGH".split("");

//   return letters.map((letter, index) => (
//     <DraggableLetter
//       key={index}
//       letter={letter}
//       position={[
//         Math.random() * 10 - 5,
//         2, // Start slightly above the ground
//         Math.random() * 10 - 5
//       ]}
//     />
//   ));
// };

// // Main scene component
// const Scene = () => {
//   return (
//     <Canvas
//       camera={{ position: [0, 10, 20], fov: 60 }}
//       style={{ height: '100vh', width: '100vw' }}
//     >
//       <ambientLight intensity={0.5} />
//       <pointLight position={[10, 10, 10]} intensity={1.5} />
//       <OrbitControls />
//       <Physics>
//         <Ground />
//         <LettersWithPhysics />
//       </Physics>
//     </Canvas>
//   );
// };

// export default Scene;

