import {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader'
import { useAxiosGet } from '../Hooks/HttpRequests'
//import ProductCard from '../Components/ProductCard'

function Product(){
    const { rank } = useParams()
    
     const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=VHUL3fVL1TA3R8AsUU1Q03RfG7LIncCl/${rank}`
    
     const [product, setRequest] = useState({
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
                console.log(response);
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
    }, []) 
   // let product = useAxiosGet(url)
    let content = null

  /*  if(product.error){
        content = <div>
          
            <div className="bg-red-300 p-3">
                There was an error please refresh or try again later.
            </div>
        </div>
    } */

    if(product.loading){
        content = <Loader></Loader>
    }

    if(product.data){
        content =  product.data.map((productss) =>  
        <div>
            <h1 className="text-2xl font-bold mb-3">
                {productss.data.title}
            </h1>
            <div>
                <img
                    src={productss.data.book_image}
                    alt="this is image"
                />
            </div>
            <div className="font-bold text-xl mb-3">
                $ {productss.data.price}
            </div>
            <div>
                {productss.data.author}
            </div>
        </div>
        )}

    return (
        <div className="container mx-auto">
            {content}
        </div>
    )
}

export default Product