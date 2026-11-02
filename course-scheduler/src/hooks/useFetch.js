import { useState, useEffect} from 'react'

function useFetch(url){
    const [data, setData] = useState(null)
    const[isPending, setIsPending] = useState(true)
    const[error, setError] = useState(null)

    useEffect(()=>{
        const timer = setTimeout(() => {
            fetch(url)
                .then(resp => {
                    if(!resp.ok){
                        throw new Error(`HTTP error: ${resp.status}`)
                    }
                    return resp.json()
                })
                .then(data => {
                    setData(data)
                    setIsPending(false)
                    setError(null)
                })
                .catch(err => {
                    setError(err.message)
                    setIsPending(false)
                })
        }, 2000)
        return () => clearTimeout(timer)
    }, [url])
    return {data, isPending, error}
}
export default useFetch