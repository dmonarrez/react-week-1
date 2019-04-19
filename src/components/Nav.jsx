import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/styles.scss';
import zillowLogo2 from '../assets/images/zillowLogo2.png';

function Nav(){
  let navStyles = {

  }
  return (
    <div className="nav">
    <style jsx>{`
      a {
        text-decoration: none;
        color: black;
        padding: 10px;
      }

      .nav {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        text-align: center;
        align-items: center;
        height: 10vh;
        padding-left: 50px;
        padding-right: 50px;

      }

      #nav-logo {
        width: 130px;
      }
    `}</style>

      <div className="nav-left">
        <a href="#">Buy</a>
        <a href="#">Rent</a>
        <a href="#">Sell</a>
        <a href="#">Mortgages</a>
        <a href="#">Agent Finder</a>
      </div>

      <div className="nav-center">
        <img id="nav-logo" src={zillowLogo2} alt="zillow logo"></img>
      </div>

      <div className="nav-right">
        <a href="#">List your rental</a>
        <a href="#">Advertise</a>
        <a href="#">Sign in or join</a>
        <a href="#">Help</a>
      </div>
    </div>

    // <div>
    //   <h1 className='bg-grn header'>Help Queue!</h1>
    //   <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
    // </div>
  );
}

export default Nav;
