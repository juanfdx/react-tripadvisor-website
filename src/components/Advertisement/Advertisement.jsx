import './Advertisement.css'
import { useEffect, useState } from 'react'


const Advertisement = ({ info }) => {
  let timer
  const [position, setPosition] = useState(1)
 
  
  const nextBanner = () => {
    (position < info.length) ? setPosition(position + 1) : setPosition(1)
  }

  useEffect(() => {
    timer = setInterval(() => {
      nextBanner()
    }, 4000);  
    return () => clearInterval(timer)
  }, [position])
  


  return (
    <div className='section-lookat'>
      <div className='lookat-slider' href="#">
        {
          info.map((item, i) => 
            <a className={`lookat-a ${(position === item.id) ? 'activo' : ''}`} 
               key={item.id}
               target="_blank"
               href={item.url}>
              <img className='lookat-img' src={item.src} alt={item.alt} />
            </a>
          )
        }

      </div>
    </div>
  )
}


Advertisement.defaultProps = {}

export default Advertisement