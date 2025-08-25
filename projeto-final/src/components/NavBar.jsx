import React from "react";
import './css/NavBar.css'


//importar imagem
import logo from '../assets/airbnb.svg'
export default function NavBar() {
    return(
        <div>
     <nav className="nav-topo">
        <div className='container-airbnb'>
            <div className="col-sm-6">
                <img className="logo" src={logo} alt="logo do site"/>
            </div>
            <div className="col-sm-6">
                <button>
                    teste
                </button>
            </div>
        </div>
     </nav>
        </div>
    )
}