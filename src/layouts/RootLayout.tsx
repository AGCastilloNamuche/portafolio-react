import { Outlet } from "react-router"
import { HorizontalNav, Footer } from "../components/"
import navItems from "../navigation"
const RootLayout = () => {
    return (
        <div className="container-root-layout">
            <HorizontalNav navItems={navItems} />
            <div className="animated-background-container">
                <div className="heroGradient"></div>
            </div>
            <div className="layout-page">
                <main className="layout-page-content">
                    <Outlet />
                </main>
            </div>
            <Footer navItems={navItems} />
        </div>
    )
}

export default RootLayout
