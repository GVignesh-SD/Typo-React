import { FaBars, FaTimes } from "react-icons/fa";
import './NavBar.css'
import { useRef } from "react";
function Navbar() {
	const navRef = useRef(null);
    function handleClick() {
        const navClass = navRef.current.className;
        if(navClass == "nav-bar")
        {
            navRef.current.className="nav-bar active";
            console.log(navRef.current.className);

        }
        else{
            navRef.current.className="nav-bar";
            console.log(navRef.current.className);
        }
      }
	return (
            <header className="navigate">
                <div className="logo">Brand Name</div>
                <div className="hamburger" onClick={handleClick}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <nav className="nav-bar" ref={navRef}>
                    <ul>
                        <li><a href="#home" className="active">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="http://localhost:5173/gallery">Gallery</a></li>
                        <li><a href="http://localhost:5173/admin">Admin</a></li>
                        <li><a href="http://localhost:5173/login">Login</a></li>
                    </ul>
                </nav>
            </header>

	);
}

export default Navbar;