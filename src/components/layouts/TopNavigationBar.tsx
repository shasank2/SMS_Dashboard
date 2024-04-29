import { SearchIcon, User } from 'lucide-react'
import React from 'react'
import { Input } from '../ui/input'

type Props = {}

const TopNavigationBar = (props: Props) => {
    return (
        <div className='flex justify-between items-center h-20'>
            <div className='flex items-center gap-8'>
                <h3 className='h3-bold w-full'>SMS Dashboard</h3>
                <Input startIcon={SearchIcon} type="text" className="shad-input w-[300px] rounded-full" placeholder='Search...' />
            </div>

            <div className='rounded-full border p-2'>
                <User />
            </div>
        </div>
    )
}

export default TopNavigationBar