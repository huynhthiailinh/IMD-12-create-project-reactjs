import React from 'react'
import styled from 'styled-components'
import logo from '../../logo.png';

const Navbar = () => {
    return (
        <NavbarContrainer>
            <nav className="navbar navbar-expand-lg navbar-light">
              <a className="navbar-brand "href="#"><img style={{width: '50px'}} src={logo} alt="logo"/></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      
      <li className="nav-item active">
        <a className="nav-link" href="#">Ban Chủ Nhiệm<span className="sr-only">(current)</span></a>
      </li>

      <li className="nav-item active">
        <a className="nav-link" href="#">Ban Chấp Hành<span className="sr-only">(current)</span></a>
      </li>
      
      <li className="nav-item active">
        <a className="nav-link" href="#">Chi đoàn<span className="sr-only">(current)</span></a>
      </li>

      <li className="nav-item active">
        <a className="nav-link" href="#">Sự kiện<span className="sr-only">(current)</span></a>
      </li>
      
      <li className="nav-item active">
        <a className="nav-link" href="#">Thi đua<span className="sr-only">(current)</span></a>
      </li>

      <li className="nav-item active">
        <a className="nav-link" href="#">Liên lạc<span className="sr-only">(current)</span></a>
      </li>

      <li>
        <div>
          <span class="icon"><i class='fa fa-search'></i></span>
          <input type="search" placeholder="Tìm kiếm..." style={{width: "100px"}}></input>
        </div>
      </li>
    </ul>
  </div>
</nav>
        </NavbarContrainer>
    )
}

export default Navbar

//Main navbar container
const NavbarContrainer = styled.div`
    background: var(--dark-green);
    color: white;
    .nav-link {
        color: #fff !important;
        &:hover {
            background: var(--light-green);
        }
    }
`;
