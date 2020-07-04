import { useEffect } from 'react';
import Typed from 'typed.js'
import PropTypes from 'prop-types';

const TypedText = ({showSkills}) => {
  useEffect(() => {
    let typed
    const txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione repudiandae quas atque, culpa tenetur magni repellendus eum illo rerum autem, maxime reiciendis vitae architecto aliquid laudantium voluptas perferendis eveniet quam!Delectus similique nemo beatae iusto dolores facilis possimus suscipit nesciunt natus dolorum optio ratione veritatis, soluta iste officiis fugit, tempore dolorem odio in? Ipsam est provident numquam quae, enim cupiditate.'
    if (!showSkills) {
      typed = new Typed('#box-text', {
        strings: ['loading data...', txt],
        typeSpeed: 10
      });
    }
    return (() => {
      typed.destroy();
    })
  }, [showSkills])
  return (
    <span id='box-text' />
  )
}

TypedText.propTypes = {
  showSkills: PropTypes.bool.isRequired
}

export default TypedText
