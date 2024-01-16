import { ReactNode, memo } from "react";

const BaseTable = ({
    RowComponent = <></>,
    Header,
    data,
}: {
    RowComponent?: any;
    Header: any;
    data: any;
}) => {
    return (
        <table className="w-full">
            <thead className="w-full border">
                <tr
                    style={{ borderRadius: 5 }}
                    className="w-full border border-black-slight"
                >
                    <Header />
                </tr>
            </thead>
            <tbody className="text-lg pt-2.5">
                {data.map((elem: any, index: number) => (
                    <tr className="w-full border border-black-slight">
                        <RowComponent
                            key={`table_row_${index + 1}`}
                            element={elem}
                        />
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default memo(BaseTable);
