import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './body1.css';

class Body1 extends Component{
	render(){
		return(
			<div>

			<div className="form">
			<form>
			Username
			<br/>
			<input size="30" type="text" placeholder="Pick a Username" />
			<br/><br/>
			Email
			<br/>
			<input size="30" type="text" placeholder="you@example.com" />
			<br/><br/>
			Password
			<br/>
			<input size="30" type="password" placeholder="Create a Password" />
			<br/>
			<p>Use at least one letter, one numeral, and seven characters.</p>
			<button class="button">Sign up for GitHub</button>
			<p class="formtext">By clicking “Sign up for GitHub”, you agree to our <a class="link" href="/">terms of service</a> and <a class="link" href="/">privacy statement</a>. We’ll occasionally send you account related emails.</p>
			</form>
			</div>

			<div className="text">
			<h1>Built for developers</h1>
			<br/>
			<h3>GitHub is a development platform inspired by the way you work. From <a href="/">open source</a> to <a href="/">business</a>, you can host and review code, manage projects, and build software alongside millions of other developers. </h3>
			</div>

			</div>
			);
	}
}

export default Body1;