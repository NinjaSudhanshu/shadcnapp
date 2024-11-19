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
// import { Label } from "@/components/ui/label";
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
    username: z.string().min(2).max(50),

});

export default function Page() {

    const router = useRouter()
    // 1. Define your form.
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: ""
        },
    });

    // 2. Define a submit handler.
    function onSubmit(values) {
        // Do something with the form values.
        console.log(values);
        router.push("/home")
    }

    return (
        <main className="flex h-screen justify-center items-center ">
            <Card className="mx-auto w-full p-2 shadow-xl max-w-[400px]"

            >
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Set Your Username</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-6">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)}>
                                <div className="grid gap-4">
                                    <FormField
                                        control={form.control}
                                        name="username"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-lg font-medium">Username</FormLabel>
                                                <FormControl
                                                >
                                                    <Input
                                                        placeholder="Enter your username"
                                                        {...field}
                                                        className="w-full py-3 px-4 text-lg"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button type="submit" className="w-full py-3 text-lg">
                                        Set Username
                                    </Button>

                                </div>
                            </form>
                        </Form>
                    </div>

                </CardContent>
            </Card>
        </main>
    );
}