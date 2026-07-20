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
        Hi, I’m Lovkesh Barowalia, a software developer who recently graduated with a B.Tech in Information Technology from Dr. B.R. Ambedkar National Institute of Technology, Jalandhar. With a strong foundation in full-stack and backend development, I enjoy building efficient, production-grade systems and am currently looking for software engineering, backend, and AI/ML roles.
        <br />
        I work across JavaScript, Python, SQL, and C++, with a growing focus on backend engineering, concurrency-safe systems, and scalable APIs, alongside hands-on experience in AI/ML through transfer learning and model fine-tuning. Committed to continuous learning and collaboration, I bring diligence, adaptability, and strategic thinking to every endeavor. Explore my portfolio to discover my journey and skills in crafting impactful digital experiences.
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about")
