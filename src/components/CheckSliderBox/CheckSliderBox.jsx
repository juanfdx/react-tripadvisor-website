import Checkout from '../Checkout/Checkout'
import SliderSimple from '../SliderSimple/SliderSimple'
import './CheckSliderBox.css'


const CheckSliderBox = ({ info }) => {

  const { articles } = info

  return (
    <div className='section-checkSliderBox'>
      <div className='checkSliderBox-wrapper'>

        <Checkout articles={ articles } />

        <SliderSimple articles={ articles } />
      
      </div>
    </div>
  )
}


CheckSliderBox.defaultProps = {}

export default CheckSliderBox