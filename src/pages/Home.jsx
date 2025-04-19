import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { useSpring, a } from "@react-spring/three";

import sakura from "../assets/sakura.mp3";
import { HomeInfo, Loader } from "../components";
import { soundoff, soundon } from "../assets/icons";
import { Island } from "../models/Island";
import { Bird, Plane, Sky } from "../models";

const AnimatedIsland = a(Island);


const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  const [isDragging, setIsDragging] = useState(false);
  const [previousMouseX, setPreviousMouseX] = useState(null);
  const [rotationY, setRotationY] = useState(1.13);

  // Handle background music
  useEffect(() => {
    const audio = audioRef.current;

    if (isPlayingMusic) {
      audio.play();
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [isPlayingMusic]);

  const toggleMusic = () => {
    setIsPlayingMusic((prev) => !prev);
  };

  // Responsiveness
  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1, 0]; // Move plane higher (Y-axis)
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -3, -4]; // Move plane higher (Y-axis)
    }
    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;
    if (window.innerWidth < 768) {
      screenScale = [9, 9, 9]; // Lebih besar dari 7.5
      screenPosition = [0, -6, -100]; // Sedikit naik di sumbu Y
    } else {
      screenScale = [13, 13, 13]; // Lebih besar dari 11
      screenPosition = [0, -5, -100]; // Sedikit naik di sumbu Y
    }
    return [screenScale, screenPosition];
  };
  const [islandScale, islandPosition] = adjustIslandForScreenSize();
  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();

  const springProps = useSpring({
    rotation: [0.1, rotationY, 0],
    config: { mass: 1, tension: 170, friction: 26 },
  });

  // Mouse rotation handlers
  const handlePointerDown = (e) => {
    setIsDragging(true);
    setPreviousMouseX(e.clientX);
    setIsRotating(true);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    setIsRotating(false);
    setPreviousMouseX(null);
  };

  const handlePointerMove = (e) => {
    if (isDragging && previousMouseX !== null) {
      const deltaX = e.clientX - previousMouseX;
      setPreviousMouseX(e.clientX);
      setRotationY((prev) => prev + deltaX * 0.005);
    }
  };

  // Calculate current stage from rotation
  useEffect(() => {
    const stageBounds = [
      [0.81, 1.50],  // stage 1
      [1.50, 2.20],  // stage 2
      [2.20, 2.71],  // stage 3
      [2.71, 3.26],  // stage 4
      [3.26, 3.77],  // stage 5
      [3.77, 4.22],  // stage 6
      [4.26, 4.91],  // stage 7
      [4.91, 5.45],  // stage 8
      [5.45, 6.01],  // stage 9
      [6.01, 6.51],  // stage 10
      [6.51, 7.07],  // stage 11 - utama
    ];
  
    const minRotation = 0.81;
    const maxRotation = 7.07;
    const range = maxRotation - minRotation;
  
    // Fungsi modulus positif untuk wrapping
    const mod = (n, m) => ((n % m) + m) % m;
  
    const wrappedRotationY = mod(rotationY - minRotation, range) + minRotation;
  
    let stageIndex = 0;
    for (let i = 0; i < stageBounds.length; i++) {
      const [start, end] = stageBounds[i];
      if (wrappedRotationY >= start && wrappedRotationY < end) {
        stageIndex = i;
        break;
      }
    }
  
    setCurrentStage(stageIndex + 1);
  }, [rotationY]);

  return (
    <section className='w-full h-screen relative'>
      {/* Info Text */}
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      {/* Canvas */}
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onPointerMove={handlePointerMove}
      >
        <Suspense fallback={<Loader />}>
          {/* Lighting */}
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight position={[0, 50, 10]} angle={0.15} penumbra={1} intensity={2} />
          <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={1} />

          {/* Models */}
          
          <Sky isRotating={isRotating} />
          <AnimatedIsland
            position={islandPosition}
            scale={islandScale}
            rotation={springProps.rotation}
          />

        </Suspense>
      </Canvas>

      {/* Music Toggle Button */}
      <div className='absolute bottom-2 left-2 z-10'>
        <img
          src={isPlayingMusic ? soundon : soundoff}
          alt='Toggle background music'
          aria-label='Toggle background music'
          onClick={toggleMusic}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>
    </section>
  );
};

export default Home;
