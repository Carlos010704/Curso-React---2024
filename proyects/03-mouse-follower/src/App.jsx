import './App.css'
import { useEffect, useState } from 'react'

const FollowMouse = () => {
  const [enable, setEnable] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enable) {
      window.addEventListener('pointermove', handleMove)
    }

    // Limpiar el efecto.
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enable])

  return (
    <main>
      <div className='circle' style={{ transform: `translate(${position.x}px, ${position.y}px)` }}></div>
      <button onClick={() => setEnable(!enable)} >{enable ? 'Desactivar' : 'Activar'}</button>
    </main>
  )
}

function App() {
  return (
    <main>
      <FollowMouse />  
    </main>
  )
}

export default App
