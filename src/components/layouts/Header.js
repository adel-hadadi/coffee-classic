import {Link} from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <header>
            <Link to="/" className="logo">Coffee Classic</Link>

            <section>
                <ul className="menu-links">
                    <li>
                        <Link to="/home">خانه</Link>
                    </li>
                    <li>
                        <Link to="/home">خانه</Link>
                    </li>
                    <li>
                        <Link to="/home">خانه</Link>
                    </li>
                    <li>
                        <Link to="/home">خانه</Link>
                    </li>
                </ul>
            </section>
        </header>
    )
}

export default Header;