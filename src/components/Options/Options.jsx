import { useState } from 'react'
import OptionsBox from '../OptionsBox/OptionsBox'
import './Options.css'



const Options = () => {
  const [position, setPosition] = useState(0)

  const imgToShow      = 2
  const imgAmount      = 8 // images.length
  const slideMoveX     = imgAmount/imgToShow    //4 
  const slideWidth     = slideMoveX * 100       // 400
  const slideTranslate = 100 / slideMoveX       // 25
  const anchoCard      = 100 / imgAmount        //12.5

  const moveleft = () => {
    if (position >= 0) {
      return
    }
    setPosition(position + slideTranslate)
  }

  const moveRight = () => {
    if (position <= slideTranslate - 100) {
      return
    }
    setPosition(position - slideTranslate)
  }

  return (
    <div className='section-options'>
      <div className='options-wrapper'>

        <OptionsBox />
 
        <div className='options-slider-mask'>

          <button className={`options-slider-btn prev ${(position === 0) ? 'hide' : ''}`} 
                  onClick={moveleft} 
          >
            <svg viewBox="0 0 24 24" className="bDFSd d Vb ymbyq"><path d="M16.6 5.6L10.2 12l6.4 6.3-1.4 1.4L7.4 12l7.8-7.8z"></path></svg>
          </button>

          <button className={`options-slider-btn next ${(position === slideTranslate - 100) ? 'hide' : ''}`} 
                  onClick={moveRight}
          >
            <svg viewBox="0 0 24 24"  className="bDFSd d Vb ymbyq"><path d="M7.4 5.6l6.4 6.4-6.4 6.3 1.4 1.4 7.8-7.7-7.8-7.8z"></path></svg>
          </button>

          <div className='options-slider-slide' style={{ width : `${slideWidth}%`, transform : `translateX(${position}%)`}}>
  
            <a rel="nofollow" href='#' className='options-slider-item' style={{ width : `${anchoCard}%`}}>
              <span className='options-slider-text'>Hoteles</span>
              <span className='options-slider-svg'>
                <svg viewBox="0 0 24 24"  className="bDFSd d Vb ymbyq"><path d="M20.587 12.139V4.144H3.424v7.986A3.805 3.805 0 002 15.097v4.755h1.906v-1.905h16.188v1.91H22v-4.76a3.804 3.804 0 00-1.413-2.958zm-1.906-6.09V8.83a5.048 5.048 0 00-2.865-.876c-1.565 0-2.952.69-3.816 1.749-.864-1.059-2.252-1.749-3.818-1.749-1.07 0-2.056.324-2.851.866V6.049h13.35zm-.258 5.248c-.077-.005-.155-.012-.234-.012h-4.971c.438-.838 1.437-1.426 2.598-1.426 1.168 0 2.173.593 2.607 1.438zm-7.643-.012H5.812c-.081 0-.159.007-.238.012.434-.844 1.438-1.438 2.606-1.438 1.163 0 2.163.588 2.6 1.426zM3.906 16.04v-.943c0-1.051.855-1.905 1.906-1.905h12.376c1.051 0 1.905.854 1.905 1.905v.943H3.906z"></path></svg>
              </span>
            </a>
            <a rel="nofollow" href='#' className='options-slider-item' style={{ width : `${anchoCard}%`}}>
              <span className='options-slider-text'>Alquileres vacacionales</span>
              <span className='options-slider-svg'>
                <svg viewBox="0 0 24 24" className="bDFSd d Vb ymbyq"><path d="M12.001 2L2.097 8.6V22h19.807V8.6L12.001 2zm7.922 18.021H4.077V9.66l7.924-5.28 7.922 5.28v10.361z"></path><path d="M9.036 10.627a2.973 2.973 0 00-2.97 2.968 2.974 2.974 0 002.97 2.971 2.964 2.964 0 002.788-1.98h2.152v1.979h1.98v-1.979h1.982v-1.979h-6.115a2.965 2.965 0 00-2.787-1.98zm0 3.959a.99.99 0 11-.002-1.978.99.99 0 01.002 1.978z"></path></svg>
              </span>
            </a>
            <a rel="nofollow" href='#' className='options-slider-item' style={{ width : `${anchoCard}%`}}>
              <span className='options-slider-text'>Cosas que hacer</span>
              <span className='options-slider-svg'>
                <svg viewBox="0 0 24 24" className="bDFSd d Vb ymbyq" x="0" y="0"><circle cx="12" cy="8.5" r="1"></circle><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="15.5" r="1"></circle><path d="M20 6.5V8c-1.5.7-2.5 2.3-2.5 4 0 1.8 1 3.3 2.5 4v1.5H4V16c1.5-.7 2.5-2.3 2.5-4 0-1.8-1-3.3-2.5-4V6.5h16m2-2H2v5c1.4 0 2.5 1.1 2.5 2.5S3.4 14.5 2 14.5v5h20v-5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5v-5z"></path></svg>
              </span>
            </a>
            <a rel="nofollow" href='#' className='options-slider-item' style={{ width : `${anchoCard}%`}}>
              <span className='options-slider-text'>Restaurantes</span>
              <span className='options-slider-svg'>
                <svg viewBox="0 0 24 24" className="bDFSd d Vb ymbyq"><path d="M18.753 21.459l-5.502-5.504-2.85 2.851-1.663-1.662-4.315 4.315-1.343-1.344 4.316-4.316-4.004-4.003A4.718 4.718 0 012 8.438c0-1.269.494-2.461 1.392-3.358l.834-.835 7.362 7.362.866-.866c-1.099-1.719-.777-3.972.912-5.661l2.538-2.538 1.343 1.344-2.538 2.537c-.785.787-1.254 1.903-.852 2.916l4.423-4.422 1.343 1.344-4.429 4.428c.31.13.64.188.977.164.646-.043 1.299-.364 1.838-.904a630.937 630.937 0 002.642-2.653L22 8.631s-1.241 1.255-2.647 2.66c-.865.865-1.951 1.383-3.057 1.456a4.027 4.027 0 01-2.501-.66l-.864.862 7.166 7.166-1.344 1.344zM4.291 6.995A2.835 2.835 0 003.9 8.438c0 .762.296 1.478.835 2.015l5.666 5.667 1.506-1.507-7.616-7.618z"></path></svg>
              </span>
            </a>
            <a rel="nofollow" href='#' className='options-slider-item' style={{ width : `${anchoCard}%`}}>
              <span className='options-slider-text'>Foros de viajes</span>
              <span className='options-slider-svg'>
                <svg viewBox="0 0 24 24" className="bDFSd d Vb ymbyq"><path d="M2 21.257h2.118l3.271-3h10.604l.02-11.513H2v14.513zM4 8.744h12.009l-.013 7.512H6.61L4 18.65V8.744z"></path><path d="M7.004 2.743v2h12.995v8.512H22V2.743z"></path></svg>
              </span>
            </a>
            <a rel="nofollow" href='#' className='options-slider-item' style={{ width : `${anchoCard}%`}}>
              <span className='options-slider-text'>Vuelos</span>
              <span className='options-slider-svg'>
                <svg viewBox="0 0 24 24" className="bDFSd d Vb ymbyq"><path d="M21.297 2.69C20.83 2.225 20.199 2 19.514 2c-1.005 0-2.132.481-3.036 1.387L14.41 5.455 6.144 4.082 2.697 7.528l6.536 3.105-1.028 1.026-3.44-.684-2.758 2.757L10.274 22l2.758-2.758-.684-3.442 1.026-1.025 3.109 6.541 3.447-3.447-1.379-8.271 2.067-2.069c1.524-1.524 1.827-3.69.679-4.839zm-2.056 3.459l-2.068 2.068-.71.71.165.99 1.214 7.282-.784.784-1.923-4.046-1.187-2.495-1.953 1.953-1.026 1.025-.737.738.203 1.021.48 2.42-.641.642-5.509-5.51.641-.643 2.42.482 1.021.202.737-.737 1.027-1.025 1.954-1.955-2.496-1.186-4.04-1.918.784-.784 7.278 1.208.988.165.709-.708 2.067-2.068c.603-.601 1.251-.815 1.658-.815.131 0 .305.021.403.119.248.249.181 1.226-.675 2.081z"></path></svg>
              </span>
            </a>
            <a rel="nofollow" href='#' className='options-slider-item' style={{ width : `${anchoCard}%`}}>
              <span className='options-slider-text'>Cruceros</span>
              <span className='options-slider-svg'>
                <svg viewBox="0 0 24 24" className="bDFSd d Vb ymbyq"><path d="M18.331 19.999l2.34-7.981L18 10.587V3.984h-5.003V3a1 1 0 00-2.001 0v.984H6.001v6.5l-2.955 1.522 2.365 7.993H3.007V22h17.986v-2.001h-2.662zM8 5.984h8v3.532l-3.98-2.132L8 9.454v-3.47zm-2.566 7.041L11 10.158V18h2v-7.823l5.295 2.836-2.047 6.985H7.497l-2.063-6.973z"></path></svg>
              </span>
            </a>
            <a rel="nofollow" href='#' className='options-slider-item' style={{ width : `${anchoCard}%`}}>
              <span className='options-slider-text'>Más</span>
              <span className='options-slider-svg'>
                <svg viewBox="0 0 24 24" className="bDFSd d Vb ymbyq" x="0" y="0"><circle cx="4.5" cy="11.9" r="2.5"></circle><circle cx="19.5" cy="11.9" r="2.5"></circle><circle cx="12" cy="11.9" r="2.5"></circle></svg>
              </span>
            </a>
  
          </div>

        </div>
      
      </div>
    </div>
  )
}

Options.defaultProps = {}

export default Options