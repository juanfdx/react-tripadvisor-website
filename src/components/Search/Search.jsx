import './Search.css'


const Search = () => {


  return (
    <div className='section-search'>
      <div className='search-wrapper'>
        <div className='search-picture'>

          <div className='search-form-box'>

            <form  className='search-form'>
              <div className='search-input-group'>
                <div className='search-input-svg'>
                  <button className='search-input-btn'>
                    <svg viewBox="0 0 24 24" className="bDFSd d Vb ymbyq"><path d="M22 20.514l-5.517-5.519a8.023 8.023 0 001.674-4.904c0-4.455-3.624-8.079-8.079-8.079C5.624 2.012 2 5.636 2 10.091s3.624 8.079 8.079 8.079a8.03 8.03 0 004.933-1.695l5.512 5.514L22 20.514zm-11.921-4.431c-3.305 0-5.993-2.688-5.993-5.992s2.688-5.992 5.993-5.992a6 6 0 015.992 5.992 6 6 0 01-5.992 5.992z"></path></svg>
                  </button>
                </div>
                <input className='search-input' type="text" name="" placeholder='¿Adónde vas?' />
              </div>
            </form>

          </div>

          <img className='search-img sc480' src={'/assets/images/search/img_search480.png'} loading="lazy" alt="people in tourist activities 1" />
          <img className='search-img sc768' src={'/assets/images/search/img_search767.png'} loading="lazy" alt="people in tourist activities 2" />
          <img className='search-img sc1024' src={'/assets/images/search/img_search1023.png'} loading="lazy" alt="people in tourist activities 3" />
          <img className='search-img sc1136' src={'/assets/images/search/img_search1136.png'} loading="lazy" alt="people in tourist activities 4" />

        </div>
      </div>
    </div>
  )
}


Search.defaultProps = {}

export default Search