'use client';
import { useSession } from "next-auth/react";
import Link from "next/link";
import { motion } from 'framer-motion';
import { staggerContainer } from "@utils/motion";
import TypingText from "@components/TypingText";



export default function Home() {
  const { data:session } = useSession();
  const backgroundImageUrl = 'https://keeble-sample.s3.ap-southeast-1.amazonaws.com/anish-de-xFzG0WlstIk-unsplash.jpg';
  return (
    <section
      className="flex flex-col justify-center items-center gap-4 py-10"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center 25%',
        minHeight: '100vh',
        position: 'relative', 
      }}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="m-auto mt-44"
      >
        <TypingText title="Your Keeb journey starts here.." textStyles="text-center" />
      </motion.div>

      {/* Container to center the button */}
      <div
        style={{
          position: 'absolute', // Set the position of the container to absolute
          left: '50%', // Center horizontally
          bottom: '35%', // Shift the container 20% from the bottom
          transform: 'translateX(-50%)', // Center the container using translateX
        }}
      >
        <Link href="/guide">
          <button className="bigfancy_button">Get Started</button>
        </Link>
      </div>
    </section>
  );
}