'use client';

import { createBill } from '@/actions/billing/create';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const FormSchema = z.object({
  title: z.string().min(2, {
    message: 'Title must be at least 2 characters.',
  }),
  description: z.string().min(2, {
    message: 'Description must be at least 2 characters.',
  }),
  price: z.string().min(0, {
    message: 'Price must be a positive number.',
  }),
  category: z.string(),
});

export function RegisterBillForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: '',
      description: '',
      price: '0',
      category: '',
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const bill = {
      title: data.title,
      description: data.description,
      price: parseInt(data.price, 10),
      category: {
        connectOrCreate: {
          create: {
            id: '1',
            title: data.category,
          },
          where: {
            id: '1',
            title: data.category,
          },
        },
      },
    };
    await createBill(bill);

    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Jogos" {...field} />
              </FormControl>
              <FormDescription>
                Este é o nome da conta que você deseja adicionar.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <Input placeholder="Assinatura de jogos" {...field} />
              </FormControl>
              <FormDescription>
                Descreva o que essa conta representa.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Valor</FormLabel>
              <FormControl>
                <Input type="number" placeholder="R$ 100,00" {...field} />
              </FormControl>
              <FormDescription>
                Quanto custa essa conta por mês?
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Categoria</FormLabel>
              <FormControl>
                <Input placeholder="Assinatura" {...field} />
              </FormControl>
              <FormDescription>
                Em qual categoria essa conta se encaixa?
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Adicionar</Button>
      </form>
    </Form>
  );
}
