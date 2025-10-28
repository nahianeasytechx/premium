import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import verticalImg from "../../assets/logo/vertical scroll image.jpg"

export default function ScrollTriggeredSingle({ className = "", scrollHeight = "200vh" }) {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Height grows from 0% to 100% as you scroll
  const height = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  // Array of your images - add as many as you want
  const images = [
verticalImg,
verticalImg,
verticalImg,
verticalImg,
verticalImg,
verticalImg,
verticalImg,
  ];

  return (
    <div 
      ref={containerRef} 
      style={{...container, "--scroll-height": scrollHeight}} 
      className={className}
    >
      <motion.div
        style={{
          ...imageWrapper,
          height
        }}
      >
        <div style={imageContainer}>
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Building ${index + 1}`}
              style={imageStyle}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

const container = {
  width: "100%",
  maxWidth: "443px",
  height: "var(--scroll-height, 200vh)",
  position: "relative",
};

const imageWrapper = {
  width: "100%",
  position: "sticky",
  top: 0,
  overflow: "hidden",
  backgroundColor: "#172554",
};

const imageContainer = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "0px",
};

const imageStyle = {
  width: "100%",
  height: "auto",
  objectFit: "cover",
  display: "block",
};