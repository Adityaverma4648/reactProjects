// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {
  return (
    <div className="App">
       <header className="container-fluid">
          <nav className ="row">
             <div className="logo h3 col-sm-2">
                ToursPage
             </div>
             <ul className="navlists col-sm-8">
               <li className="navlinks">
                  <a href="index.html" className="links text-decoration-none h5">
                     Home
                  </a>
               </li>
               <li className="navlinks">
                  <a href="index.html" className="links text-decoration-none h5">
                     About
                  </a>
               </li>
               <li className="navlinks">
                  <a href="index.html" className="links text-decoration-none h5">
                     Services
                  </a>
               </li>
               <li className="navlinks">
                  <a href="index.html" className="links text-decoration-none h5">
                     Contacts
                  </a>
               </li>
               <li className="navlinks">
                  <a href="index.html" className="links text-decoration-none h5">
                     Ratings
                  </a>
               </li>
             </ul>
             <div className="col-sm-1 d-flex justify-content-center align-items-center text-white">
                 {/* <FontAwesomeIcon icon="bars" /> */}
             </div>
          </nav>
            <div className="container h1 headline">
               Explore The World With Us! 
            </div>
       </header>
       <section className="attract">
           <div className="text-secondary row Cont">
              <div className="cont-animate rollnow bg-warning">
               001
              </div>
              <div className="cont-animate rollnow">
              </div>
              <div className="cont-animate rollnow">
              </div>
              <div className="cont-animate rollnow">
              </div>
              <div className="cont-animate rollnow">
              </div>
              <div className="cont-animate rollnow">
              </div>
              <div className="cont-animate rollnow">
              </div>
              <div className="cont-animate rollnow">
              </div>
              <div className="cont-animate rollnow">
              </div>
              <div className="cont-animate rollnow">
              </div>
           </div>
       </section>
       <section className="shadow text-white">
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis repudiandae sit maiores vero, dolorum iure cum, unde natus hic quisquam et ipsam. Omnis suscipit assumenda amet accusantium eos, perspiciatis reprehenderit quisquam voluptates magni. Possimus minus nisi tempore repellat, quia illo incidunt nesciunt et at ab adipisci dolor sapiente repellendus explicabo dolorum nam cupiditate, accusamus reiciendis harum facere! Non a repudiandae doloremque doloribus culpa molestiae corrupti ratione sapiente.
       </section>
    </div>
  );
}

export default App;
