import React, { useRef, useState, useEffect } from 'react'
import styles from './drag-vertical--motion.module.scss'

const DragVertical = (props) => {
  const iconRef = useRef(null)
  const [isAnimating, setIsAnimating] = useState(props.isAnimating)

  const iconStyles = {
    width: props.size,
    height: props.size
  }

  useEffect(() => {
    setIsAnimating(props.isAnimating)
  }, [props.isAnimating])

  const shouldAnimate = isAnimating ? styles.isAnimating : ''

  return (
    <div ref={iconRef} className={`${shouldAnimate}`}>
      <svg viewBox='0 0 32 32' className='drag-vertical' style={iconStyles}>
        <title>drag--vertical</title>
        <polygon
          className={styles.DragVerticalTop}
          points='4 20 15 20 15 26.17 12.41 23.59 11 25 16 30 21 25 19.59 23.59 17 26.17 17 20 28 20 28 18 4 18 4 20'
        />
        <polygon
          className={styles.DragVerticalBottom}
          points='11 7 12.41 8.41 15 5.83 15 12 4 12 4 14 28 14 28 12 17 12 17 5.83 19.59 8.41 21 7 16 2 11 7'
        />
      </svg>
    </div>
  )
}

export default DragVertical
