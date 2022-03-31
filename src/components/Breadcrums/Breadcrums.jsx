import './Breadcrums.css'
import { useParams } from 'react-router-dom'


const Breadcrums = ({ info }) => {

  const { articles } = info
  const { name } = useParams()


  return (
    <div className='breadcrums'>
      <div className='breadcrums-wrapper'>

        <div className='breadcrums-group'>  
          {
            articles.map((item, i) => {

              if (item.name === name) {             
                return (
                  item.location.map((loc, index) => 
                  
                    <div key={index} className='breadcrums-item'>
                      <a className='breadcrums-item-a' href="#" rel='nofollow'>{loc}</a>
                      <span className='breadcrums-item-svg'>
                        <svg viewBox="0 0 24 24" width="20px" height="20px" className="bDFSd d Vb ymbyq"><path d="M7.4 5.6l6.4 6.4-6.4 6.3 1.4 1.4 7.8-7.7-7.8-7.8z"></path></svg>
                      </span>
                    </div>
                  )
                )
              }

            })
          }

        </div>

        <div className='breadcrums-attraction'>
          {
            articles.map((item, i) => {
              if (item.name == name) {
                return <p key={item.id} className='breadcrums-attraction-p'>{item.title}</p>    
              }
            })
          }
        </div>

      </div>
    </div>
  )
}


Breadcrums.defaultProps = {}


export default Breadcrums