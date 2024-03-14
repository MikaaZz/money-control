import { RegisterBillForm } from './_components/register-bill-form';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-4 p-24 w-full">
      <div className="flex items-center justify-start gap-2 w-full">
        <h1 className="font-semibold text-lg md:text-xl">
          Adicionar nova conta:
        </h1>
      </div>
      <div className="flex items-center justify-start gap-2 w-full">
        <RegisterBillForm />
      </div>
    </main>
  );
}
