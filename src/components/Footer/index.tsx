import { memo } from "react";

const BRIEF_INFO = [
    { title: "Stable Connection" },
    { title: "Response Time Name holder (xxxms)" },
    { title: "XX,XXX TPS" },
    { title: "Average Gas Prices:" },
];

const Footer = () => {
    return (
        <div className="w-full">
            <div className="w-full flex">
                {BRIEF_INFO.map((elm: any) => (
                    <div className="px-2 border-r border-black-slight last:border-none">
                        <p className="text-text-secondary text-[10px] ">
                            {elm?.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default memo(Footer);
