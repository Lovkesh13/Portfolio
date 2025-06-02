import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload, useGLTF, Float, useAnimations } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Spaceman = ({ scale, position }) => {
  const modelRef = useRef();
  const { scene, animations } = useGLTF("./spaceman/spaceman.glb");
  const { actions } = useAnimations(animations, modelRef);

  useEffect(() => {
    if (actions?.Idle) {
      actions.Idle.play();
    }
  }, [actions]);

  return (
    <Float 
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.3} 
      floatingRange={[0, 0.2]}
    >
      <mesh
        ref={modelRef}
        rotation={[-Math.PI / 18, -Math.PI - Math.PI / 6.5, -Math.PI / 18]} 
        position={position}
        scale={scale}
      >
        <hemisphereLight intensity={3} groundColor="black" />
        <pointLight intensity={1.2} />
        <spotLight 
          position={[-20, 50, 10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={1.2} 
          castShadow 
          shadow-mapSize={1024}
        />
        <primitive object={scene} />
      </mesh>
    </Float>
  );
};

const SpacemanCanvas = ({ scrollContainer }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const [scale, setScale] = useState([2.2, 2.2, 2.2]);
  const [position, setPosition] = useState([1, -15, -10]); 

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainer?.current) {
        const scrollTop = scrollContainer.current.scrollTop;
        const rotationXValue = scrollTop * -0.0004;
        const rotationYValue = scrollTop * -0.0005;
        setRotationX(rotationXValue);
        setRotationY(rotationYValue);
      }
    };

    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setScale([1.2, 1.2, 1.2]);
        setPosition([0.7, -2, 0.7]); 
        setIsMobile(true);
      } else if (width < 1024) {
        setScale([1.5, 1.5, 1.5]);
        setPosition([0.6, -2, 0.7]); 
        setIsMobile(false);
      } else if (width < 1280) {
        setScale([1.8, 1.8, 1.8]);
        setPosition([0.6, -2, 0.7]); 
        setIsMobile(false);
      } else if (width < 1536) {
        setScale([2, 2, 2]);
        setPosition([0.6, -2, 0.7]); 
        setIsMobile(false);
      } else {
        setScale([2.2, 2.2, 2.2]);
        setPosition([0.6, -2, 0.7]); 
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [scrollContainer]);

  return (
    <Canvas
      className="w-full h-screen bg-transparent z-10"
      frameloop='always'
      shadows
      camera={{ 
        position: [14, 12, 22],
        fov: 15,
        near: 0.1,
        far: 1000
      }}
      gl={{ 
        preserveDrawingBuffer: true,
        antialias: true
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <directionalLight position={[1, 1, 1]} intensity={2.2} />
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 5, 10]} intensity={2.2} />
        <spotLight position={[0, 50, 10]} angle={0.15} penumbra={1} intensity={2.2} />
        <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1.2} />
        
        <Spaceman
          isMobile={isMobile}
          rotationX={rotationX}
          rotationY={rotationY}
          scale={scale}
          position={position}
        />
      </Suspense>
      
      <Preload all />
    </Canvas>
  );
};

useGLTF.preload("./spaceman/spaceman.glb");

export default SpacemanCanvas;