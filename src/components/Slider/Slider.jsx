import { useEffect, useState } from 'react'
import useWindowSize from '../../hooks/useWindowSize'
import Article from '../Article/Article'
import './Slider.css'


const Slider = ({ info }) => {
/*transition se agrega despues de cargar la pagina,
  para que no se vean las transisiones al cargar */

  const { title, type, articles } = info

  const [position, setPosition] = useState(0)
  const [imgToShow, setImgToShow] = useState(1)
  const [transition, setTransition] = useState(false) //añade o remueve clase 'transition' al slider
  const [transiBtn, setTransiBtn] = useState(false) //añade o remueve 'transition' a los btn flecha
  const [btnTop, setBtnTop] = useState(0)

  const {width} = useWindowSize()
  
  useEffect(() => {

    setTransiBtn(false)
    setTransition(false)
    setPosition(0)

    if (width <= 512) {setImgToShow(1)}
    if (width > 512 && width <= 768) {setImgToShow(2)}
    if (width > 768 && width <= 1024) {setImgToShow(3)}
    if (width > 1024) {setImgToShow(4)}
    
    setBtnTop((document.querySelector('.slider-img').getBoundingClientRect().height / 2) - 21)
    
  }, [width])


  useEffect(() => {

    setTimeout(() => {
      //calcula la altura del boton flecha segun la altura de la imagen, queda a la mitad
      setBtnTop((document.querySelector('.slider-img').getBoundingClientRect().height / 2) - 21) 
    }, 500);
  
  }, [])
  

  // const imgToShow = 1
  const imgAmount  = articles.length      // array.length
  const slideMoveX = imgAmount/imgToShow    // 2
  const slideWidth = slideMoveX * 100       // 200
  const slideTranslate = 100 / slideMoveX   // 50
  const anchoCard = 100 / imgAmount         // 16.6667

  // DESPLAZA EL SLIDE
  const moveLeft = () => {
    setTransiBtn(true)
    setTransition(true)
    if (position >= 0) {return}
    setPosition(position + slideTranslate)
  }

  const moveRight = () => {
    setTransiBtn(true)
    setTransition(true)
    if (position <= slideTranslate - 100) {return}
    setPosition(position - slideTranslate)
  }




  return (
    <div className={`section-slider ${(type === 2) ? 'bg-type3' : ''}`}>

      <div className='slider-wrapper'>

        <div className='slider-header'>
          <h2 className='slider-header-h2'>{title}</h2>
        </div>
  
        <div className='slider-mask'>

          <button className={`slider-btn prev ${(position >= 0) ? 'hide' : ''} 
                              ${(type === 1 || type === 2) ? 'show' : ''}  
                              ${(transiBtn) ? 'transition' : ''}`}
                  style={{ top : `${btnTop}px` }} 
                  onClick={moveLeft}
          >
            <svg viewBox="0 0 24 24" width="24px" height="24px" className="bDFSd d Vb ymbyq"><path d="M10.304 3.506l-8.048 8.047a.644.644 0 000 .895l8.048 8.047a.624.624 0 00.883 0l.882-.883a.624.624 0 000-.883l-5.481-5.48h14.714a.625.625 0 00.623-.625v-1.248a.624.624 0 00-.623-.624H6.588l5.481-5.481a.624.624 0 000-.883l-.882-.883a.623.623 0 00-.883-.004c-.001.002-.002.003 0 .005z"></path></svg>
          </button>
          <button className={`slider-btn next ${(position <= slideTranslate - 100) ? 'hide' : ''} 
                              ${(type === 1 || type === 2) ? 'show' : ''} 
                              ${(transiBtn) ? 'transition' : ''}`} 
                  style={{ top : `${btnTop}px` }}                  
                  onClick={moveRight}
          >
            <svg viewBox="0 0 24 24" width="24px" height="24px" className="bDFSd d Vb ymbyq"><path d="M13.696 3.502a.624.624 0 00-.884.004l-.882.883a.624.624 0 000 .883l5.481 5.481H2.698a.624.624 0 00-.623.624v1.248c0 .346.279.623.623.625h14.714l-5.481 5.48a.624.624 0 000 .883l.882.883c.245.244.64.244.883 0l8.049-8.047a.646.646 0 000-.895l-8.049-8.048v-.004z"></path></svg>
          </button>

          <button className={`slider-btn-t3 prev ${(position >= 0) ? 'hide' : ''} ${(type === 3) ? 'show' : ''}`} 
                  onClick={moveLeft}
          >
            <svg viewBox="0 0 24 24" width="24px" height="24px" className="bDFSd d Vb ymbyq"><path d="M10.304 3.506l-8.048 8.047a.644.644 0 000 .895l8.048 8.047a.624.624 0 00.883 0l.882-.883a.624.624 0 000-.883l-5.481-5.48h14.714a.625.625 0 00.623-.625v-1.248a.624.624 0 00-.623-.624H6.588l5.481-5.481a.624.624 0 000-.883l-.882-.883a.623.623 0 00-.883-.004c-.001.002-.002.003 0 .005z"></path></svg>
          </button>
          <button className={`slider-btn-t3 next ${(position <= slideTranslate - 100) ? 'hide' : ''} ${(type === 3) ? 'show' : ''}`} 
                  onClick={moveRight}
          >
            <svg viewBox="0 0 24 24" width="24px" height="24px" className="bDFSd d Vb ymbyq"><path d="M13.696 3.502a.624.624 0 00-.884.004l-.882.883a.624.624 0 000 .883l5.481 5.481H2.698a.624.624 0 00-.623.624v1.248c0 .346.279.623.623.625h14.714l-5.481 5.48a.624.624 0 000 .883l.882.883c.245.244.64.244.883 0l8.049-8.047a.646.646 0 000-.895l-8.049-8.048v-.004z"></path></svg>
          </button>

          <div className={`slider-slide ${(transition) ? 'transition' : ''}`} 
               style={{ width : `${slideWidth}%`, transform : `translateX(${position}%)`}}
          >

            <Article articles={articles} anchoCard={anchoCard} type={type} />
            
          </div>
        </div>

      </div>

    </div>
  )
}

Slider.defaultProps = {
  type : 1,
 
}

export default Slider
