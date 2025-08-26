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
            <div className="d-flex align-items-center justify-content-end  col-sm-6">
                <a href="#" className="link-especial">Seja um anfitrião</a>
                <a href="#" className="icon-nav mx-2"><i className="mdi mdi-web"></i></a>
               

               <div className="dropdown ms-2">
  <a className="button-login dropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  <i className="fs-5 mdi mdi-menu ps-2 me-1"></i>
  <i className="fs-2 position-relative mdi mdi-account-circle pe-2">
      <span class="position-absolute top-0 start-50  badge border border-light rounded-circle bg-danger p-2"><span class="visually-hidden">unread messages</span></span>
  </i>
  </a>

  <ul style={{borderRadius: '15px'}} className="dropdown-menu mt-2 py-3 border-0 shadow">
    <li><a className="dropdown-item fw-bold p-2 px-3" href="#">cadastre-se</a></li>
    <li><a className="dropdown-item p-2 px-3" href="#">Entrar</a></li>
    <li><hr className="dropdown-divider"/></li>
    <li><a className="dropdown-item p-2 px-3" href="#">Hospede em sua acomodação </a></li>
     <li><a className="dropdown-item p-2 px-3" href="#">Hospede uma experiência </a></li>
       <li><a className="dropdown-item p-2 px-3" href="#">Ajuda </a></li>
  </ul>
</div>

    
            </div>
        </div>
     </nav>
        </div>
    )
}