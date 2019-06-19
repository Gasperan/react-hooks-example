import React, {useState, useEffect} from 'react'
import Card from './Card'

function App() {
  const [value, setValue] = useState('')
  const [width, setWidth] = useState(window.innerWidth)

  const handleOnchange = event => {
    setValue(event.target.value)
  }

  useEffect(()=> {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })

  return (
    <Card>
      <span>
        Width: {width}
      </span>
      <input
        value={value}
        onChange={handleOnchange}
      />  
    </Card>
  )
}

export default App;
