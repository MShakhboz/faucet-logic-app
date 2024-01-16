import { memo } from "react";

import settingsIcon from "assets/images/settings_button.png";
import { Props } from "./type";
import Button from "components/Button";

const SettingsButton = ({ width_s, height_s }: Props) => {
    return (
        <>
            <div className="flex flex-row gap-x-4">
                <img
                    src={settingsIcon}
                    alt={"Settings"}
                    width={width_s}
                    height={height_s}
                />
                <Button
                    title={"Connect Wallet"}
                    onClick={() => console.log("Connect Wallet")}
                />
            </div>
        </>
    );
};

export default memo(SettingsButton);
