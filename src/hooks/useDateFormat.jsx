import { useEffect, useState } from "react"


const useDateFormat = (lang) => {

  const [myDate, setMyDate] = useState({
    weekday : '',
    day     : '',
    month   : '',
    year    : ''
  })

  let date = new Date()
  
  const getTheDate = () => {

    let months = []
    let weekDays = []

    if (lang === 'es') {    
      months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
      weekDays = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    }
  
    if (lang === 'en') {    
      months = ['january','february','march','april','may','june','july','august','september','october','november','december'];
      weekDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    }

    setMyDate({ ...myDate,
      weekday : weekDays[date.getDay()].slice(0, 3),
      day     : date.getDate().toString(),
      month   : months[date.getMonth()].slice(0, 3),
      year    : date.getFullYear().toString()
    })
  }

  useEffect(() => {
    getTheDate()
  }, [])
  

  return myDate

}

export default useDateFormat