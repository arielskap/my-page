import { useEffect, useState, useRef } from 'react'
import { useSpring, animated } from 'react-spring'
import styles from '../public/assets/styles/index.module.css'
import Layout from '../components/Layout'
import RadialChart from '../components/RadialChart'
import TypedText from '../components/Typed'
import GrandDoor from '../components/GrandDoor'

const Index = () => {
  const [showSkills, setShowSkills] = useState(false)
  const [centerBoxState, setCenterBoxState] = useSpring(() => {
    return {
      maxHeight: `${1000}px`
    }
  })
  const [changeContent, setChangeContent] = useState(false)
  const firstEntry = useRef(false)

  useEffect(() => {
    if (firstEntry.current) {
      setCenterBoxState({
        config: { mass: 30, tension: 280, friction: 120 },
        to: async (next) => {
          await next({ maxHeight: '0px' })
          setShowSkills(!showSkills)
          await next({ maxHeight: '1000px' })
        },
        from: { maxHeight: '1000px' }
      })
    } else {
      firstEntry.current = true
    }
  }, [changeContent])

  console.log(centerBoxState)
  return (
    <Layout title='About Me'>
      <GrandDoor />
      <div className={`${styles.bgEarth} bg-no-repeat bg-fixed min-h-screen flex justify-center items-center text-white`}>
        <div className={`fixed top-0 left-0 w-full bg-black ${styles.redBox} h-8`}>
          <div className='relative w-full h-full'>
            <div className={`absolute ${styles.topBox} bg-black w-48`}>
              <p className='text-center'>React Front-End Developer</p>
            </div>
          </div>
        </div>
        <animated.div style={centerBoxState} id='centerBox' className={`${styles.redBox} relative bg-black ${styles.bgOpacity90} rounded-lg max-w-lg mx-6 overflow-hidden`}>
          <div className='m-6'>
            <div>
              {showSkills ? (
              <div>
                <RadialChart />
              </div>
              ): (
                <>
                  <img className={`${styles.boxImg} object-contain float-left w-20 mr-4 mt-2 rounded-lg`} src='/assets/static/iam.jpg' alt='Soy yo' />
                  <div>
                    <TypedText />
                  </div>
                </>
              )}
            </div>
            <div className='text-right'>
              <div>
                <button type='button' className='border-2 border-red-700 py-1 px-3 rounded-lg' onClick={()=> setChangeContent(!changeContent)}>{showSkills ? 'Objetive' : 'Skills'}</button>
              </div>
            </div>
          </div>
        </animated.div>
        <div className={`fixed bottom-0 left-0 w-full grid grid-cols-2 divide-x divide-red-800 bg-black h-16 ${styles.redBox}`}>
          <button type='button'>Proyects</button>
          <button type='button'>Redes</button>
        </div>
      </div>
    </Layout>
  )
}

export default Index;
