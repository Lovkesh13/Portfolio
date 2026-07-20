import { styles } from '../styles'
import { SpacemanCanvas } from './canvas'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] z-20 max-w-7xl mx-auto flex flex-row items-start gap-5 pointer-events-none`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#f47841]'/>
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-[#f47841] to-transparent'/>
        </div>

        <div className="max-w-xl">
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#e36b37]">Lovkesh</span></h1>
          <p className={`${styles.heroSubText} text-white-100`}>
          Software Engineer, passionate <br className='sm:block hidden'/> about how systems work and how <br className='sm:block hidden'/> data flows through systems, backend, and beyond.</p> 
        </div>

      </div>

      <div className="absolute inset-0 md:left-1/4 sm:left-[15%] left-0">
        <SpacemanCanvas />
      </div>

    </section>
  )
}

export default Hero