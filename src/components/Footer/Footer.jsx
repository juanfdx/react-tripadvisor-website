import { useState } from 'react'
import './Footer.css'


const Footer = ({ info, type }) => {

  const [position, setPosition] = useState(0)

  const handlePosition = (value) => {
    setPosition(value)
    if (position === value) {
      setPosition(-1)
    }
  }


  return (

    <div className='section-footer'>

      <div className='footer-wrapper'>

        <div className={`footer-top ${(type === 2) ? 'hide' : ''}`}>
          <ul className='footer-top-ul'>
            {
              info.map((item, i) => 
              
                <li key={item.id} className='footer-top-li'>

                  <div className='footer-top-item'>
                    <div className='footer-top-svg' onClick={()=> handlePosition(item.id)}>
                      <svg viewBox="0 0 24 24" className={`footer-top-plus ${(position === item.id) ? 'hide' : ''}`}>
                        <path d="M13.111 22h-2.222v-8.889H2v-2.222h8.889V2h2.222v8.889H22v2.222h-8.889z"></path>
                      </svg>
                      <svg viewBox="0 0 24 24" width="1em" height="1em" className={`footer-top-minus ${(position === item.id) ? 'active' : ''}`}>
                        <path d="M2 13.111v-2.222h20v2.222z"></path>
                      </svg>
                    </div>
                    <button className='footer-top-btn' onClick={()=> handlePosition(item.id)}>{item.title}</button>
                  </div>

                  <ul className={`footer-top-sub_ul ${(position === item.id) ? 'active' : ''}`}>
                    { (item.title === 'Sitios de Tripadvidor') ?

                      item.subject.map((element, i) => 

                        <li key={i} className='footer-top-sub_li_case1'>
                          <span className='footer-top-sub_li_span'>{element.h1}</span>
                          <a className='footer-top-sub_li_case1-a' rel="nofollow" href="#" target="_blank"> {element.p}</a>
                        </li>
                      
                      )
                      :
                      item.subject.map((element, i) => 

                        <li key={i} className='footer-top-sub_li'>
                          <a className='footer-top-sub_li-a' rel="nofollow" href="#" target="_blank">{element}</a>
                        </li>
                    
                      )
                    }
                  </ul>
                </li>
              
              )
            }
          </ul>
        </div>

        <div className={`footer-top1024 ${(type === 2) ? 'hide' : ''}`}>

          <div className='footer-top1024-col1'>
            <div className='footer-top1024-col1-wrapper'>
              {
                info.map((item, i) => 
                
                  (item.title !== 'Sitios de Tripadvidor') ?
  
                    <div key={i} className='footer-top1024-box'>
                      <h4 className='footer-top1024-h4'>{item.title}</h4>
                      <ul className='footer-top1024-ul'>
                        {
                          item.subject.map((element, i) => 
                          
                            <li key={i} className='footer-top1024-li'><a rel="nofollow" href='#'>{element}</a></li>
                          )
                        }
  
                      </ul>
                    </div>
                  :
  
                  ''       
                )
              }
  
            </div>
          </div>


          <div className='footer-top1024-col2'>
              {
                info.map((item, i) => 
                (item.title === 'Sitios de Tripadvidor') ?
                
                <div key={item.id} className='footer-top1024-box2'>
                  <h4 className='footer-top1024-h4'>{item.title}</h4>

                  <ul className='footer-top1024-ul'>
                    {
                      item.subject.map((element, i) => 

                        <li key={i} className='footer-top-sub_li_case1'>
                          <span className='footer-top-sub_li_span'>{element.h1}</span>
                          <a className='footer-top-sub_li_case1-a' rel="nofollow" href="#" target="_blank"> {element.p}</a>
                        </li>
    
                      )
                    }
                  </ul>

                </div>

                :
                ''
                )
              }
          </div>

        </div>
  
        <div className='footer-bottom'>
  
          <div className='footer-selection'>
  
          <div className="footer-selection-box">

            <div className='footer-selection-coin'>

              <select name="coins" id="coins">
                <option value="volvo">US$</option>
                <option value="saab">GBP</option>
                <option value="mercedes">€ Euros</option>
              </select>

              <div className='footer-selection-svg'>
                <svg viewBox="0 0 24 24" width="20px" height="20px" className="bDFSd d Vb ymbyq"><path d="M19.324 9.175l-6.8 6.6c-.3.301-.7.301-1 0l-6.8-6.6c-.3-.3-.3-.7 0-1 .1-.101.3-.2.5-.2h13.6c.4 0 .7.3.7.7 0 .2-.1.399-.2.5z"></path></svg>
              </div>

            </div>
  
            <div className='footer-selection-place'>

              <select name="countries" id="countries">
                <option value="volvo">United States</option>
                <option value="saab">España</option>
                <option value="mercedes">Brasil</option>
              </select>

              <div className='footer-selection-svg'>
                <svg viewBox="0 0 24 24" width="20px" height="20px" className="bDFSd d Vb ymbyq"><path d="M19.324 9.175l-6.8 6.6c-.3.301-.7.301-1 0l-6.8-6.6c-.3-.3-.3-.7 0-1 .1-.101.3-.2.5-.2h13.6c.4 0 .7.3.7.7 0 .2-.1.399-.2.5z"></path></svg>
              </div>

            </div>
          </div>
  
            <div className={`footer-selection-social ${(type === 2) ? 'hide' : ''}`}>
              <a rel="nofollow" href="#">
                <svg viewBox="0 0 24 24" width="24px" height="24px" className="bDFSd d Vb ymbyq"><path d="M12.001 2.061C6.478 2.061 2 6.537 2 12.061c0 4.993 3.661 9.132 8.445 9.879v-6.99H7.89v-2.889h2.556l.001-2.203c0-2.506 1.484-3.896 3.769-3.896 1.095 0 2.23.21 2.23.21v2.445h-1.253c-1.242 0-1.639.777-1.639 1.568l.003 1.876h2.777l-.444 2.889h-2.333v6.99C18.34 21.192 22 17.054 22 12.061c0-5.524-4.477-10-9.999-10z"></path></svg>
              </a>
              <a rel="nofollow" href="#">
                <svg viewBox="0 0 24 24" width="24px" height="24px" className="bDFSd d Vb ymbyq"><path d="M2 18.1c2.2.2 4.3-.5 5.9-1.899-1.2-.101-3.6-2.4-4-2.9h1.6c-1.9-.5-3.2-2.2-3.2-4.1.6.099 1.2.299 1.7.499h.2C2.7 8.3 2.2 6 3.1 4.1c2.1 2.6 5.3 4.2 8.6 4.4V7.4c.1-2.2 2-4 4.2-4 .9 0 1.7.3 2.4.8.4.3.8.3 1.2.2l1.9-.7c-.4.9-.9 1.6-1.6 2.3.601-.1 1.3-.4 1.9-.5l.3.2c-.6.5-1.2 1.1-1.7 1.5-.1.3-.2.7-.2 1.1 0 1.9-.5 3.8-1.3 5.601A11.982 11.982 0 019.5 20.1c-2.4.2-4.9-.199-7-1.3l-.5-.7"></path></svg>
              </a>
              <a rel="nofollow" href="#">
                <svg viewBox="0 0 24 24" width="24px" height="24px" className="bDFSd d Vb ymbyq"><path d="M21.938 7.9c0-.8-.199-1.6-.5-2.4-.5-1.4-1.5-2.5-2.9-3-.799-.3-1.6-.4-2.4-.5h-4.099c-1.4 0-2.8 0-4.2.1-.8 0-1.6.2-2.3.5-1.3.5-2.4 1.5-2.9 2.8-.3.8-.5 1.6-.5 2.5 0 1.1-.1 1.4-.1 4.1-.1 1.4-.1 2.7 0 4.1 0 .801.2 1.601.5 2.4.5 1.3 1.6 2.4 2.9 2.9.8.3 1.6.399 2.4.5 1.4.1 2.8.1 4.2.1s2.8 0 4.099-.1c.801 0 1.602-.2 2.4-.5a5.17 5.17 0 002.9-2.9c.301-.8.398-1.6.5-2.4 0-1.1.1-1.399.1-4.1s-.1-3.1-.1-4.1zM20.137 16c0 .6-.1 1.3-.299 1.9-.301.898-1 1.6-1.9 1.898-.6.201-1.301.301-1.9.301-1.1 0-1.4.102-4 .102-1.3 0-2.7 0-4-.102-.6 0-1.2-.1-1.9-.3-.9-.3-1.6-1-1.9-1.899-.3-.601-.4-1.2-.4-1.9 0-1.1-.1-1.4-.1-4 0-1.3 0-2.7.1-4 .1-.6.2-1.3.3-1.9.3-.9 1-1.6 1.9-1.9.7-.2 1.3-.3 2-.3 1.1 0 1.4-.1 4-.1 1.3 0 2.701 0 4 .1.6 0 1.301.1 1.9.3.898.3 1.6 1 1.898 1.9.201.6.301 1.3.301 1.9 0 1.1.102 1.4.102 4-.001 2.6-.102 3-.102 4z"></path><path d="M12.138 6.9c-2.9 0-5.1 2.3-5.1 5.1s2.3 5.1 5.1 5.1 5.101-2.3 5.101-5.1-2.301-5.1-5.101-5.1zm0 8.4c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3c1.8 0 3.2 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3zM17.438 5.5c-.699 0-1.199.5-1.199 1.2s.5 1.2 1.199 1.2 1.199-.5 1.199-1.2-.5-1.2-1.199-1.2z"></path></svg>
              </a>
            </div>
  
          </div>

          <div className='footer-copyright'>
            <div className='footer-copyright-desc'>
              <div className='footer-copyright-svg'>
                <img src={'/assets/images/small/Tripadvisor_logo_green.svg'} loading="lazy" alt="tripadvisor green logo" />
              </div>
              <div className='footer-copyright-elements'>
                <p><span className='footer-copyright-symbol'>©</span> 2022 TripAdvisor LLC Todos los derechos reservados.</p>
                <a className='footer-copyright-elements-a' rel="nofollow" href="#">Condiciones de uso</a>
                <a className='footer-copyright-elements-a' rel="nofollow" href="#">Declaración de Privacidad y Cookies</a>
                <a className='footer-copyright-elements-a' rel="nofollow" href="#">Aceptación de cookies</a>
                <a className='footer-copyright-elements-a' rel="nofollow" href="#">Mapa del sitio</a>
                <a className='footer-copyright-elements-a' rel="nofollow" href="#">Cómo funciona el sitio</a>
              </div>
            </div>
  
            <p className='footer-copyright-p'>Esta es la versión de nuestra página web dirigida a los hablantes Español en España. Si resides en otro país u otra región, selecciona la versión correspondiente de Tripadvisor en el menú desplegable. <span>más</span></p>

          </div>
  
        </div>

      </div>

    </div>
  )
}

Footer.defaultProps = {
  type : 1
}

export default Footer