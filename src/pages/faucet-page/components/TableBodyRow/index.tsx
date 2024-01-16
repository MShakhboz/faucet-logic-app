import classNames from "classnames";
import { Button } from "components";
import { memo } from "react";

const TableBodyRow = ({ element }: { element: any }) => {
    console.log("element", element);
    return (
        <>
            <td className="text-[10px] text-text-secondary pl-3 py-2 pr-2 rounded-l-md rounded-r-md text-start">
                {element?.name}
            </td>
            <td className="text-[10px] text-text-secondary pl-3 py-2 pr-2 rounded-l-md rounded-r-md text-start">
                {element?.mint_amount}
            </td>
            <td className="text-[10px] text-text-secondary pl-3 py-2 pr-2 rounded-l-md rounded-r-md text-start">
                {element?.balance_amount}
            </td>
            <td className="text-[10px] text-text-secondary pl-3 py-2 pr-2 rounded-l-md rounded-r-md text-end">
                <Button
                    title={element?.buttonTitle}
                    onClick={() => console.log(element?.buttonTitle)}
                    className={classNames(
                        "!w-[120px] !border-black-slight bg-transparent !text-text-secondary",
                        {
                            "!border-black-slight-bold":
                                element?.status === "faucet",
                        }
                    )}
                />
            </td>
        </>
    );
};

export default memo(TableBodyRow);
