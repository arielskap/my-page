import { useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import {easeCubic } from 'd3-ease'
import Typed from 'typed.js'
import styles from '../public/assets/styles/index.module.css'


export default () => {
  const translateYTop = useSpring({
    delay: 3000,
    config: {duration: 3000, easing: easeCubic},
    to: {transform: 'translateY(-100%)'},
    from: { transform: 'translateY(0%)' },
  })
  const translateYBottom = useSpring({
    delay: 3000,
    config: {duration: 3000, easing: easeCubic},
    to: {transform: 'translateY(100%)'},
    from: { transform: 'translateY(0%)' },
  })
  useEffect(() => {
    const txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione repudiandae quas atque, culpa tenetur magni repellendus eum illo rerum autem, maxime reiciendis vitae architecto aliquid laudantium voluptas perferendis eveniet quam!Delectus similique nemo beatae iusto dolores facilis possimus suscipit nesciunt natus dolorum optio ratione veritatis, soluta iste officiis fugit, tempore dolorem odio in? Ipsam est provident numquam quae, enim cupiditate.'
    let typed = new Typed('#box-text', {
      strings: ['loading data...',txt],
      typeSpeed: 10
    });
  }, [])
  return (
    <div>
      <div className='absolute top-0 left-0 h-screen w-screen z-10'>
        <animated.div className={`relative bg-red-700 w-screen h-screen ${styles.doorTop}`} style={translateYTop} />
        <animated.div className={`absolute bg-white bottom-0 w-screen h-screen ${styles.doorBottom}`} style={translateYBottom}/>
      </div>
      <div className={`${styles.bgEarth} bg-no-repeat bg-fixed min-h-screen flex justify-center items-center`}>
        <div className={`fixed top-0 left-0 w-full bg-black ${styles.redBox} h-8`}>
          <div className='relative w-full h-full'>
            <div className={`absolute ${styles.topBox} bg-black text-white w-24`}>
              <p className='text-center'>helloWorld.com</p>
            </div>
          </div>
        </div>
        <div className={`${styles.redBox} relative bg-black ${styles.bgOpacity90} rounded-lg p-6 max-w-lg mx-6`}>
          <img className={`${styles.boxImg} object-contain float-left w-20 mr-4 mt-2 rounded-lg`} src='/assets/static/iam.jpg' alt='' />
          <div>
            <span id='box-text' className={`${styles.boxText} text-lg text-white`}></span>
          </div>
        </div>
        <div className={`fixed bottom-0 left-0 w-full grid grid-cols-3 divide-x divide-red-800 bg-black text-white h-16 ${styles.redBox}`}>
          <button type='button'>Proyects</button>
          <button type='button'>Github</button>
          <button type='button'>Lenkedin</button>
        </div>
      </div>
    </div>
  )
}
