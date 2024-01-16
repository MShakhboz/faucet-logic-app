import { BaseTable } from "components";
import { DATA, TITLE } from "./constant";
import TableHeader from "./components/TableHeader";
import TableBodyRow from "./components/TableBodyRow";

const FaucetPage = () => {
    return (
        <div className="w-full">
            <p className="text-sm text-white px-6 py-3 tracking-wider">
                {TITLE}
            </p>

            <div>
                <BaseTable
                    RowComponent={TableBodyRow}
                    Header={TableHeader}
                    data={DATA}
                />
            </div>
        </div>
    );
};

export default FaucetPage;
