import React, { useContext } from 'react'

import './navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const {setCurrency} = useContext(CoinContext);

  const currencyHandler = (event)=>{
    switch (event.target.value){
      case "usd":{
        setCurrency({name: "usd", symbol: "$"});
        break;
      }
      case "cad":{
        setCurrency({name: "cad", symbol: "$"});
        break;
      }
      case "eur":{
        setCurrency({name: "eur", symbol: "€"});
        break;
      }
      case "gbp":{
        setCurrency({name: "gbp", symbol: "£"});
        break;
      }
      default:{
        setCurrency({name: "cad", symbol: "$"});
        break;
      }
    }

  }

  return (
    <div className='navbar'>
        <Link to={`/`}>
        <img src={logo} alt='' className = 'logo'/>
        </Link>
        <ul>
            <Link to={`/`}><li>Home</li></Link>
            <li>Buy</li>
            <li>Blog</li>
        </ul>
        <div className="nav-right">
            <select onChange={currencyHandler}>
                <option value ="cad">CAD</option>
                <option value ="usd">USD</option>
                <option value ="eur">EUR</option>
                <option value ="gbp">GBP</option>
            </select>
        </div>
      
    </div>
  )
}

export default Navbar
