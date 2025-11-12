"use client";

import { motion } from "motion/react";
import { cn } from "../../lib/utils";
import { useEffect, useState } from "react";

export const ThreeDMarquee = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const chunkSize = Math.ceil(images.length / 4);
  const chunks = Array.from({ length: 4 }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return images.slice(start, start + chunkSize);
  });

  // 🔧 Configuración responsive mejorada
  const perspective = isMobile ? "500px" : "900px";
  const scale = isMobile ? 1.8 : 1.2;
  const translateZ = isMobile ? "0px" : "50px";
  const imageHeight = isMobile ? "160px" : "220px";
  const gap = isMobile ? "gap-0" : "gap-8"; // Reducido a gap-1 en móvil
  const rotateX = isMobile ? "20deg" : "40deg";
  const rotateZ = isMobile ? "-15deg" : "-35deg";

  return (
    <div
      className={cn(
        "relative overflow-hidden flex items-center justify-center w-full",
        isMobile ? "h-screen" : "h-[min(120vh,1200px)]",
        className
      )}
    >
      <div
        className="relative w-full h-full flex items-center justify-center"
        style={{
          perspective,
          perspectiveOrigin: "50% 50%",
        }}
      >
        <div
          style={{
            transform: `rotateX(${rotateX}) rotateZ(${rotateZ}) scale3d(${scale}, ${scale}, ${scale}) translateZ(${translateZ})`,
            transformOrigin: "center center",
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
          className={cn(
            "grid grid-cols-4 transform-3d",
            isMobile ? "w-[200%] h-auto" : "w-[130%] h-[130%]",
            gap
          )}
        >
          {chunks.map((subarray, colIndex) => (
            <motion.div
              key={colIndex}
              animate={{ y: colIndex % 2 === 0 ? 70 : -70 }}
              transition={{
                duration: colIndex % 2 === 0 ? 10 : 15,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className={cn("flex flex-col items-start", gap)}
            >
              <GridLineVertical
                className="-left-4"
                offset={isMobile ? "30px" : "80px"}
              />
              {subarray.map((image, imageIndex) => (
                <div className="relative w-full" key={imageIndex}>
                  <GridLineHorizontal 
                    className="-top-4" 
                    offset={isMobile ? "10px" : "20px"} 
                  />
                  <motion.img
                    whileHover={isMobile ? {} : { y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    src={image}
                    alt={`Tarjeta ${imageIndex + 1}`}
                    loading="lazy"
                    className="w-full rounded-lg object-contain ring ring-gray-950/5"
                    style={{
                      height: imageHeight,
                      maxWidth: "100%",
                    }}
                  />
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Líneas decorativas
const GridLineHorizontal = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => (
  <div
    style={
      {
        "--background": "#ffffff",
        "--color": "rgba(0, 0, 0, 0.2)",
        "--height": "1px",
        "--width": "5px",
        "--fade-stop": "90%",
        "--offset": offset || "200px",
        "--color-dark": "rgba(255, 255, 255, 0.2)",
        maskComposite: "exclude",
      } as React.CSSProperties
    }
    className={cn(
      "absolute left-[calc(var(--offset)/2*-1)] h-[var(--height)] w-[calc(100%+var(--offset))]",
      "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
      "[background-size:var(--width)_var(--height)]",
      "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
      "[mask-composite:exclude]",
      "z-30",
      "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
      className
    )}
  ></div>
);

const GridLineVertical = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => (
  <div
    style={
      {
        "--background": "#ffffff",
        "--color": "rgba(0, 0, 0, 0.2)",
        "--height": "5px",
        "--width": "1px",
        "--fade-stop": "90%",
        "--offset": offset || "150px",
        "--color-dark": "rgba(255, 255, 255, 0.2)",
        maskComposite: "exclude",
      } as React.CSSProperties
    }
    className={cn(
      "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]",
      "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
      "[background-size:var(--width)_var(--height)]",
      "[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
      "[mask-composite:exclude]",
      "z-30",
      "dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
      className
    )}
  ></div>
);
