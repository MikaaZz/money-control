import { DataSelector } from '@/components/data-selector/data-selector';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full">
      <div className="flex items-center justify-start gap-2 w-full">
        <h1 className="font-semibold text-lg md:text-xl">Contas:</h1>
        <DataSelector
          dataType="mês"
          selectorItems={['Janeiro', 'Fevereiro', 'Março', 'Abril']}
        />
        <DataSelector dataType="ano" selectorItems={['2024']} />
      </div>
    </main>
  );
}
