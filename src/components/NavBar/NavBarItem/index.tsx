import { memo } from "react";
import { NavLink } from "react-router-dom";

const regular_style =
    "inline-flex h-full justify-center items-center uppercase text-[10px]";

const NavBarItem = ({ elem }: { elem: { url: string; name: string } }) => {
    return (
        <li className="h-full flex justify-center items-center">
            <NavLink
                to={elem?.url}
                className={({ ...props }) =>
                    props.isActive
                        ? `${regular_style} text-white border-b-2`
                        : `${regular_style} text-text-secondary hover:text-white  hover:border-b-2`
                }
            >
                {elem?.name}
            </NavLink>
        </li>
    );
};

export default memo(NavBarItem);
