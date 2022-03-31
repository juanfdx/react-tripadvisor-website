import './App.css'
import GlobalContext from './context/GlobalContext'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useFetch from './hooks/useFetch'

import TripAdvisor from './pages/TripAdvisor/TripAdvisor'
import Attraction from './pages/Attraction/Attraction';
import Restaurant from './pages/Restaurant/Restaurant';
import Guidebook from './pages/Guidebook/Guidebook';
import Places from './pages/Places/Places';


const base_url = import.meta.env.VITE_BASE_URL


function App() {

  /*-----  si conectamos a api  -----*/
  const {info, error, isLoading} = useFetch(base_url)
  if (isLoading) {
    return <div>Loading..</div>
  }
  if (error) {
    return <div>{error}</div>
  }
  const {tripadvisor} = info
  

  return (

    <>
      {(Object.keys(info).length !== 0 ) && 

       <BrowserRouter>    
        <GlobalContext.Provider value={{ tripadvisor }}>

          <div className="App">
            <Routes>
              <Route path="/" element={ <TripAdvisor /> } />
              <Route path="attraction/:name" element={ <Attraction /> } />
              <Route path="restaurant/:name" element={ <Restaurant /> } />
              <Route path="guidebook/:name" element={ <Guidebook /> } />
              <Route path="places/:name" element={ <Places /> } />
            </Routes>
          </div>

        </GlobalContext.Provider>
       </BrowserRouter>
          
      }
    </>
  )


}

export default App
