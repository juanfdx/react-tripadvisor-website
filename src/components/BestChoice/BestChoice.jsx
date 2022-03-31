import './BestChoice.css'


const BestChoice = () => {


  return (
    <div className='section-best-choice'>
      <div className='best-choice-wrapper'>

        <div className='best-choice-col1'>

          <div className='best-choice-img-box'>
            <img className='best-choice-img' src={'/assets/images/choice/logomark_solid.svg'} loading="lazy" alt="tripadvisor white logo" />
          </div>

          <h2 className='best-choice-h2'>Lo mejor de lo mejor de Travellers' Choice</h2>

          <a className='best-choice-a' href="#">Ver los ganadores</a>

        </div>

        <div className='best-choice-col2'>

        </div>

      </div>
    </div>
  )
}

BestChoice.defaultProps = {}

export default BestChoice