import React from 'react'
import './Login.css'
import avatar from './avatar.svg'
import bg from './bg.svg'
import wave from './wave.png'




function Login() {

    const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

  return (
    <div className="login">
      <img class="wave" src={wave} />
      <div class="container">
        <div class="img">
          <img src={bg} />
        </div>
        <div class="login-content">
          <form action="index.html">
            <img src={avatar} />
            <h2 class="title">Welcome</h2>
            <div class="input-div one">
              <div class="i">
                <i class="fas fa-user"></i>
              </div>
              <div class="div">
                {/* <h5>Username</h5> */}
                <input type="text" class="input" />
              </div>
            </div>
            <div class="input-div pass">
              <div class="i">
                <i class="fas fa-lock"></i>
              </div>
              <div class="div">
                {/* <h5>Password</h5> */}
                <input type="password" class="input" />
              </div>
            </div>
            <a href="#">Forgot Password?</a>
            <input type="submit" class="btn" value="Login" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login