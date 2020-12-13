import React from 'react'
import Navigation from './Navigation'
import {Link} from 'react-router-dom'
import './style.css'

function Header(){
    return (
        <header className="border-b p-3 flex justify-between items-center">
           
           <div class="sample-header">
  <div class="sample-header-section">
    <h1> Book Shop </h1>
    <h2>A huge selection of titles. Find your new favourite book today! </h2>
  </div>
</div>



          </header>
    )
}

export default Header