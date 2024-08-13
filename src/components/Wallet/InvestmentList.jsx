import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function InvestmentList({ data }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="">Date</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-center">Ownership</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((data) => (
          <TableRow>
            <TableCell className="font-medium">{data.date}</TableCell>
            <TableCell>{data.amount} Tk</TableCell>
            <TableCell
              className={
                data.status === "Pending" ? "text-[#D61D1D]" : "text-[#00E676]"
              }
            >
              {data.status}
            </TableCell>
            <TableCell className="text-center">{data.ownership}%</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default InvestmentList;
