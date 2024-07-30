import { Table } from "@/components/ui/table";
import CSVRow from "@/Utils/types/CSV-Types";

interface TableProps {
    data: CSVRow[]
}

const DataTable: React.FC<TableProps> = ({ data }) => {
    return (
        <div className="">
            <Table className="w-1/4">
                <thead>
                    <tr>
                        <th>Ad Name</th>
                        <th>Ad Link</th>
                        <th>Amount Spent</th>
                        <th>Hook Rate</th>
                        <th>Average Watch Time</th>
                        <th>Outbound CTR</th>
                        <th>Purchases</th>
                        <th>Revenue</th>
                        <th>ROAS</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row: any, index: any) => (
                        <tr key={index}>
                            <td>{row["Ad Name"]}</td>
                            <td><a href={row["Ad Link"]} target="_blank" rel="noopener noreferrer">{row["Ad Link"]}</a></td>
                            <td>{row["Amount Spent"]}</td>
                            <td>{row["Hook Rate"]}</td>
                            <td>{row["Average watch time"]}</td>
                            <td>{row["Outbound CTR"]}</td>
                            <td>{row["Purchases"]}</td>
                            <td>{row["Revenue"]}</td>
                            <td>{row["ROAS"]}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default DataTable;