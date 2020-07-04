import { useEffect, useState } from 'react'
import { useSpring, animated, interpolate } from 'react-spring'
import styles from '../public/assets/styles/index.module.css'
import Layout from '../components/Layout'
import RadialChart from '../components/RadialChart'
import TypedText from '../components/Typed'

export default () => {
  const [ openDoor, setOpenDoor ] = useState(false)
  const [closeDoor, setCloseDoor] = useState(false)
  const [showSkills, setShowSkills] = useState(false)
  const { rotate, translateYTop, translateYBottom, opacity } = useSpring({
    config: { mass: 30, tension: 280, friction: 120 },
    to: async (next) => {
      if (openDoor) {
        await next({ rotate: '180deg', opacity: 0 })
        await next({ translateYTop: '100%', translateYBottom: '-100%' })
      }
    },
    from: { rotate: '0deg', translateYTop: '0%', translateYBottom: '0%', opacity: 1 },
    onRest: () => {
      setCloseDoor(true)
      sessionStorage.setItem('apertura', 'true')
    }
  })

  useEffect(() => {
    setCloseDoor(sessionStorage.getItem('apertura'))
  }, [])

  return (
    <Layout title='About Me'>
      {!closeDoor && (
        <div className='GrandDoor absolute top-0 left-0 h-screen w-screen z-10 overflow-hidden flex justify-center items-center'>
          <animated.div className={`top-0 left-0 absolute w-screen h-screen ${styles.doorTop}`} style={{transform: translateYBottom.interpolate((translateYBottom) => `translateY(${translateYBottom})`)}} />
          <animated.div className={'absolute w-screen h-screen flex justify-center items-center z-30'} style={{ transform: interpolate([rotate, translateYTop], (rotate, translateYTop) => `rotate(${rotate}) translateY(${translateYTop})`) }}>
            <div className={`w-20 h-20 rounded-full flex justify-center items-center ${styles.circle}`}></div>
            <animated.button type='button' className='w-20 h-20 absolute font-bold text-white rounded-full duration-500 transform hover:scale-110' onClick={() => setOpenDoor(true)} style={{ opacity: opacity.interpolate((opacity) => opacity) }}>Touch</animated.button>
          </animated.div>
          <animated.div className={'absolute w-screen h-screen flex justify-center items-center z-20'} style={{ transform: interpolate([rotate, translateYBottom], (rotate, translateYBottom) => `rotate(${rotate}) translateY(${translateYBottom})`) }} >
            <div className={`w-20 h-20 bg-blue-700 rounded-full flex justify-center items-center ${styles.circleReverse}`} />
          </animated.div>
          <animated.div className={`absolute bg-white bottom-0 w-screen h-screen ${styles.doorBottom}`} style={{transform: translateYTop.interpolate((translateYTop) => `translateY(${translateYTop})`)}} />
        </div>
      )}
      <div className={`${styles.bgEarth} bg-no-repeat bg-fixed min-h-screen flex justify-center items-center text-white`}>
        <div className={`fixed top-0 left-0 w-full bg-black ${styles.redBox} h-8`}>
          <div className='relative w-full h-full'>
            <div className={`absolute ${styles.topBox} bg-black w-48`}>
              <p className='text-center'>React Front-End Developer</p>
            </div>
          </div>
        </div>
        <div className={`${styles.redBox} relative bg-black ${styles.bgOpacity90} rounded-lg p-6 max-w-lg mx-6 transition-all ease-in duration-300`}>
          <div>
            {showSkills ? (
            <div>
              <RadialChart />
            </div>
            ): (
              <>
                <img className={`${styles.boxImg} object-contain float-left w-20 mr-4 mt-2 rounded-lg`} src='/assets/static/iam.jpg' alt='Soy yo' />
                <div>
                  <TypedText showSkills={showSkills} />
                </div>
              </>
            )}
          </div>
          <div className='text-right'>
            <div>
              <button type='button' className='border-2 border-red-700 py-1 px-3 rounded-lg' onClick={() => setShowSkills(!showSkills)}>{showSkills ? 'Objetive' : 'Skills'}</button>
            </div>
          </div>
        </div>
        <div className={`fixed bottom-0 left-0 w-full grid grid-cols-2 divide-x divide-red-800 bg-black h-16 ${styles.redBox}`}>
          <button type='button'>Proyects</button>
          <button type='button'>Redes</button>
        </div>
      </div>
    </Layout>
  )
}
