import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../../components/ui/sheet"
import { Button } from '../ui/button'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { ArrowRight, BarChart, BookDashed, LayoutDashboard, Settings } from 'lucide-react'

type Props = {}

const SideBar = (props: Props) => {
    return (
        // <Sheet>
        //     <SheetTrigger asChild>
        //         <ArrowRight className='cursor-pointer mx-auto mt-4'/>
        //     </SheetTrigger>
        //     <SheetContent side={'left'} className='transform'>
        //         <SheetHeader>
        //             <SheetTitle>Edit profile</SheetTitle>
        //             <SheetDescription>
        //                 Make changes to your profile here. Click save when you're done.
        //             </SheetDescription>
        //         </SheetHeader>
        //         <div className="grid gap-4 py-4">
        //             <div className="grid grid-cols-4 items-center gap-4">
        //                 <Label htmlFor="name" className="text-right">
        //                     Name
        //                 </Label>
        //                 <Input id="name" value="Pedro Duarte" className="col-span-3" />
        //             </div>
        //             <div className="grid grid-cols-4 items-center gap-4">
        //                 <Label htmlFor="username" className="text-right">
        //                     Username
        //                 </Label>
        //                 <Input id="username" value="@peduarte" className="col-span-3" />
        //             </div>
        //         </div>
        //         <SheetFooter>
        //             <SheetClose asChild>
        //                 <Button type="submit">Save changes</Button>
        //             </SheetClose>
        //         </SheetFooter>
        //     </SheetContent>
        // </Sheet>

        <div>
            <h1 className='h2-bold py-5 border-b border-b-dark-4 text-center'>XYZ Company</h1>

            <div className='flex flex-col mx-2 my-6 gap-2'>
                <div className='flex gap-2 cursor-pointer rounded hover:bg-dark-2 p-2'>
                    <LayoutDashboard /> Dashboard
                </div>
                <div className='flex gap-2 cursor-pointer rounded hover:bg-dark-2 p-2'>
                    <BarChart /> Analytics
                </div>
                <div className='flex gap-2 cursor-pointer rounded hover:bg-dark-2 p-2'>
                    <Settings /> Settings
                </div>
            </div>
        </div>
    )
}

export default SideBar