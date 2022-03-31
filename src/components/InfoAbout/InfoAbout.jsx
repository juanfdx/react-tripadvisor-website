import './InfoAbout.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const InfoAbout = ({ info }) => {

  const { articles } = info
  const { name } = useParams()

  const [readMore, setReadMore] = useState(false);

  return (
    <div className='section-info-about'>
      {
          articles.map((item, i) => {
            if (item.name === name) {
              
              return (
                <div key={i} className='info-about-wrapper'>

                  <h1 className='info-about-h1'>{item.about_h1}</h1>

                  <div className='info-about-text-box'>

                    <div className='info-about-text-col1'>
                      <p className='info-about-p'>{item.about_p}</p>

                      <div className='info-about-info-politics-box'>
                        <div className='info-about-info'>
                          <h3 className='info-about-h3'>{item.info_h3}</h3>
                          <p className='info-about-p'>{item.info_p1}</p>
                          <p className='info-about-p'>{item.info_p2}</p>
                          <p className='info-about-p'>{item.info_p3}</p>
                        </div>
                        <div className='info-about-politics'>
                          <h3 className='info-about-h3'>{item.polits_h3}</h3>
                          <p className='info-about-p'>{item.polits_p}</p>
                        </div>
                      </div>

                    </div>

                    <div className='info-about-text-col2'>
                      <div className={`info-about-awards ${(!item.top_best) ? 'hide' : ''}`}>

                        <h3 className='info-about-h3'>{item.award_h3}</h3>

                        <div className='info-awards-stamp-box'>
                          <svg viewBox="0 0 24 24" width="35px" height="35px" className='info-awards-stamp-svg'><path d="M19.283 15.443c1.007-.961 2.295-1.125 2.295-1.125s-.444 1.008-1.545 2.037c-1.031.961-2.062.984-2.155.984 0 .001.375-.937 1.405-1.896zM8.534 11.906c0-.515.397-.913.89-.913.516 0 .913.398.913.913a.914.914 0 01-.913.914c-.492 0-.89-.422-.89-.914zm-1.663 0c0-.75.328-1.428.843-1.897l-.843-.913h1.851a5.833 5.833 0 016.556 0h1.851l-.843.913c.515.469.843 1.125.843 1.874a2.563 2.563 0 01-2.553 2.576c-.68 0-1.288-.258-1.757-.68L12 14.67l-.819-.891a2.606 2.606 0 01-1.757.68 2.559 2.559 0 01-2.553-2.553zm7.682-1.733c-.937 0-1.733.773-1.733 1.733 0 .961.797 1.732 1.733 1.732.96 0 1.757-.771 1.757-1.732 0-.96-.797-1.733-1.757-1.733zm-4.473-.866c1.101.422 1.92 1.405 1.92 2.552 0-1.147.819-2.131 1.92-2.553-.585-.257-1.241-.374-1.92-.374s-1.335.117-1.92.375zm-2.39 2.599c0 .961.797 1.732 1.733 1.732.96 0 1.757-.771 1.757-1.732 0-.96-.797-1.733-1.757-1.733-.936 0-1.733.773-1.733 1.733zm10.399 5.739c.352 0 .562.047.562.047s-.586.538-1.616.937c-.445.163-.819.21-1.101.21-.398 0-.609-.07-.609-.07s.516-.515 1.476-.889a3.47 3.47 0 011.288-.235zm-4.426-5.739c0-.515.397-.913.913-.913.492 0 .89.398.89.913 0 .492-.397.914-.89.914a.915.915 0 01-.913-.914zM20.01 12s-.047-.304-.047-.796c0-.421.023-.983.187-1.592.328-1.382 1.288-2.225 1.288-2.225s.047.281.047.726c0 .469-.047 1.125-.233 1.874C20.899 11.438 20.01 12 20.01 12zm1.99-.656s-.234 1.077-1.101 2.318c-.843 1.219-1.897 1.406-1.897 1.406s.188-1.008.984-2.154c.796-1.148 2.014-1.57 2.014-1.57zM6.122 17.34c-.094 0-1.124-.023-2.155-.984-1.101-1.006-1.545-2.037-1.545-2.037s1.288.164 2.295 1.125c1.03.958 1.405 1.896 1.405 1.896zm2.553 1.428s-.211.07-.609.07c-.281 0-.655-.047-1.101-.21-1.03-.398-1.616-.937-1.616-.937s.211-.047.562-.047.819.047 1.288.234c.96.375 1.476.89 1.476.89zm-5.574-5.106C2.234 12.445 2 11.344 2 11.344s1.218.422 2.014 1.57c.797 1.146.984 2.154.984 2.154s-1.055-.187-1.897-1.406zm1.475-2.271c0-4.098 3.325-7.424 7.424-7.424s7.447 3.326 7.447 7.424c0 4.123-3.349 7.447-7.447 7.447s-7.424-3.348-7.424-7.447zm.82 0c0 3.654 2.951 6.605 6.604 6.605s6.604-2.951 6.604-6.605c0-3.653-2.951-6.604-6.604-6.604s-6.604 2.951-6.604 6.604zM2.749 9.986a7.788 7.788 0 01-.233-1.874c0-.445.047-.726.047-.726s.96.843 1.287 2.225c.164.609.188 1.171.188 1.592-.001.493-.048.797-.048.797s-.889-.562-1.241-2.014zm5.645 9.532s.749-.469 1.569-.469c.726 0 1.218.211 1.218.211s-.445.422-1.312.469h-.14c-.797 0-1.335-.211-1.335-.211zm5.643-.469c.82 0 1.569.469 1.569.469s-.538.211-1.335.211h-.141c-.866-.047-1.312-.469-1.312-.469s.494-.211 1.219-.211zm-2.459.562c0-.234.188-.422.422-.422s.422.188.422.422-.188.422-.422.422-.422-.187-.422-.422z"></path></svg>
                          <div className='info-awards-text-span-box'>
                            <span className='info-about-h3 span'>{item.award_spn}</span>
                            <p className='info-about-p year'>{item.award_p}</p>
                          </div>
                        </div>
                      </div>

                      <div className='info-about-languages'>

                      <h3 className='info-about-h3 lang'>{item.lang_h3}</h3>
                        <div className='info-about-languages-div'>{item.lang_p}</div>
                      </div>

                    </div>

                  </div>

                  {(item.feat_h3) &&
                    <>
                      <h3 className='info-about-h3'>{item.feat_h3}</h3>

                      <ul className='info-about-featured-ul'>
                        <li className='info-about-featured-li'><p className='info-about-p li'>{item.feat_p1}</p></li>
                        <li className='info-about-featured-li'><p className='info-about-p li'>{item.feat_p2}</p></li>
                        <li className='info-about-featured-li'><p className='info-about-p li'>{item.feat_p3}</p></li>
                      </ul>
                    </>
                  }

                  <h3 className='info-about-h3'>{item.expt_h3}</h3>

                  {(item.expt_it) &&
                    <>
                      <h2 className='info-about-h2'>Itinerario</h2>
                      <p className='info-about-p feat'>{item.expt_it}</p>
                    </>
                  }
                  {(item.expt_goes) &&
                    <h2 className='info-about-h2 feat'>Pasa por: &nbsp;<span className='info-about-span'>{item.expt_goes}</span></h2>
                  }
                  {(item.expt_stp1) &&
                    <>
                      <h2 className='info-about-h2 feat'>Para en: &nbsp;<span className='info-about-span'>{item.expt_stp1}</span></h2>
                      <p className='info-about-p feat'>{item.expt_stp1p}</p>
                      <p className='info-about-p feat'>Duración: {item.expt_last1}</p>
                    </>
                  }
                  {(item.expt_stp2) &&
                    <>
                      <h2 className='info-about-h2 feat'>Para en: &nbsp;<span className='info-about-span'>{item.expt_stp2}</span></h2>
                      <p className='info-about-p feat'>{item.expt_stp2p}</p>
                      <p className='info-about-p feat'>Duración: {item.expt_last2}</p>
                    </>
                  }

                  {(item.expt_p && item.expt_p.length > 520) ? 

                    <p className='info-about-p pre'>
                      { (readMore) ? item.expt_p : item.expt_p.substring(0, 520) + '...' }

                      <button className='info-about-readmore-btn' 
                              onClick={() => setReadMore(!readMore)}
                      >
                        {(readMore) ? 'Leer menos' : 'Leer más'}
                      </button>     
                    </p>
                    
                  : 
                    <p className='info-about-p pre'>{item.expt_p}</p>
                  }


                  <button className='info-about-btn'>Ver más información</button>

                </div>
              )

            }
          })
      }
    </div>
  )
}


InfoAbout.defaultProps = {}

export default InfoAbout