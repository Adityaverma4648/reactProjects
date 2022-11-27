import React from 'react'

const Header = () => {
  return (
    <div className='Header' style={{maxWidth :"100vw"}}>
         <header className="container-fluid">
          <nav className =" d-flex align-items-center row">
             <div className="logo h3 col-sm-2 d-flex justify-content-center align-items-center" style={{height:"60px"}}>
                ToursPage
             </div>
             <ul className="navlists d-flex align-items-center justify-content-end px-3 col-sm-10" style={{height:"60px"}}>
               <li className="navlinks px-3">
                  <a href="index.html" className="links text-decoration-none h5">
                     Home
                  </a>
               </li>
               <li className="navlinks px-3">
                  <a href="index.html" className="links text-decoration-none h5">
                     About
                  </a>
               </li>
               <li className="navlinks px-3">
                  <a href="index.html" className="links text-decoration-none h5">
                     Services
                  </a>
               </li>
               <li className="navlinks px-3">
                  <a href="index.html" className="links text-decoration-none h5">
                     Contacts
                  </a>
               </li>
               <li className="navlinks px-3">
                  <a href="index.html" className="links text-decoration-none h5">
                     Ratings
                  </a>
               </li>
             </ul>
             <div className="col-sm-1 d-flex justify-content-center align-items-center text-white">
                 {/* <FontAwesomeIcon icon="bars" /> */}
             </div>
          </nav>
       </header>
    </div>
  )
}

export default Header