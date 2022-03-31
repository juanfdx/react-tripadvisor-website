import { useEffect, useState } from "react"


const useFetch = (endpoint) => {

  const [info, setInfo] = useState([])
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
 
  const fetchData = async () => {

    setIsLoading(true)
    try {
      const response = await fetch(endpoint, {
                                        headers : {
                                          'Authorization' : import.meta.env.VITE_API_KEY,
                                        } 
                                      })
                        
      const data     = await response.json()
      setInfo(data)
      setIsLoading(false)
      
    } catch (error) {
      console.warn("Sorry, something went wrong.");
      setError("Sorry, something went wrong.")
      setIsLoading(false)
    }
  }

  useEffect(() => {  
    fetchData()
  }, [])
  

  return { info, error, isLoading }

}

export default useFetch