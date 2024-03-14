import { DataSelector } from './_components/data-selector';
import { DataTable } from './_components/data-table';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-4 p-24 w-full">
      <div className="flex items-center justify-start gap-2 w-full">
        <h1 className="font-semibold text-lg md:text-xl">
          Selecione o mês e ano:
        </h1>
        <DataSelector
          dataType="mês"
          selectorItems={['Janeiro', 'Fevereiro', 'Março', 'Abril']}
        />
        <DataSelector dataType="ano" selectorItems={['2024']} />
      </div>
      <div className="flex items-center justify-start gap-2 w-full">
        <DataTable />
      </div>
    </main>
  );
}
