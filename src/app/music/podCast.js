import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const PodCast = () => {
    return (
        <div className='flex h-[450px] items-center justify-center rounded-md border border-dashed'>
            <div className='mx-auto flex max-w-[420px] flex-col items-center justify-center text center'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-10 w-10 text-muted-foreground"
                    viewBox="0 0 24 24"
                >
                    <circle cx="12" cy="11" r="1"></circle>
                    <path d="M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5Z"></path>
                    <path d="M8 14a5 5 0 1 1 8 0"></path>
                    <path d="M17 18.5a9 9 0 1 0-10 0"></path>
                </svg>

                <h3 className='mt-4 text-lg font-semibold'>No episodes added</h3>
                <p className='mb-4 mt-2 text-sm text-muted-foreground'>You have not added any podcasts. Add one below.</p>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button >Add PodCast</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                            <DialogTitle>Add Podcast</DialogTitle>
                            <DialogDescription>
                                Copy and paste the podcast feed URL to import.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="flex items-center space-x-2">
                            <div className="grid flex-1 gap-2">
                                <Label htmlFor="link" className="sr-only">
                                    Link
                                </Label>
                                <Input
                                    id="link"
                                    defaultValue="https://ui.shadcn.com/docs/installation"

                                />
                            </div>
                            {/* <Button type="submit" size="sm" className="px-3">
                                <span className="sr-only">Copy</span>
                                <Copy />
                            </Button> */}
                        </div>
                        <DialogFooter className="sm:justify-end">
                            <DialogClose asChild>
                                <Button type="button" >
                                    Import Podcast
                                </Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>



            </div>


        </div>
    )
}

export default PodCast
