import classNames from "classnames";
import { Props } from "./type";
import { memo } from "react";

const Button = ({ className, onClick, title, ...props }: Props) => {
    return (
        <button
            className={classNames(
                "outline-none border-green-light bg-green rounded-[32px] px-3 py-1 border text-white",
                className
            )}
            onClick={onClick}
            {...props}
        >
            {title}
        </button>
    );
};

export default memo(Button);
