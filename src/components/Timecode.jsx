import { useEffect, useState } from 'react'

// Renders a live HH:MM:SS:FF style timecode, like a camera's on-screen
// display. Purely ambient — reinforces "you are watching something live".
export default function Timecode({ className = '' }) {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => f + 1), 1000 / 24)
    return () => clearInterval(id)
  }, [])

  const totalFrames = frame
  const ff = totalFrames % 24
  const totalSeconds = Math.floor(totalFrames / 24)
  const ss = totalSeconds % 60
  const mm = Math.floor(totalSeconds / 60) % 60
  const hh = Math.floor(totalSeconds / 3600)
  const pad = (n) => String(n).padStart(2, '0')

  return (
    <span className={`font-mono tabular-nums ${className}`}>
      {pad(hh)}:{pad(mm)}:{pad(ss)}:{pad(ff)}
    </span>
  )
}