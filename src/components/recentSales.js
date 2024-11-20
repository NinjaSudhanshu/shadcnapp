// components/RecentSales.js

import React from 'react';

const RecentSales = () => {
    const salesData = [
        { name: 'Olivia Martin', email: 'olivia.martin@email.com', amount: 1999.00 },
        { name: 'Jackson Lee', email: 'jackson.lee@email.com', amount: 39.00 },
        { name: 'Isabella Nguyen', email: 'isabella.nguyen@email.com', amount: 299.00 },
        { name: 'William Kim', email: 'will@email.com', amount: 99.00 },
        { name: 'Sofia Davis', email: 'sofia.davis@email.com', amount: 39.00 },

    ];

    return (
        <div className="border border-gray-200 dark:border-gray-700  text-black dark:text-white p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-1">Recent Sales</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-2">You made 265 sales this month.</p>
            <ul className="space-y-5">
                {salesData.map((sale, index) => (
                    <li key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-black dark:text-white">
                                {/* Placeholder avatar */}
                                <span className="text-xl">👤</span>
                            </div>
                            <div>
                                <p className="text-sm font-medium">{sale.name}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{sale.email}</p>
                            </div>
                        </div>
                        <div className="text-sm font-semibold text-green-600 dark:text-green-500">
                            +${sale.amount.toFixed(2)}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecentSales;
