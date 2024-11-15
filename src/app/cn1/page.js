"use client"
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogAction,
    AlertDialogCancel
} from '@/components/ui/alert-dialog'

const Page = () => {
    const [open, setOpen] = useState(false);


    return (
        <div className='h-full flex justify-center items-center flex-col'>
            shadcn1
            <Button variant='default'>New Button</Button>
            {/* Button to trigger AlertDialog */}
            <AlertDialog open={open} onOpenChange={setOpen}>
                <AlertDialogTrigger asChild>
                    <div>
                        <Button variant="newvariant" size="sm">
                            Shadcnbutton
                        </Button>
                    </div>
                </AlertDialogTrigger>

                {/* Alert Dialog Content */}
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Alert Dialog Title</AlertDialogTitle>
                        <AlertDialogDescription>
                            This is the description of the alert dialog. Here you can provide additional information.
                        </AlertDialogDescription>
                    </AlertDialogHeader>

                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Confirm</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}

export default Page;
