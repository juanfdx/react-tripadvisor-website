import './ElementTitle.css'
import { useParams } from 'react-router-dom'


const ElementTitle = ({ info }) => {

  const { articles } = info
  const { name } = useParams()

  return (
    <div className='section-elementTitle'>
      <div className='elementTitle-wrapper'>

        <div className='elementTitle-title'>
          {
            articles.map((item, i) => {
              if (item.name === name) {           
                return (
                  <h1 key={item.id} className='elementTitle-title-h1'>{item.title}</h1>
                )
              }
            })
          }
        </div>

        <div className='elementTitle-buttons-box'>
          <button className='elementTitle-mail-btn'>
            <svg viewBox="0 0 24 24" width="24px" height="24px" className="bDFSd d Vb ymbyq"><path d="M17.6 22H6.4c-1.547 0-2.806-1.485-2.806-3.31v-7.431c0-1.71 1.338-3.269 2.806-3.269h1.864v1.868H6.399c-.316 0-.938.634-.938 1.401v7.431c0 .85.494 1.442.938 1.442h11.2c.444 0 .938-.593.938-1.442v-7.431c0-.767-.62-1.401-.938-1.401h-1.863V7.991H17.6c1.469 0 2.807 1.558 2.807 3.269v7.431C20.406 20.515 19.146 22 17.6 22z"></path><path d="M15.995 5.997L12 2 8.003 5.997l1.321 1.32 1.742-1.742v7.552h1.868V5.576l1.741 1.741z"></path></svg>
          </button>

          <button className='elementTitle-heart-btn'>
            <svg viewBox="0 0 24 24" width="24px" height="24px" className="bDFSd d Vb ymbyq"><path d="M12.001 20.729s-6.741-5.85-8.485-8.003c-2.055-2.541-2.018-5.837.089-7.836a5.928 5.928 0 014.104-1.618c1.548 0 3.005.575 4.104 1.618l.174.165.162-.155a5.93 5.93 0 014.104-1.618c1.548 0 3.005.574 4.104 1.618 2.158 2.049 2.192 5.273.084 7.841-1.755 2.139-8.44 7.988-8.44 7.988zM7.709 5.271a3.935 3.935 0 00-2.727 1.068c-1.578 1.498-1.06 3.708.088 5.128 1.306 1.613 5.333 5.204 6.925 6.605 1.583-1.404 5.58-4.993 6.899-6.601 1.195-1.455 1.685-3.603.085-5.122-.726-.689-1.694-1.069-2.728-1.069s-2.001.38-2.728 1.069l-1.539 1.462-1.551-1.473a3.925 3.925 0 00-2.724-1.067z"></path></svg>
          </button>
        </div>

      </div>
    </div>
  )
}


ElementTitle.defaultProps = {}


export default ElementTitle