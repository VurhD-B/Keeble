'use client';
import { useSession } from "next-auth/react";
import Link from "next/link";
import { motion } from 'framer-motion';
import { staggerContainer } from "@utils/motion";
import TypingText from "@components/TypingText";


export default function Home() {
  const { data:session } = useSession();
  return (
    <section className="flex justify-center items-center gap-4 py-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25}}
        className="m-auto mt-44"
      >
        <TypingText title="Your Keeb journey starts here.." textStyles="text-center"/>
      </motion.div>
    </section>
  )
}
