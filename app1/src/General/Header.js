import React from 'react';
import {FaSearch} from "react-icons/fa"

const Header = () => {

   const stick = (e)=>{
      var nav = document.querySelector("nav");
      nav.classList.toggle("top-0","position-fixed")
   }

  return (
    <div className='Header' style={{maxWidth :"100vw"}}>
         <header className="container-fluid">
          <nav className =" d-flex align-items-center row" onScroll={stick}>
             <div className="logo h3 col-sm-2 d-flex justify-content-center align-items-center" style={{height:"60px"}}>
                ToursPage
             </div>
             <ul className="navlists d-flex  flex-wrap align-items-center justify-content-end px-3 col-sm-10" style={{height:"60px"}}>
               <li className='SearchBtn'>
                    <FaSearch />
               </li>
               <li className="navlinks px-3">
                  <a href="index.html" className="links text-decoration-none h5">
                     aboutUs
                  </a>
               </li>
               <li className="navlinks px-3">
                  <a href="index.html" className="links text-decoration-none h5">
                     ourServices
                  </a>
               </li>
               <li className="navlinks px-3">
                  <a href="index.html" className="links text-decoration-none h5">
                     ourContacts
                  </a>
               </li>
               <li className="navlinks px-3">
                  <a href="index.html" className="links text-decoration-none h5">
                     ourRatings
                  </a>
               </li>
             </ul>
          </nav>
          <div className="contanier display-1 text-light d-flex align-items-center justify-content-center" style={{height  :"30vh",fontWeight : "600"}}>
                 Explore The World With Us!
          </div>

       </header>
    </div>
  )
}

export default Header