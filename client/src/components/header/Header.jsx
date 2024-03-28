import "./header.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBed, faCar, faDice, faPlaneDeparture} from "@fortawesome/free-solid-svg-icons"
import { faPlane } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
    return (
        //Se agregan los elementos visuales del header que van a direccionar al usuario a su respectiva pagina
        <div className="header">
            <div className="headerContainer">

            <div className="headerList">
                <div className="headerListItem active">
                <FontAwesomeIcon icon={faBed} />
                <span>Stays</span>
                </div>

                <div className="headerListItem">
                <FontAwesomeIcon icon={faPlane} />
                <span>Flights</span>
                </div>

                <div className="headerListItem">
                <FontAwesomeIcon icon={faCar} />
                <span>Car rentals</span>
                </div>

                <div className="headerListItem">
                <FontAwesomeIcon icon={faDice} />
                <span>Attractions</span>
                </div>

                <div className="headerListItem">
                <FontAwesomeIcon icon={faPlaneDeparture} />
                <span>Airport Taxi</span>
                </div>
            </div>
            <h1 className="headerTitle">
            Find your next stay
            </h1>
            <p className="headerDescription">
            Search deals on hotels, homes, and much more...
            </p>
            <button className="headerBtn">
                Sign-in or Register
            </button>
        </div>
    </div>
    )
} 
export default Header