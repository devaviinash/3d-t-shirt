import React, { useRef } from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

const Backdrop = () => {
   const shadows = useRef();
   return (
      <AccumulativeShadows
         ref={shadows}
         temporal
         frames={60} // Increase the number of frames for smoother temporal blending
         alphaTest={0.55}
         scale={4}
         resolution={1024} // Increase the resolution to make shadows less pixelated
         rotation={[Math.PI / 2, 0, 0]}
         position={[0, 0, -0.14]}
      >
         <RandomizedLight
            amount={4}
            radius={9}
            intensity={0.55}
            ambient={0.25}
            position={[5, 5, -10]}
         />
         <RandomizedLight
            amount={2}
            radius={5}
            intensity={0.25}
            ambient={0.55}
            position={[-5, 5, -9]}
         />
      </AccumulativeShadows>
   );
};

export default Backdrop;
