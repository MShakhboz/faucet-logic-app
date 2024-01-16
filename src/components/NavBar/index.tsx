import { memo } from "react";
import NavBarItem from "./NavBarItem";

const NAV_BARS = [
    { name: "Dashboard", url: "/dashboard", id: "dashboard" },
    { name: "Trade", url: "/trade", id: "trade" },
    { name: "Earn", url: "/earn", id: "earn" },
    { name: "Faucet", url: "/", id: "faucet" },
    { name: "Docs", url: "docs", id: "docs" },
    { name: "More", url: "more", id: "more" },
];

const NavBar = () => {
    return (
        <div className="h-full">
            <ul
                className={
                    "flex flex-row gap-x-7 items-center justify-center h-full"
                }
            >
                {NAV_BARS.map((elem) => (
                    <NavBarItem elem={elem} />
                ))}
            </ul>
        </div>
    );
};

export default memo(NavBar);
