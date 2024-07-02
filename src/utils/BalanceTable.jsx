
import { tableData } from "@/api/invoicesDataApi";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
  


const BalanceTable = () => {
    return (
        <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
            <TableRow>
            <TableHead className="w-[150px]">Date</TableHead>
            <TableHead>Remark</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Mathod</TableHead>
            <TableHead>Account</TableHead>
            <TableHead className="text-right">Staus</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {tableData.map((data) => (
            <TableRow key={data.invoice}>
                <TableCell className="font-medium">{data.date}</TableCell>
                <TableCell>{data.remark}</TableCell>
                <TableCell>{data.amount}</TableCell>
                <TableCell>{data.paymentMethod}</TableCell>
                <TableCell>{data.account}</TableCell>
                <TableCell className="text-right">{data.paymentStatus}</TableCell>
            </TableRow>
            ))}
        </TableBody>
        <TableFooter>
            <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell className="">$2,500.00</TableCell>
            </TableRow>
        </TableFooter>
     </Table>
    );
};

export default BalanceTable;