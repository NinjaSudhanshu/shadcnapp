// components/TaskTable.js

import React, { useState } from 'react';
import { FaSort } from 'react-icons/fa';

const TaskTable = ({ tasks, filter }) => {
    const [sortField, setSortField] = useState('title');
    const [sortOrder, setSortOrder] = useState('asc');
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    // Filter tasks by title
    const filteredTasks = tasks.filter(task =>
        task.title.toLowerCase().includes(filter.toLowerCase())
    );

    // Sort tasks
    const sortedTasks = [...filteredTasks].sort((a, b) => {
        if (sortField) {
            const order = sortOrder === 'asc' ? 1 : -1;
            return a[sortField] > b[sortField] ? order : -order;
        }
        return 0;
    });

    // Paginate tasks
    const totalPages = Math.ceil(sortedTasks.length / rowsPerPage);
    const paginatedTasks = sortedTasks.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

    const handleSort = (field) => {
        const order = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
        setSortField(field);
        setSortOrder(order);
    };

    return (
        <div className="min-w-[1440px] ">
            <table className="min-w-[1440px] border border-card-border p-4 text-left text-gray-900 dark:text-white">
                <thead>
                    <tr className='border border-card-border p-4'>
                        <th></th>
                        <th onClick={() => handleSort('title')} className="cursor-pointer flex items-center space-x-2">Title <FaSort /></th>
                        <th>
                            <div className='flex items-center'>
                                Status <FaSort /></div></th>
                        <th>
                            <div className='flex items-center'>  Priority <FaSort /></div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedTasks.map(task => (
                        <tr key={task.id} className="border-b dark:border-gray-700">
                            <td><input type="checkbox" /></td>
                            <td>{task.title}</td>
                            <td>{task.status}</td>
                            <td>{task.priority}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-between items-center mt-4">
                <p>Page {currentPage} of {totalPages}</p>
                <div>
                    <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>Previous</button>
                    <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default TaskTable;
