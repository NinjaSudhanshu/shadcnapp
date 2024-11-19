// components/TaskFilter.js

import React from 'react';
import { Input } from './ui/input';

const TaskFilter = ({ filter, setFilter }) => {
    return (
        <Input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Filter tasks..."
            className="mb-8 w-[300px]"
        />
    );
};

export default TaskFilter;
