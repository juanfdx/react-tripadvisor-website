import './Attraction.css'
import { useContext } from 'react'
import GlobalContext from '../../context/GlobalContext'

import Advertisement from '../../components/Advertisement/Advertisement'
import Header from '../../components/Header/Header'
import SubNav from '../../components/SubNav/SubNav'
import SeeAllThingsTodo from '../../components/SeeAllThingsTodo/SeeAllThingsTodo'
import Breadcrums from '../../components/Breadcrums/Breadcrums'
import ElementTitle from '../../components/ElementTitle/ElementTitle'
import Labelvotes from '../../components/Labelvotes/Labelvotes'
import CheckSliderBox from '../../components/CheckSliderBox/CheckSliderBox'
import SummaryVisit from '../../components/SummaryVisit/SummaryVisit'
import InfoAbout from '../../components/InfoAbout/InfoAbout'
import Footer from '../../components/Footer/Footer'


const Attraction = () => {

  const {tripadvisor} = useContext(GlobalContext)
  const {attraction, legal, banners, subnav, allnames } = tripadvisor

  return (
    <div>
      <Advertisement info={banners} />
      <Header isSticky={false} />
      <SubNav info={subnav} allnames={allnames} page={'Qué hacer'} />
      <SeeAllThingsTodo />
      <Breadcrums info={attraction} />
      <ElementTitle info={attraction} />
      <Labelvotes info={attraction} />
      <CheckSliderBox info={attraction} />
      <SummaryVisit info={attraction} />
      <InfoAbout info={attraction} />
      <Footer info={legal} type={2}/>
    </div>
  )

}

Attraction.defaultProps = {}


export default Attraction