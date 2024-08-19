
import { tableDatas } from "@/api/balancePaymentRequest";
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

    // Fun. to Calculate total amount
    const calculateTotalAmount = () => {
        return tableDatas.reduce((total, data) => {
            const amount = parseFloat(data.amount.replace('$', '').replace(',', ''));
            return total + amount;
        }, 0).toFixed(2);
    };

    const totalAmount = calculateTotalAmount();

    return (
        <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead className="w-[150px] text-lg">Date</TableHead>
                <TableHead className='text-lg'>Remark</TableHead>
                <TableHead className='text-lg'>Amount</TableHead>
                <TableHead className='text-lg'>Method</TableHead>
                <TableHead className='text-lg'>Account</TableHead>
                <TableHead className="text-right text-lg">Status</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {tableDatas.map((data) => (
                <TableRow key={data.invoice}>
                    <TableCell className="font-medium">{data.date}</TableCell>
                    <TableCell>{data.remark}</TableCell>
                    <TableCell>{data.amount}</TableCell>
                    <TableCell>{data.paymentMethod}</TableCell>
                    <TableCell>{data.account}</TableCell>
                    <TableCell
                        className={`text-right ${data.paymentStatus === 'complete' ? 'text-[#33CF3A]' : data.paymentStatus === 'pending' ? 'text-[#CFB633]' : ''}`}
                    >
                        {data.paymentStatus}
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
        <TableFooter>
            <TableRow>
                <TableCell colSpan={2}>Total</TableCell>
                <TableCell className="">${totalAmount}</TableCell>
            </TableRow>
        </TableFooter>
        </Table>
    );
};

export default BalanceTable;