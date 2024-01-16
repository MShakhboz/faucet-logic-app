import Button from "components/Button";
import Logo from "components/Logo";
import NavBar from "components/NavBar";
import SettingsButton from "components/SettingsButton";
import { memo } from "react";

const Header = () => {
    return (
        <div className="w-full m-h-[48px] flex justify-between py-2">
            <div className="flex">
                <div className="pr-4 border-r border-black-slight">
                    <Logo className="w-[92px] h-[48px]" />
                </div>
                <div className="pl-4">
                    <NavBar />
                </div>
            </div>
            <div className="flex justify-center items-center">
                <SettingsButton width_s={"32px"} height_s={"32px"} />
            </div>
        </div>
    );
};

export default memo(Header);
