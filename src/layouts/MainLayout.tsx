import { Footer, Header } from "components";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="px-3 pb-2 flex-grow">
                <Header />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
