import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-5xl leading-[30px]"
      >
        Hi, I’m Lovkesh Barowalia, an aspiring software developer and a pre-final year B.Tech student at Dr. B.R. Ambedkar National Institute of Technology, Jalandhar. With a strong foundation in web development and problem-solving, I am passionate about building efficient, user-friendly solutions.
        <br />
        I specialize in languages like C++, JavaScript, and SQL, with a keen interest in progressive web apps, DevOps, and scalable systems. Committed to continuous learning and collaboration, I bring diligence, adaptability, and strategic thinking to every endeavor. Explore my portfolio to discover my journey and skills in crafting impactful digital experiences.
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about")
