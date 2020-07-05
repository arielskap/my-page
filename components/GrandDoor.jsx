import { useState, useEffect } from 'react'
import { useSpring, animated, interpolate } from 'react-spring'
import styles from '../public/assets/styles/grandDoor.module.css'

const GrandDoor = () => {
  const [closeDoor, setCloseDoor] = useState(false)
  const [ openDoor, setOpenDoor ] = useState(false)
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

  if (closeDoor) {
    return null
  }

  return (
    <div className='GrandDoor absolute top-0 left-0 h-screen w-screen z-10 overflow-hidden flex justify-center items-center'>
      <animated.div className={`top-0 left-0 absolute w-screen h-screen ${styles.doorTop}`} style={{transform: translateYBottom.interpolate((translateYBottom) => `translateY(${translateYBottom})`)}} />
      <animated.div className={'absolute w-screen h-screen flex justify-center items-center z-30'} style={{ transform: interpolate([rotate, translateYTop], (rotate, translateYTop) => `rotate(${rotate}) translateY(${translateYTop})`) }}>
        <div className={`w-20 h-20 rounded-full flex justify-center items-center ${styles.circle}`}></div>
        <animated.button type='button' className={`w-20 h-20 absolute font-bold text-white rounded-full duration-500 ${styles.buttonCircle}`} onClick={() => setOpenDoor(true)} style={{ opacity: opacity.interpolate((opacity) => opacity) }}>Touch</animated.button>
      </animated.div>
      <animated.div className={'absolute w-screen h-screen flex justify-center items-center z-20'} style={{ transform: interpolate([rotate, translateYBottom], (rotate, translateYBottom) => `rotate(${rotate}) translateY(${translateYBottom})`) }} >
        <div className={`w-20 h-20 bg-blue-700 rounded-full flex justify-center items-center ${styles.circleReverse}`} />
      </animated.div>
      <animated.div className={`absolute bg-white bottom-0 w-screen h-screen ${styles.doorBottom}`} style={{transform: translateYTop.interpolate((translateYTop) => `translateY(${translateYTop})`)}} />
  </div>
  )
}

export default GrandDoor
