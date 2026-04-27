
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
export default function DefaultLayout() {
    return (
        <div className="default-layout">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}



