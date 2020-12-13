import {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
//import Product from '../Components/Product'
import './style.css'
import Loader from '../Components/Loader'

function SpecificProduct(props){

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

    let content = null

    if(products.loading){
        content = <Loader></Loader>
    }

    if(products.data){
      if(products.rank[0] == props.products.rank){
          return( 
            <div className="w-full h-64 bg-blue bg-cover">

            <img src={props.product.book_image} alt="this is car image" />
                            </div>
        )
      }
    }


}

export default SpecificProduct 