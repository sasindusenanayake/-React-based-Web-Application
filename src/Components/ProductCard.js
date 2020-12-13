import React from 'react'
import {Link} from 'react-router-dom'
//import Product from '../Components/Product'
import './style.css'

function ProductCard(props){
    return (
        <div className= "border mb-4 rounded overflow-hidden">
            
                <div className="w-full h-64 bg-blue bg-cover">

<img src={props.product.book_image} alt="this is car image" />
                </div>
        

            <div className="p-3">
                <h3 className="font-bold text-xl mb-3">

          


             <Link to={`/SpecificProduct/${props.product.rank}`}>
                    
                        { props.product.title }
                    </Link>    
                </h3>
                <div className="font-bold mb-3"> 
                    $ { props.product.price }
                </div>
                <div className="mb-3">
                    { props.product.author }
                </div>
                <Link 
                    to={`/products/${props.product.rank}`}
                    className="bg-blue-500 text-white p-2 flex justify-center w-full"
                >
                    View
                </Link>
            </div>
        </div>
    )
}

export default ProductCard