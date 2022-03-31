import './Article.css'
import { NavLink } from "react-router-dom";

const Article = ({articles, anchoCard, type }) => {

  const handleLike = (id, value) => {
    // console.log(`votos ${value}`);
  }

  return (
    <>
      {
        articles.map((item, i) => 
          
          <article key={item.id} className='slider-article' style={{ width : `${anchoCard}%`}}>
            
                <button className={`slider-like-btn ${(type === 1) ? 'show' : ''}`}
                        onClick={() => handleLike(item.id, item.votes)}        
                >
                  <svg viewBox="0 0 24 24" width="24px" height="24px" className="bDFSd d Vb ymbyq"><path d="M12.001 20.729s-6.741-5.85-8.485-8.003c-2.055-2.541-2.018-5.837.089-7.836a5.928 5.928 0 014.104-1.618c1.548 0 3.005.575 4.104 1.618l.174.165.162-.155a5.93 5.93 0 014.104-1.618c1.548 0 3.005.574 4.104 1.618 2.158 2.049 2.192 5.273.084 7.841-1.755 2.139-8.44 7.988-8.44 7.988zM7.709 5.271a3.935 3.935 0 00-2.727 1.068c-1.578 1.498-1.06 3.708.088 5.128 1.306 1.613 5.333 5.204 6.925 6.605 1.583-1.404 5.58-4.993 6.899-6.601 1.195-1.455 1.685-3.603.085-5.122-.726-.689-1.694-1.069-2.728-1.069s-2.001.38-2.728 1.069l-1.539 1.462-1.551-1.473a3.925 3.925 0 00-2.724-1.067z"></path></svg>
                </button>

            <NavLink to={(item.class === 1) ? `/attraction/${item.name}` : 
                         (item.class === 2) ? `` : 
                         (item.class === 3) ? `` : ``} 
                     className='slider-card'>
              
              <div className='slider-img-container'>
             
              { (item.top_best) ?
                       
                <button className={`slider-sello-btn ${(type === 1) ? 'show' : ''}`}
                        style={{ color : item.stamp }}
                >
                  <svg className="TSNHX" viewBox="0 0 33 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path className="byjaN" d="M32.9971 16.812C32.999 16.7082 33 16.6042 33 16.5C33 7.3873 25.6127 0 16.5 0C7.3873 0 0 7.3873 0 16.5C0 16.6042 0.000966238 16.7082 0.00289024 16.812C0.00096811 16.8744 0 16.9371 0 17V38C0 41.3137 2.68629 44 6 44H27C30.3137 44 33 41.3137 33 38V17C33 16.9371 32.999 16.8744 32.9971 16.812Z"></path><text x="3" y="39" direction="ltr" className="pgvmZ We">2021</text></svg>  

                  <div className="slider-sello">
                    <svg viewBox="0 0 24 24"  className="bDFSd d Vb ymbyq"><path d="M19.283 15.443c1.007-.961 2.295-1.125 2.295-1.125s-.444 1.008-1.545 2.037c-1.031.961-2.062.984-2.155.984 0 .001.375-.937 1.405-1.896zM8.534 11.906c0-.515.397-.913.89-.913.516 0 .913.398.913.913a.914.914 0 01-.913.914c-.492 0-.89-.422-.89-.914zm-1.663 0c0-.75.328-1.428.843-1.897l-.843-.913h1.851a5.833 5.833 0 016.556 0h1.851l-.843.913c.515.469.843 1.125.843 1.874a2.563 2.563 0 01-2.553 2.576c-.68 0-1.288-.258-1.757-.68L12 14.67l-.819-.891a2.606 2.606 0 01-1.757.68 2.559 2.559 0 01-2.553-2.553zm7.682-1.733c-.937 0-1.733.773-1.733 1.733 0 .961.797 1.732 1.733 1.732.96 0 1.757-.771 1.757-1.732 0-.96-.797-1.733-1.757-1.733zm-4.473-.866c1.101.422 1.92 1.405 1.92 2.552 0-1.147.819-2.131 1.92-2.553-.585-.257-1.241-.374-1.92-.374s-1.335.117-1.92.375zm-2.39 2.599c0 .961.797 1.732 1.733 1.732.96 0 1.757-.771 1.757-1.732 0-.96-.797-1.733-1.757-1.733-.936 0-1.733.773-1.733 1.733zm10.399 5.739c.352 0 .562.047.562.047s-.586.538-1.616.937c-.445.163-.819.21-1.101.21-.398 0-.609-.07-.609-.07s.516-.515 1.476-.889a3.47 3.47 0 011.288-.235zm-4.426-5.739c0-.515.397-.913.913-.913.492 0 .89.398.89.913 0 .492-.397.914-.89.914a.915.915 0 01-.913-.914zM20.01 12s-.047-.304-.047-.796c0-.421.023-.983.187-1.592.328-1.382 1.288-2.225 1.288-2.225s.047.281.047.726c0 .469-.047 1.125-.233 1.874C20.899 11.438 20.01 12 20.01 12zm1.99-.656s-.234 1.077-1.101 2.318c-.843 1.219-1.897 1.406-1.897 1.406s.188-1.008.984-2.154c.796-1.148 2.014-1.57 2.014-1.57zM6.122 17.34c-.094 0-1.124-.023-2.155-.984-1.101-1.006-1.545-2.037-1.545-2.037s1.288.164 2.295 1.125c1.03.958 1.405 1.896 1.405 1.896zm2.553 1.428s-.211.07-.609.07c-.281 0-.655-.047-1.101-.21-1.03-.398-1.616-.937-1.616-.937s.211-.047.562-.047.819.047 1.288.234c.96.375 1.476.89 1.476.89zm-5.574-5.106C2.234 12.445 2 11.344 2 11.344s1.218.422 2.014 1.57c.797 1.146.984 2.154.984 2.154s-1.055-.187-1.897-1.406zm1.475-2.271c0-4.098 3.325-7.424 7.424-7.424s7.447 3.326 7.447 7.424c0 4.123-3.349 7.447-7.447 7.447s-7.424-3.348-7.424-7.447zm.82 0c0 3.654 2.951 6.605 6.604 6.605s6.604-2.951 6.604-6.605c0-3.653-2.951-6.604-6.604-6.604s-6.604 2.951-6.604 6.604zM2.749 9.986a7.788 7.788 0 01-.233-1.874c0-.445.047-.726.047-.726s.96.843 1.287 2.225c.164.609.188 1.171.188 1.592-.001.493-.048.797-.048.797s-.889-.562-1.241-2.014zm5.645 9.532s.749-.469 1.569-.469c.726 0 1.218.211 1.218.211s-.445.422-1.312.469h-.14c-.797 0-1.335-.211-1.335-.211zm5.643-.469c.82 0 1.569.469 1.569.469s-.538.211-1.335.211h-.141c-.866-.047-1.312-.469-1.312-.469s.494-.211 1.219-.211zm-2.459.562c0-.234.188-.422.422-.422s.422.188.422.422-.188.422-.422.422-.422-.187-.422-.422z"></path></svg>
                    <p className='slider-sello-p'>2021</p>
                  </div>          
                </button>
              :
                null
              }

                <p className={`slider-lugar ${(type === 3) ? 'show' : ''}`}>{item.city}, {item.country}</p>

                <img className='slider-img' src={item.image} loading="lazy" alt={item.alt} />

              </div>
            
              <div className={`slider-text-container ${(type === 1 || type === 2) ? 'show' : ''}`}>

                <span className={`slider-etiqueta ${(type === 1 && item.reminder) ? 'active' : ''}`}>SE AGOTA RÁPIDO</span>
                <h4 className='slider-description'>{item.title}</h4>
                
                <div className={`slider-score-svg ${(type === 1) ? 'show' : ''}`}>
                  <svg className="RWYkj d H0" viewBox="0 0 128 24" width="68" height="12" aria-label="" title=""><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform=""></path><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(26 0)"></path><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(52 0)"></path><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(78 0)"></path><path d="M 12 0C5.389 0 0 5.389 0 12c0 6.62 5.389 12 12 12 6.62 0 12-5.379 12-12S18.621 0 12 0zm0 2a9.984 9.984 0 0110 10 9.976 9.976 0 01-10 10z" transform="translate(104 0)"></path></svg>
                  <p className='slider-votos'>{item.votes}</p>
                </div>
                
                {item.price ? 
                  <p className={`slider-p ${(type === 1) ? 'show' : ''}`}>{item.price}</p>
                  :
                  <p className={`slider-small-p line-sm ${(type === 1) ? 'show' : ''}`}>{item.desc}</p>
                }
                
                <p className={`slider-small-p ${(type === 2) ? 'show' : ''}`}>{item.desc}</p>

              </div>

            </NavLink>
            
                <div className={`slider-profile ${(type === 2) ? 'show' : ''}`}>
                  <div className='slider-profile-img-box'>
                    <img className='slider-profile-img' src={item.thumbnail} loading="lazy" alt="perfil1" />
                  </div>
                  <div className='slider-profile-info'>
                    <span className='slider-profile-span'>De</span>
                    <a className='slider-profile-a' rel="nofollow" href="#">{item.nickname}</a>
                  </div>
                </div>

          </article>
        )
      }
    </>
  )
}


Article.defaultProps = {}


export default Article