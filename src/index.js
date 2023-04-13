import React from 'react'
import styles from './styles.module.css'
import propTypes from 'prop-types'

export const Button = (props) => {
  const { children, type } = props
  return (
    <button className={`${styles.button} ${styles[type]}`} {...props}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: propTypes.string.isRequired,
  type: propTypes.oneOf(['default', 'primary', 'dashed', 'text', 'link'])
    .isRequired
}

Button.defaultProps = {
  type: 'default'
}
