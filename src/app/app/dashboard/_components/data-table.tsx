import { Billyng } from '@prisma/client';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../../components/ui/card';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '../../../../components/ui/table';
import { getUserBills } from '@/actions/billing/get';
import { TableDataRow } from './table-row';

export async function DataTable() {
  const bills = await getUserBills();
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Contas</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1">No.</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Valor</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead>Data</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bills.map((b, i) => (
              <TableDataRow
                key={b.id}
                category={b.category.title}
                name={b.title}
                value={b.price}
                date={''}
                index={i}
              />
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
