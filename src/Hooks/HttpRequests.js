import {useEffect, useState} from 'react'
import axios from 'axios'

export function useAxiosGet(url){
    const [request , setRequest] = useState({
        loading: true,
        data: null,
        error: false
    })

    useEffect(() => {
        setRequest({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
            .then(response => {
                setRequest({
                    loading: true,
                    data: response.data.results.books,
                    error: false
                })
            })
            .catch(() => {
                setRequest({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url])

    return request
}