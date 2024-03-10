import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@ui/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@ui/components/ui/form";
import { Input } from "@ui/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import * as React from "react";
import { Icons } from "@ui/components/ui/icons";
import { masterUserApi } from "@/services/api";
import useLocalStorage from "@/hooks/localStorage";
import { useNavigate } from "react-router-dom";

export const masterSignInSchema = z
  .object({
    username: z.string().min(1),
    password: z.string().min(1),
  })
  .strict();

export type MasterSignInFormValues = z.infer<typeof masterSignInSchema>;

export function SignInForm() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [_token, setToken] = useLocalStorage("token", "");
  const navigate = useNavigate();
  const form = useForm<MasterSignInFormValues>({
    resolver: zodResolver(masterSignInSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: MasterSignInFormValues) {
    setIsLoading(true);
    try {
      const { token } = (await masterUserApi.masterUserSignIn({ username: values.username, password: values.password })).data;
      setIsLoading(false);
      setToken(token);
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
              Sign In
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}

export function MasterSignIn() {
  return (
    <div className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">Medox Oxytrack</div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;This application has saved me countless hours of work and helped me deliver oxygen to my clients faster than ever before.&rdquo;
            </p>
            <footer className="text-sm">Akhil kunda</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 w-full md:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Signin to your account</h1>
            <p className="text-sm text-muted-foreground">Enter your username and password</p>
          </div>
          <SignInForm />
        </div>
      </div>
    </div>
  );
}
