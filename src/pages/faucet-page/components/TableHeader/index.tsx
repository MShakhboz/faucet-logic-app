import { Button } from "components";
import { memo } from "react";

const TableHeader = () => {
    return (
        <>
            <th className="text-[10px] text-text-secondary pl-3 py-2 pr-2 rounded-l-md rounded-r-md text-start">
                Asset
            </th>
            <th className="text-[10px] text-text-secondary pl-3 py-2 pr-2 rounded-l-md rounded-r-md text-start">
                Mint amount
            </th>
            <th className="text-[10px] text-text-secondary pl-3 py-2 pr-2 rounded-l-md rounded-r-md text-start">
                My balance
            </th>
            <th className="text-[10px] text-text-secondary pl-3 py-2 pr-2 rounded-l-md rounded-r-md text-end">
                <Button
                    title={"Mint BTC and USDC"}
                    onClick={() => console.log("Mint BTC and USDC")}
                    className="!border-black-slight bg-transparent !text-text-secondary !h-[38px]"
                />
            </th>
        </>
    );
};

export default memo(TableHeader);
