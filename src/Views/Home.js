import {useEffect, useState} from 'react'
import axios from 'axios'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'
import { useAxiosGet } from '../Hooks/HttpRequests'

function Home(){
    // Create your own Mock API: https://mockapi.io/
    const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=VHUL3fVL1TA3R8AsUU1Q03RfG7LIncCl`

    const [products, setRequest] = useState({
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



    console.log(" product2 ")
    console.log(products)

    let content = null

   /* if(products.error){
        content = <div>
           
            <div className="bg-red-300 p-3">
                There was an error please refresh or try again later.
            </div>
        </div>
    } */

    if(products.loading){
        content = <Loader></Loader>
    }

    if(products.data){
        content = products.data.map((product) => 
            <div key={product.rank} className="flex-no-shrink w-full md:w-1/4 md:px-3">
                <ProductCard 
                    product={product}
                />
            </div> 
           

        )
    }

    return (
        <div className="container mx-auto">
            
            <div className="md:flex flex-wrap md:-mx-3">
                { content } 
            </div>
        </div>
    )
}

export default Home