import React from 'react'
import '../css/header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <div className="container">
        <div className="inner-content">
            <Link className="brand" to={'/'}>İzlenecekler</Link>
            <ul className='nav-links'>
                <Link className='style first' to={"/watched"}>İzlenenler</Link>
                <Link to={"/add"}>
                    <i className='fas fa-plus style seckond'></i>
                </Link>
            </ul>
        </div>

    </div>
    
    </>
  )
}

export default Header