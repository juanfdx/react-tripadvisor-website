import './TripAdvisor.css'

import { useContext } from 'react'
import GlobalContext from '../../context/GlobalContext'

import Advertisement from '../../components/Advertisement/Advertisement'
import Header from '../../components/Header/Header'
import Options from '../../components/Options/Options'
import Search from '../../components/Search/Search'
import Slider from '../../components/Slider/Slider'
import BestChoice from '../../components/BestChoice/BestChoice'
import Footer from '../../components/Footer/Footer'


const TripAdvisor = () => {

  const {tripadvisor} = useContext(GlobalContext)
  const {attraction, restaurant, guidebook, places, legal, banners } = tripadvisor

  return (
    <div>
      <Advertisement info={banners} />
      <Header isSticky={true} />
      <Options />
      <Search />
      <Slider info={attraction} />
      <Slider info={restaurant} />
      <Slider info={guidebook} />
      <Slider info={places} />
      <BestChoice />
      <Footer info={legal} />
    </div>
  )
}


TripAdvisor.defaultProps = {}

export default TripAdvisor