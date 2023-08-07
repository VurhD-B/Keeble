'use client';
import {motion} from 'framer-motion';
import { textContainer, textVariant2 } from '@utils/motion';

const TypingText = ({title, textStyles}) => {
    return (
        <motion.p
            variants={textContainer}
            className='font-extrabold font-pacifico text-3xl text-text-white text-center text-[68px]'
        >
            {Array.from(title).map((letter, index) => {
                return(
                    <motion.span
                        variants={textVariant2}
                        key={index}
                    >
                        {letter}
                    </motion.span>
                )
            })}
        </motion.p>
    )
}

export default TypingText