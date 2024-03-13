'use client';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

export function DataSelector({
  dataType,
  selectorItems,
}: {
  dataType: string;
  selectorItems: string[];
}) {
  console.log(selectorItems);
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={`Selecione o ${dataType}`} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {selectorItems.map((e) => (
            <SelectItem key={e} value={e}>
              {e}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
