// "use client"
// import { useState } from 'react';
// import TaskTable from '@/components/TaskTable';
// import TaskFilter from '@/components/TaskFilter';
// import Priorityfilter from '@/components/Priorityfilter';
// import StatusFilter from '@/components/StatusFilter';
// // import ThemeToggle from '../components/ThemeToggle';

// const taskData = [
//     { id: 'TASK-8782', category: 'Documentation', title: "You can't compress the program without quantifying the open-source SSD...", status: 'In Progress', priority: 'Medium' },
//     { id: 'TASK-7879', category: 'Documentation', title: 'Try to calculate the EXE feed, maybe it will index the multi-byte pixel!', status: 'Backlog', priority: 'Medium' },
//     { id: 'TASK-8783', category: 'Documentation', title: "You can't compress the program without quantifying the open-source SSD...", status: 'In Progress', priority: 'Medium' },
//     { id: 'TASK-7878', category: 'Documentation', title: 'Try to calculate the EXE feed, maybe it will index the multi-byte pixel!', status: 'Backlog', priority: 'Medium' },
//     { id: 'TASK-7839', category: 'Bug', title: 'We need to bypass the neural TCP card!', status: 'Todo', priority: 'High' },
//     { id: 'TASK-5562', category: 'Feature', title: 'The SAS interface is down, bypass the open-source pixel so we can back ...', status: 'Backlog', priority: 'Medium' },
//     { id: 'TASK-8780', category: 'Documentation', title: "You can't compress the program without quantifying the open-source SSD...", status: 'In Progress', priority: 'Medium' },
//     { id: 'TASK-7877', category: 'Documentation', title: 'Try to calculate the EXE feed, maybe it will index the multi-byte pixel!', status: 'Backlog', priority: 'Medium' },
//     { id: 'TASK-7830', category: 'Bug', title: 'We need to bypass the neural TCP card!', status: 'Todo', priority: 'High' },
//     { id: 'TASK-5565', category: 'Feature', title: 'The SAS interface is down, bypass the open-source pixel so we can back ...', status: 'Backlog', priority: 'Medium' },
//     { id: 'TASK-8781', category: 'Documentation', title: "You can't compress the program without quantifying the open-source SSD...", status: 'In Progress', priority: 'Medium' },
//     { id: 'TASK-7873', category: 'Documentation', title: 'Try to calculate the EXE feed, maybe it will index the multi-byte pixel!', status: 'Backlog', priority: 'Medium' },
//     { id: 'TASK-7834', category: 'Bug', title: 'We need to bypass the neural TCP card!', status: 'Todo', priority: 'High' },
//     { id: 'TASK-5568', category: 'Feature', title: 'The SAS interface is down, bypass the open-source pixel so we can back ...', status: 'Backlog', priority: 'Medium' },
//     // Add more tasks as needed...
// ];

// export default function Home() {
//     const [filter, setFilter] = useState('');

//     return (
//         <div className="p-8  dark:bg-gray-900 min-h-screen">
//             <div className="flex justify-between items-center mb-4">
//                 <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">Tables</h1>
//                 {/* <ThemeToggle /> */}
//             </div>
//             <p className="text-gray-600 dark:text-gray-400 mb-6">Here's a list of your tasks for this month!</p>
//             <div>
//                 <TaskFilter filter={filter} setFilter={setFilter} />
//                 <Priorityfilter filter={filter} setFilter={setFilter} />
//                 <StatusFilter filter={filter} setFilter={setFilter} />


//             </div>


//             <TaskTable tasks={taskData} filter={filter} />
//         </div>
//     );
// }
import { columns } from "./columns";
import { DataTable } from "./data-table";

async function getData() {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        // Add more data as needed
    ];
}

export default async function DemoPage() {
    const data = await getData();

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    );
}
