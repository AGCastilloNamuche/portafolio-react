import { Outlet } from "react-router"
import { HorizontalNav, RadialCanvas } from "../components/"
import navItems from "../navigation"
const RootLayout = () => {
    return (
        <div className="container-root-layout">
            <HorizontalNav navItems={navItems} />
            {/* <div className="hero">
                <div className="mask"></div>
                <div className="holder">
                    <RadialCanvas />
                </div>
            </div> */}
            <div className="animated-background-container">
                <div className="heroGradient"></div>
            </div>
            <div className="layout-page">
                <main className="layout-page-content">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default RootLayout
