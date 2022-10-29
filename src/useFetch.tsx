import { useEffect, useState } from "react"
export function useFetch(url: string){
  const [data, setData] = useState<any | null>([])

  useEffect(() => {
    fetch(url)
    .then(res => {
      return res.json()
    })
    .then(data => {
      setData(data)
      console.log(data)
    })
  }, [url])

  return { data }
}