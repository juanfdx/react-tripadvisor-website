import './SummaryVisit.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useWindowSize from '../../hooks/useWindowSize'
import InfoIcon from '../InfoIcon/InfoIcon'


const SummaryVisit = ({ info }) => {
   
  const [position, setPosition] = useState(0)
  const [imgToShow, setImgToShow] = useState(1)
  const [transition, setTransition] = useState(false)
  
  const { articles } = info
  const { name } = useParams()
  const {width} = useWindowSize()

  useEffect(() => {
    setPosition(0)
    setTransition(false)

    if (width <= 280) {setImgToShow(1)}
    if (width > 280 && width <= 414) {setImgToShow(2)}
    if (width > 414 && width <= 540) {setImgToShow(3)}
    if (width > 540) {setImgToShow(4)}
    
  }, [width])

    // const imgToShow = 1
    const imgAmount  = 6      // array.length
    const slideMoveX = imgAmount/imgToShow    // 2
    const slideWidth = slideMoveX * 100       // 200
    const slideTranslate = 100 / slideMoveX   // 50
    const anchoCard = 100 / imgAmount         // 16.6667

    // DESPLAZA EL SLIDE
    const moveLeft = () => {
      setTransition(true)
      if (position >= 0) {return}
      setPosition(position + slideTranslate)
    }
  
    const moveRight = () => {
      setTransition(true)
      if (position <= slideTranslate - 100) {return}
      setPosition(position - slideTranslate)
    }
  

  return (
    <div className='section-summary-visit'>
      <div className='summary-visit-wrapper'>
        <div className='summary-visit-box'>

          <div className='summary-visit-text-box'>
            <h3 className='summary-visit-h3'>Resumen de la visita guiada</h3>
            <h2 className='summary-visit-h2'>La reserva previa garantiza su preferencia de hora</h2>
          </div>

          <div className='summary-visit-slider-mask'>

              <button className={`summary-visit-slide-btn prev ${(position >= 0) ? 'hide' : ''}`}>
                <svg viewBox="0 0 24 24" 
                     width="24px" height="24px" 
                     className='summary-visit-svg-left-btn'
                     onClick={moveLeft}
                >
                  <path d="M16.6 5.6L10.2 12l6.4 6.3-1.4 1.4L7.4 12l7.8-7.8z"></path>
                </svg>
              </button>

              <button className={`summary-visit-slide-btn next ${(position <= slideTranslate - 100) ? 'hide' : ''}`}>
                <svg viewBox="0 0 24 24" width="24px" height="24px" 
                     className='summary-visit-svg-right-btn'
                     onClick={moveRight}
                >
                  <path d="M7.4 5.6l6.4 6.4-6.4 6.3 1.4 1.4 7.8-7.7-7.8-7.8z"></path>
                </svg>
              </button>
              
            <div className={`summary-visit-slide ${(transition) ? 'transition' : ''}`}
                 style={{width : `${slideWidth}%`, transform : `translateX(${position}%)`}}
            >

              <ul className='summary-visit-slide-ul'>
                {
                  articles.map((item, i) => {
                    if (item.name === name) {
                      return (
                        item.infoicons.map((item, i) =>                       
                          <li key={item.id} className='summary-visit-slide-li' style={{ width : `${anchoCard}%`}}>                          
                            <InfoIcon icon={item.icon} />
                            <div className='summary-visit-slide-p-box'>
                              <p className='summary-visit-slide-p p1'>{item.p1}</p>
                              {(item.type === 1) ?
                                <p className='summary-visit-slide-p p2'>{item.p2}</p>
                              :
                                <button className='summary-visit-slide-p btn'>{item.btn}</button>
                              }
                            </div>
                          </li>                      
                        )
                      )  
                    }
                  })
                }
              </ul>

            </div>

          </div>

          <ul className='summary-visit-info'>
            {
              articles.map((item, i) => {
                if (item.name === name) {               
                  return(
                    item.infoicons.map((item, i) =>                    
                      <li key={item.id} className='summary-visit-info-li' >
                        <InfoIcon icon={item.icon} />
                        <div className='summary-visit-slide-p-box'>
                          <p className='summary-visit-slide-p p1'>{item.p1}</p>
                          {(item.type === 1) ?
                            <p className='summary-visit-slide-p p2'>{item.p2}</p>
                          :
                            <button className='summary-visit-slide-p btn'>{item.btn}</button>
                          }
                        </div>
                      </li>
                    )
                  )
                }
              })
            }
          </ul>

        </div>
      </div>
    </div>
  )
}

SummaryVisit.defaultProps = {}


export default SummaryVisit