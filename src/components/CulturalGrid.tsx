"use client"
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { FaRunning, FaMusic, FaPaintBrush, FaCamera, FaTheaterMasks } from "react-icons/fa";
import { motion } from "framer-motion"
const Grid = () => {
  return (
    <section className="pt-10 ">
      <div className="max-w-[100vw] md:max-w-2xl lg:max-w-[60vw]">
          <motion.h1 initial={{
            opacity: 0,
            y: 0,
          }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 3,
            }}
            className="md:text-4xl text-3xl lg:text-6xl font-bold text-center text-yellow-500 z-20">
            Cultural Events
          </motion.h1>
          </div>
      <BentoGrid className="w-full py-20  ">
        
        <BentoGridItem
          title="Dance"
          description="Feel the rhythm, express your soul, and inspire through the art of movement. "
          icon={<FaRunning className="text-2xl text-purple-500" />}
          img="/images/cultural/onthebeat.png"
          imgAlt="on the beat"
        />
        <BentoGridItem
          title="Music"
          description="Discover the magic of melodies and harmonies. "
          icon={<FaMusic className="text-2xl text-purple-500" />}
          img="/images/cultural/octaves.png"
          imgAlt="octaves"
        />
        <BentoGridItem
          title="Arts"
          description= "Unleash your creativity and turn imagination into masterpieces."
          icon={<FaPaintBrush className="text-2xl text-purple-500" />}
          img="/images/cultural/palette.png"
          imgAlt="palette"
        />
        <BentoGridItem
          title="Photography"
          description="Capture life’s most beautiful moments and tell stories through your lens."
          icon={<FaCamera className="text-2xl text-purple-500" />}
          img="/images/cultural/pixels.png"
          imgAlt="pixels"
        />
        <BentoGridItem
          title="Dramatics"
          description="Step into the spotlight and bring characters to life."
          icon={<FaTheaterMasks className="text-2xl text-purple-500" />}
          img="/images/cultural/dramatics.png"
          imgAlt="dramatix"
        />
        <BentoGridItem
          title="Story Lines"
          description="Step into the spotlight and bring characters to life."
          icon={<FaTheaterMasks className="text-2xl text-purple-500" />}
          img="/images/cultural/dramatics.png"
          imgAlt="dramatix"
        />
      </BentoGrid>
    </section>
  );
};

export default Grid;
