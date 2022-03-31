import { useParams } from 'react-router-dom'
import useDateFormat from '../../hooks/useDateFormat'
import './Checkout.css'


const Checkout = ({ articles }) => {

  const { name } = useParams()
  
  const lang = 'es'
  //solo 'es' o 'en'
  const  { weekday, day, month, year } = useDateFormat(lang)


  return (
    <div className='checkout'>
      {
        articles.map((item, i) => {

          if (item.name === name) {
            
            return (
              <div key={item.id} className='checkout-card'>

                <div className='checkout-content'>
        
                  <div className='checkout-swap-box'>
                    <div className='checkout-date-people'>
                      <button className='checkout-date-btn'>
                        <svg viewBox="0 0 24 24" className="checkout-date-btn-svg"><path d="M6.734 17.81h6.334v-6.336H6.734v6.336zm2.105-4.232h2.125v2.126H8.839v-2.126z"></path><path d="M17.26 3.579l.001-.526a1.052 1.052 0 10-2.106 0l-.001.526h-2.083l.001-.526a1.051 1.051 0 10-2.104 0l-.001.526H8.846v-.526a1.052 1.052 0 10-2.104 0v.526h-4.22V22h18.956V3.579H17.26zm2.112 16.316H4.627V5.684h2.11l-.003 1.579h2.105l.003-1.579h2.121l-.003 1.579h2.105l.003-1.579h2.083l-.003 1.579h2.104l.003-1.579h2.117v14.211z"></path></svg>
                        <p className="checkout-date-btn-p">{`${weekday}, ${day} ${month}`}</p>
                      </button>
                      <button className='checkout-people'>
                        <svg viewBox="0 0 24 24" className="checkout-people-svg"><path d="M8 9.5c1.792 0 3.25-1.458 3.25-3.25S9.792 3 8 3 4.75 4.458 4.75 6.25 6.208 9.5 8 9.5zm0-4.501A1.252 1.252 0 018 7.5a1.252 1.252 0 010-2.501zM16.004 11.499c1.792 0 3.25-1.458 3.25-3.25S17.796 5 16.004 5s-3.25 1.458-3.25 3.25 1.458 3.249 3.25 3.249zm0-4.499c.689 0 1.25.561 1.25 1.25s-.561 1.25-1.25 1.25a1.25 1.25 0 010-2.5zM21.8 15.418c-1.389-1.855-3.498-2.919-5.789-2.919-.886 0-1.741.161-2.542.462-1.358-1.565-3.315-2.461-5.459-2.461-2.336 0-4.455 1.051-5.813 2.883L2 13.648V21h20v-5.316l-.2-.266zM4 19v-4.674C4.98 13.16 6.424 12.5 8.01 12.5c1.41 0 2.705.529 3.664 1.464a7.377 7.377 0 00-1.477 1.481l-.197.268V19H4zm16 0h-8v-2.613a5.188 5.188 0 014.011-1.887c1.55 0 2.985.676 3.989 1.865V19z"></path></svg>
          
                        <p className='checkout-people-p'>2</p>
                      </button>
                    </div>
          
                    <div className='checkout-info'>
                      <h3 className='checkout-info-h3'>
                        Reserva con antelacion
                      </h3>
                      <p className='checkout-info-p'>
                        a partir de <span className='checkout-info-p-span'> {item.price} </span> por adulto
                        {(item.price_spn) &&
                          <span className='checkout-info-p-span2'> {item.price_spn}</span> 
                        }
                      </p>
                    </div>
                  </div>
        
                  <button className='checkout-btn'>
                    Comprobar disponivilidad
                  </button>
        
                  <div className='checkout-recomended'>
                    <div className='checkout-recomended-svg pay'>
                      <svg viewBox="0 0 24 24" width="22px" height="22px" className="bDFSd d Vb ymbyq" x="0" y="0"><circle cx="12" cy="8.5" r="1"></circle><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="15.5" r="1"></circle><path d="M20 6.5V8c-1.5.7-2.5 2.3-2.5 4 0 1.8 1 3.3 2.5 4v1.5H4V16c1.5-.7 2.5-2.3 2.5-4 0-1.8-1-3.3-2.5-4V6.5h16m2-2H2v5c1.4 0 2.5 1.1 2.5 2.5S3.4 14.5 2 14.5v5h20v-5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5v-5z"></path></svg>
                    </div>

                    <p className='checkout-msg-p'>
                      Reserve ahora y pague después: disfrute de reservas gratis y flexibles.&nbsp;  
                      <button className='checkout-msg-btn'>Más información</button>
                    </p>
                  </div>
        
                  <div className='checkout-recomended'>
                    <div className='checkout-recomended-svg heart'>
                      <svg viewBox="0 0 24 24" width="22px" height="22px" className="bDFSd d Vb ymbyq"><path d="M12.001 20.729s-6.741-5.85-8.485-8.003c-2.055-2.541-2.018-5.837.089-7.836a5.928 5.928 0 014.104-1.618c1.548 0 3.005.575 4.104 1.618l.174.165.162-.155a5.93 5.93 0 014.104-1.618c1.548 0 3.005.574 4.104 1.618 2.158 2.049 2.192 5.273.084 7.841-1.755 2.139-8.44 7.988-8.44 7.988z"></path></svg>
                    </div>
        
                    <p className='checkout-recomended-p'>
                      Un 100 % de los viajeros recomiendan esta experiencia
                      <span className='checkout-recomended-span'>
                        <svg viewBox="0 0 24 24" width="16px" height="16px" className="checkout-recomended-span-svg"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 110-16 8 8 0 010 16z"></path><path d="M11 10h2v7h-2z"></path><circle cx="12" cy="7.75" r="1.25"></circle></svg>
                      </span>
                    </p>
                  </div>

                  <div className='checkout-recomended last'>
                    <div className='checkout-recomended-svg cancel'>
                      <svg viewBox="0 0 24 24" width="22px" height="22px" className="bDFSd d Vb ymbyq"><path d="M4.013 12c0-2.1.9-4.2 2.4-5.6l1.6 1.6V3h-5l1.9 1.9c-3.9 3.9-3.9 10.3 0 14.2 1.9 1.801 4.4 2.9 7.1 2.9v-2c-4.4 0-8-3.6-8-8z"></path><path d="M12.514 7h-1c-.3 0-.5.2-.5.5v4.9c0 .1-.1.3-.1.4l-2.2 2.2c-.2.2-.2.5 0 .7l.7.7c.2.199.5.199.7 0l2.8-2.801c.101-.101.101-.199.101-.399V7.5c-.001-.3-.203-.5-.501-.5zM20.014 12H22c0-5.5-4.486-10-9.987-10v2c4.4 0 8.001 3.6 8.001 8zM20.713 14l-4.5 4.7-1.8-2-1.399 1.4 3.199 3.4L22 15.4z"></path></svg>
                    </div>
        
                    <p className='checkout-recomended-p'>
                      Cancelación gratuita
                      <span className='checkout-recomended-span'>
                        <svg viewBox="0 0 24 24" width="16px" height="16px" className="checkout-recomended-span-svg"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 110-16 8 8 0 010 16z"></path><path d="M11 10h2v7h-2z"></path><circle cx="12" cy="7.75" r="1.25"></circle></svg>
                      </span>
                    </p>
                  </div>
        
                </div>
        
              </div>
            )
          }

        })
      }

      <div className='checkout-tip hide-for-version'>
        <p className='checkout-tip-p'>
          ¿No lo tiene claro? Se le reembolsará el importe íntegro abonado si cancela esta reserva con hasta 24 horas de antelación.
        </p>
      </div>

    </div>
  )
}


Checkout.defaultProps = {}


export default Checkout