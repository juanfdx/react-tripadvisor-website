import './Restaurant.css'
import { useContext } from 'react'
import GlobalContext from '../../context/GlobalContext'

import Advertisement from '../../components/Advertisement/Advertisement'
import Header from '../../components/Header/Header'
import SubNav from '../../components/SubNav/SubNav'

const Restaurant = () => {

  const {tripadvisor} = useContext(GlobalContext)
  const { restaurant, legal, banners, subnav, allnames } = tripadvisor

  return (
    <div>
      <Advertisement info={banners} />
      <Header isSticky={false} />
      <SubNav info={subnav} allnames={allnames} page={'Restaurantes'} />
    </div>
  )

}

Restaurant.defaultProps = {}


export default Restaurant