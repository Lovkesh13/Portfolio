import { styles } from '../styles'
import { SpacemanCanvas } from './canvas'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#f47841]'/>
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-[#f47841] to-transparent'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#e36b37]">Lovkesh</span></h1>
          <p className={`${styles.heroSubText} text-white-100`}>
          A student developer passionate <br className='sm:block hidden'/> about blending tech and creativity <br className='sm:block hidden'/> to craft better digital experiences.</p> 
        </div>

      </div>

      <SpacemanCanvas />

    </section>
  )
}

export default Hero