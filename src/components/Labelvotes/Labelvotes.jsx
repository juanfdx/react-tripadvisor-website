import './Labelvotes.css'
import { useParams } from 'react-router-dom'


const Labelvotes = ({ info }) => {

  const { articles } = info
  const { name } = useParams()

  return (
    <div className='section-labelvotes'>
      <div className='labelvotes-wrapper'>

        <div className='labelvotes-box'>
          <svg className="labelvotes-svg" viewBox="0 0 128 24" width="88" height="16" aria-label="" title=""><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform=""></path><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(26 0)"></path><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(52 0)"></path><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(78 0)"></path><path d="M 12 0C5.389 0 0 5.389 0 12c0 6.62 5.389 12 12 12 6.62 0 12-5.379 12-12S18.621 0 12 0zm0 2a9.984 9.984 0 0110 10 9.976 9.976 0 01-10 10z" transform="translate(104 0)"></path></svg>

          <span className='labelvotes-span-votes'>623</span>
        </div>

        <div className='labelvotes-link'>
          {
            articles.map((item, i) => {
              if (item.name === name) {
                return (
                  <a key={item.id} className='labelvotes-link-a' rel="nofollow" href="#"><p>De {item.alt}</p></a>
                )
              }
            })
          }
        </div>

      </div>
    </div>
  )
}


Labelvotes.defaultProps = {}


export default Labelvotes