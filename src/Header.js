import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component{
	render(){
		return(
      <div className="header">
        <nav>
          <ul>
           <li><Link to="/"><img src={require("./github-mark.png")} alt="logo" /></Link></li>
           <li><Link to="/">Features</Link></li>
           <li><Link to="/">Business</Link></li>
           <li><Link to="/">Explore</Link></li>
           <li><Link to="/">Marketplace</Link></li>
           <li><Link to="/">Pricing</Link></li>
        
        <div className="search">
        <ul>
        <input type="text" placeholder="Search Github" />
          <li><Link to="/"><h3>Sign in</h3></Link></li>
          <li><Link to="/"><h3>Sign up</h3></Link></li>
        </ul  >
        </div>

        </ul>
        </nav>
      </div>   
      );
	}
}

export default Header;