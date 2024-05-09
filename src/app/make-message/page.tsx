"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Must be at least 2 characters.",
    })
    .max(100, { message: "Must be 100 characters or less." }),
});

const MakeMessagePage = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    router.replace(`/?message=${data.username}`);
  }
  return (
    <div className='flex p-4 bg-pink-400 items-center justify-center min-h-screen flex-col gap-5'>
      <div className='flex-col flex items-center justify-center bg-white w-full max-w-lg py-10 rounded-lg shadow-xl'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='w-2/3 space-y-6'
          >
            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Write your Message here</FormLabel>
                  <FormControl>
                    <Input placeholder='Message' {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit'>Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default MakeMessagePage;
