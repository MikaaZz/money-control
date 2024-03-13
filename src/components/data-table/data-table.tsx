import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';

export function DataTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bills</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1">No.</TableHead>
              <TableHead>Bill</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Due Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Electricity</TableCell>
              <TableCell>$100.00</TableCell>
              <TableCell>2023-01-15</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>Internet</TableCell>
              <TableCell>$50.00</TableCell>
              <TableCell>2023-01-20</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>Water</TableCell>
              <TableCell>$30.00</TableCell>
              <TableCell>2023-01-25</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>4</TableCell>
              <TableCell>Gas</TableCell>
              <TableCell>$70.00</TableCell>
              <TableCell>2023-01-30</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
