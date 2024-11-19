"use client";

import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";

const formSchema = z.object({
    // firstName: z.string().min(2).max(50),
    // lastName: z.string().min(2).max(50),
    email: z.string().email(),
    // password: z.string().min(8).max(50),
});

export default function Page() {

    const router = useRouter()
    // 1. Define your form.
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            // firstName: "",
            // lastName: "",
            email: "",
            // password: "",
        },
    });

    // 2. Define a submit handler.
    function onSubmit(values) {
        // Do something with the form values.
        console.log(values);
    }

    return (
        <main className="flex h-screen justify-center items-center ">
            <Card className="mx-auto w-full p-2 shadow-xl max-w-[400px]"

            >
                <CardHeader>
                    <CardTitle className="text-2xl font-bold ">Forgot Password</CardTitle>
                    <div className="text-[16px] mt-[4px]">
                        Please enter your email below and we will send you link to your email to change your password.
                    </div>
                </CardHeader>


                <CardContent>
                    <div className="grid gap-6">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)}>
                                <div className="grid gap-4">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-lg font-medium">Email</FormLabel>
                                                <FormControl

                                                >
                                                    <Input
                                                        placeholder="Enter your email"
                                                        {...field}
                                                        className="w-full py-3 px-4 text-lg"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                             
                                    <Button type="submit" className="w-full py-3 text-lg">
                                        Reset Password
                                    </Button>
                                  
                                </div>
                            </form>
                        </Form>
                    </div>
                    <div className="mt-6 text-center text-md flex justify-center">
                        {/* Create an account?{" "} */}
                        Already have an account ?
                        <div
                            // href="/signup"
                            onClick={() => router.push("/login")}
                            className="underline cursor-pointer"
                        >
                            Log In
                        </div>
                    </div>
                </CardContent>
            </Card>
        </main>
    );
}