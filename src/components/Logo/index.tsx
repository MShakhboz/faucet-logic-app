import { memo } from "react";

import logo from "assets/images/logo.png";
import classNames from "classnames";
import { Props } from "./type";

const Logo = ({ className, ...props }: Props) => (
    <img src={logo} alt={"Logo"} className={classNames("", className)} />
);

export default memo(Logo);
