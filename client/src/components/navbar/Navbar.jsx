//Se va a crear la funcion de la barra de navegacion 
import "./navbar.css"

const Navbar = () => {
    return (
        <div  className="navbar">
            <div className="navContainer">
                <span className="logo">BookCR</span>
                <div className="navItems">
                    <button className="navButton">Login</button>
                    <button className="navButton">Register</button>
                </div>
            </div>
        </div>
    )
} 
export default Navbar