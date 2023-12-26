import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import './styles.module.css'

export const ExampleComponent = ({ type }) => {
  const [text, setText] = useState('')

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  useEffect(() => {
    const capitalizedType = capitalizeFirstLetter(type)
    setText(`${capitalizedType}  Button`)
  }, [])

  return (
    <Button type={type} className='btn' style={{ margin: '10px' }}>
      {text}
    </Button>
  )
}
