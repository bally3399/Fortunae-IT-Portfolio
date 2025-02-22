import Navbar from "../navbar";
import {Outlet} from "react-router-dom";
import Footer from "../footer";
import "./Layout.css";

const Layout = () =>{
    return (
        <div className="layout-container">
            <Navbar/>
            <main className="layout-content">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default Layout;