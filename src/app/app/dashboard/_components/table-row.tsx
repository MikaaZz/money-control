import { TableCell, TableRow } from '../../../../components/ui/table';

type TableDataRowProps = {
  index: number;
  name: string;
  value: number;
  category: string;
  date: string;
};

export function TableDataRow({
  index,
  name,
  value,
  category,
  date,
}: TableDataRowProps) {
  return (
    <TableRow>
      <TableCell>{index + 1}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>R$ {value}</TableCell>
      <TableCell>{category}</TableCell>
      <TableCell>{date}</TableCell>
    </TableRow>
  );
}
