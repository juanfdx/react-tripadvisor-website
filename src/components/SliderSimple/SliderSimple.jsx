import './SliderSimple.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react"


const SliderSimple = ({ articles }) => {
  const {name} = useParams()

  const [position, setPosition] = useState(0)
  const [imgAmount, setImgAmount] = useState(0)
  
  useEffect(() => {
    const article = articles.find((item, i) => item.name === name)
    setImgAmount(article.allimages.length - 1)
  }, [])
  

  const imgSelected = (value) => {
    setPosition(value)
  }

  const prevImage = () => {
    (position > 0) ? setPosition(position - 1) : setPosition(imgAmount)
  }

  const nextImage = () => {
    (position < imgAmount) ? setPosition(position + 1) : setPosition(0);
  }


  return (
    <div className='section-slider-simple'>
      <div className='slider-simple-slider'>

        {
          articles.map((item, i) => {

            if (item.name === name) {         
              return (
                item.allimages.map((img, i) =>              
                  <img key={i} 
                       loading="lazy"
                       className={`slider-simple-img ${(position === i) ? 'activo' : ''}`} 
                       src={img} alt={'imagen ' + (i+1)} />
                )            
              )
            }
            
          })
        }

        {
          articles.map((item, i) => {

            if (item.name === name && item.top_best === true ) {
              return (
                <div key={item.id} className='slider-simple-sello'>
                  <img loading="lazy" src={'/assets/images/small/best_of_best.svg'} alt="best of best quality seal" />
                </div>
              )
            }
          })
        }



        <button className={`slider-simple-btn prev ${(position === 0) ? 'hide' : 'show'}`}
                onClick={prevImage}
        >
          <svg viewBox="0 0 24 24" width="24px" height="24px" className="bDFSd d Vb ymbyq"><path d="M10.304 3.506l-8.048 8.047a.644.644 0 000 .895l8.048 8.047a.624.624 0 00.883 0l.882-.883a.624.624 0 000-.883l-5.481-5.48h14.714a.625.625 0 00.623-.625v-1.248a.624.624 0 00-.623-.624H6.588l5.481-5.481a.624.624 0 000-.883l-.882-.883a.623.623 0 00-.883-.004c-.001.002-.002.003 0 .005z"></path></svg>
        </button>

        <button className={`slider-simple-btn next ${(position >= imgAmount) ? 'hide' : 'show'}`}
                onClick={nextImage}
        >
          <svg viewBox="0 0 24 24" width="24px" height="24px" className="bDFSd d Vb ymbyq"><path d="M13.696 3.502a.624.624 0 00-.884.004l-.882.883a.624.624 0 000 .883l5.481 5.481H2.698a.624.624 0 00-.623.624v1.248c0 .346.279.623.623.625h14.714l-5.481 5.48a.624.624 0 000 .883l.882.883c.245.244.64.244.883 0l8.049-8.047a.646.646 0 000-.895l-8.049-8.048v-.004z"></path></svg>
        </button>

        <button className='slider-simple-all-pics-box'>
          <svg viewBox="0 0 24 24" width="20px" height="20px" className="slider-simple-all-pics-svg"><circle cx="7.5" cy="9.5" r="1.5"></circle><path d="M6.5 16H17.4c.5 0 .699-.6.399-.9l-3.6-3c-.2-.2-.601-.2-.8 0l-3 2.7c-.2.2-.6.2-.8 0l-1.1-1.1c-.2-.2-.6-.2-.8 0L6.1 15.1c-.3.4-.1.9.4.9z"></path><path d="M21.5 4h-19c-.3 0-.5.2-.5.5v15c0 .3.2.5.5.5h19c.3 0 .5-.2.5-.5v-15c0-.3-.2-.5-.5-.5zM20 18H4V6h16v12z"></path></svg>
          <p className='slider-simple-all-pics-p p1'>Todas las fotos(588)</p>
          <p className='slider-simple-all-pics-p p2'>588</p>
        </button>
      

        <ul className='slider-simple-ul'>
          {
            articles.map((item, i) => {

              if (item.name === name) {
                return (
                  item.allimages.map((img, i) =>  

                    <li key={i} className='slider-simple-li'>
                      <button className={`slider-simple-li-btn ${(position === i) ? 'activo' : ''}`}
                              onClick={() => imgSelected(i)}
                      > 
                      </button>
                    </li>
                  )
                )
              }

            })
          }
       
        </ul>

      </div>
    </div>
  )
}

SliderSimple.defaultProps = {}

export default SliderSimple