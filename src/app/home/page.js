import React from 'react';
import DashboardCard from '@/components/card';
import Chartcode from '@/components/graph';
import RecentSales from '@/components/recentSales';
import Menuu from '@/components/menubar';
import styles from './page.module.css'

const Page = () => {



    return (
        <div className="flex flex-col gap-5 w-full max-w-screen-2xl mx-auto min-h-screen p-6">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <div >
                <DashboardCard />
            </div>
            <div>
                <Menuu />
            </div>
            <div className='flex gap-8 justify-between'>
                <div className={styles.chart}>
                    <Chartcode />
                </div>
                <div className={styles.RecentSales} >
                    <RecentSales />
                </div>

            </div>

        </div>
    );
};

export default Page;
