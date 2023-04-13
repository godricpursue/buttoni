import React from 'react'

import { Button } from 'buttoni'
import 'buttoni/dist/index.css'

const App = () => {
  return (
    <div className='app'>
      <div className='btn-wrapper'>
        <Button>Default Button</Button>
        <Button type='primary'>Primary Button</Button>
        <Button type='dashed'>Dashed Button</Button>
        <Button type='text'>Text Button</Button>
        <Button type='link'>Link Button</Button>
      </div>
    </div>
  )
}

export default App
