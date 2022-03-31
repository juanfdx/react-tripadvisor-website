import './SubNav.css'
import { useParams } from 'react-router-dom'

const SubNav = ({ info, allnames, page }) => {

  const { name } = useParams()

  return (
    <div className='section-subnav'>
      <div className='subnav-wrapper'>

        <nav className='subnav-nav'>

          <div className='subnav-slider'>
            <ul className='subnav-ul'>
              {
                allnames.map((item, i) => {
                  if (item.name === name) {
                    
                    return (
                      <li key={item.id} className='subnav-li'>
                        <a className='subnav-a' rel="nofollow" href="#">
                          {item.place}
                        </a>
                      </li>
                    )
                  }
                })
              }
              {
                info.map((item, i) => 
                  <li key={item.id} className='subnav-li'>
                    <a className={`subnav-a ${(item.title === page) ? 'active' : ''}`} 
                       rel="nofollow" href={item.url}
                    >
                      {item.title}
                    </a>
                  </li>      
                )
              }
            </ul>
          </div>

          <div className='subnav-svg-box'>
            <svg viewBox="0 0 24 24" width="26px" height="26px" className="subnav-svg-puntos" x="0" y="0"><circle cx="4.5" cy="11.9" r="2.5"></circle><circle cx="19.5" cy="11.9" r="2.5"></circle><circle cx="12" cy="11.9" r="2.5"></circle></svg>
          </div>

        </nav>

      </div>
    </div>
  )
}

SubNav.defaultProps = {}

export default SubNav