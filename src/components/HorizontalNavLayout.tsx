import { Link } from "react-router";
import type { NavItem } from "../navigation";

type Props = {
    navItems: readonly NavItem[]
}

const HorizontalNavLayout = ({ navItems }: Props) => {

    return (
        <div className="layout-navbar-and-nav-container">
            <div className="layout-navbar">
                <header className="navbar-content-container">
                    <div className="navbar-container">
                        <div className="container-logo">
                            <h2>ACN</h2>
                        </div>
                        <nav className="navbar-content">
                            <ul className="nav-items">
                                {
                                    navItems.map((item) => (
                                        <li key={item.href}>
                                            <Link to={item.href}>{item.name}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>

                        <div className="container-button">
                            <button className="btn btn-gradient-primary">Descargar CV</button>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
};

export default HorizontalNavLayout;
