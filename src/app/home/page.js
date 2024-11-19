import React from 'react';
import DashboardCard from '@/components/card';
import Chartcode from '@/components/graph';
import RecentSales from '@/components/recentSales';
import Menuu from '@/components/menubar';

const Page = () => {



    return (
        <div className="flex flex-col gap-5 w-full max-w-screen-2xl mx-auto min-h-screen p-6">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <div className='min-w-[1440px]'>
                <DashboardCard />
            </div>
            <div>
                <Menuu />
            </div>
            <div className='flex gap-8 justify-between'>
                <div className='min-w-[800px]'>
                    {/* <Chartcode /> */}
                    <Chartcode />
                </div>
                <div className='min-w-[600px]'>
                    <RecentSales />
                </div>

            </div>

        </div>
    );
};

export default Page;
