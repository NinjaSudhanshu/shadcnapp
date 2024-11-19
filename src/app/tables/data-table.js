"use client";

import React, { useState, useMemo } from "react";
import {
    flexRender,
    getCoreRowModel,
    useReactTable,
    getPaginationRowModel,
    getSortedRowModel,
    getFilteredRowModel,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import styles from "./page.module.css";

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuCheckboxItem,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export function DataTable({ columns, data }) {
    const [sorting, setSorting] = useState([]);
    const [columnFilters, setColumnFilters] = useState([]);
    const [columnVisibility, setColumnVisibility] = useState({});
    const [rowSelection, setRowSelection] = useState({});
    const [searchValue, setSearchValue] = useState("");
    const [selectedStatusOptions, setSelectedStatusOptions] = useState([]);
    const [selectedPriorityOptions, setSelectedPriorityOptions] = useState([]);
    const [row, setRow] = useState(10)

    // Replace the static statusOptions and priorityOptions with dynamic ones using useMemo
    const statusOptions = useMemo(() => {
        const statusCounts = data.reduce((acc, item) => {
            acc[item.status] = (acc[item.status] || 0) + 1;
            return acc;
        }, {});

        return Object.entries(statusCounts).map(([label, count]) => ({
            label,
            count,
        }));
    }, [data]);

    const priorityOptions = useMemo(() => {
        const priorityCounts = data.reduce((acc, item) => {
            acc[item.priority] = (acc[item.priority] || 0) + 1;
            return acc;
        }, {});

        return Object.entries(priorityCounts).map(([label, count]) => ({
            label,
            count,
        }));
    }, [data]);

    // Filter options based on search input
    const filteredStatusOptions = statusOptions.filter((option) =>
        option.label.toLowerCase().includes(searchValue.toLowerCase())
    );
    const filteredPriorityOptions = priorityOptions.filter((option) =>
        option.label.toLowerCase().includes(searchValue.toLowerCase())
    );

    // Handle checkbox selection for Status
    const handleStatusOptionToggle = (option) => {
        setSelectedStatusOptions((prevSelected) =>
            prevSelected.includes(option)
                ? prevSelected.filter((item) => item !== option)
                : [...prevSelected, option]
        );
    };

    // Handle checkbox selection for Priority
    const handlePriorityOptionToggle = (option) => {
        setSelectedPriorityOptions((prevSelected) =>
            prevSelected.includes(option)
                ? prevSelected.filter((item) => item !== option)
                : [...prevSelected, option]
        );
    };

    // Filtered data based on selected status and priority
    const filteredData = useMemo(() => {
        return data.filter((row) => {
            const statusMatches = selectedStatusOptions.length
                ? selectedStatusOptions.includes(row.status)
                : true;
            const priorityMatches = selectedPriorityOptions.length
                ? selectedPriorityOptions.includes(row.priority)
                : true;

            return statusMatches && priorityMatches;
        });
    }, [data, selectedStatusOptions, selectedPriorityOptions]);

    const table = useReactTable({
        data: filteredData, // Pass filtered data to the table
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });

    const resetFilters = () => {
        setSelectedStatusOptions([]);
        setSelectedPriorityOptions([]);
    };

    return (
        <div>
            <div className="flex items-center py-4">
                <div className="flex items-center gap-4">
                    <Input
                        placeholder="Filter emails..."
                        value={searchValue}
                        onChange={(event) => setSearchValue(event.target.value)}
                        className="max-w-sm mt-4 mb-2"
                    />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className={styles.statusbutton}>
                                <Button
                                    variant="outline"
                                    className="ml-auto px-4 py-1.5 h-auto cursor-pointer shadow-none border-none
                                        hover:!bg-gray-800 
                                        data-[state=open]:hover:!bg-gray-800 
                                        data-[state=open]:bg-gray-800 
                                        group
                                        transition-colors"
                                >
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-plus">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M8 12h8"></path>
                                            <path d="M12 8v8"></path>
                                        </svg>

                                        <span className="ml-1">Status</span>
                                        {selectedStatusOptions.length > 2 ? (
                                            <div className="flex items-center space-x-1 ml-2 py-0.5 rounded-lg bg-gray-900 px-2">
                                                <span>{`${selectedStatusOptions.length} selected`}</span>
                                            </div>
                                        ) : (
                                            selectedStatusOptions.map((option) => (
                                                <div
                                                    key={option}
                                                    className="flex items-center space-x-1 ml-2 py-0.5 rounded-lg bg-gray-900 px-2"
                                                >
                                                    <span>{option}</span>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </Button>
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-64">
                            <div className="relative">
                                <Input
                                    placeholder="Search Status"
                                    value={searchValue}
                                    onChange={(e) => setSearchValue(e.target.value)}
                                    className="pl-10 border-none shadow-none"
                                />
                            </div>
                            <DropdownMenuSeparator />
                            {/* Dropdown Items */}
                            {filteredStatusOptions.map((option) => (
                                <div
                                    key={option.label}
                                    className="flex items-center px-3 py-1.5 hover:bg-gray-800 cursor-pointer"
                                >
                                    <Checkbox
                                        checked={selectedStatusOptions.includes(option.label)}
                                        onCheckedChange={() => handleStatusOptionToggle(option.label)}
                                    />
                                    <span className="ml-2 flex-1">{option.label}</span>
                                    <span className="text-sm text-muted-foreground">{option.count}</span>
                                </div>
                            ))}
                            <DropdownMenuSeparator />
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Priority Dropdown UI code left unchanged */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className={styles.statusbutton}>
                                <Button
                                    variant="outline"
                                    className="ml-auto px-4 py-1.5 h-auto cursor-pointer shadow-none border-none
                                        hover:bg-gray-800 
                                        data-[state=open]:bg-gray-800 
                                        group
                                        transition-colors"
                                >
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-plus">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M8 12h8"></path>
                                            <path d="M12 8v8"></path>
                                        </svg>
                                        <span className="ml-1">Priority</span>
                                        {selectedPriorityOptions.length > 2 ? (
                                            <div className="flex items-center space-x-1 ml-2 py-0.5 rounded-lg bg-gray-900 px-2">
                                                <span>{`${selectedPriorityOptions.length} selected`}</span>
                                            </div>
                                        ) : (
                                            selectedPriorityOptions.map((option) => (
                                                <div
                                                    key={option}
                                                    className="flex items-center space-x-1 ml-2 py-0.5 rounded-lg bg-gray-900 px-2"
                                                >
                                                    <span>{option}</span>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </Button>
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-64">
                            <div className="relative">
                                <Input
                                    placeholder="Search Priority"
                                    value={searchValue}
                                    onChange={(e) => setSearchValue(e.target.value)}
                                    className="pl-10 border-none shadow-none"
                                />
                            </div>
                            <DropdownMenuSeparator />
                            {/* Dropdown Items */}
                            {filteredPriorityOptions.map((option) => (
                                <div
                                    key={option.label}
                                    className="flex items-center px-3 py-1.5 hover:bg-gray-800 cursor-pointer"
                                >
                                    <Checkbox
                                        checked={selectedPriorityOptions.includes(option.label)}
                                        onCheckedChange={() => handlePriorityOptionToggle(option.label)}
                                    />
                                    <span className="ml-2 flex-1">{option.label}</span>
                                    <span className="text-sm text-muted-foreground">{option.count}</span>
                                </div>
                            ))}
                            <DropdownMenuSeparator />
                        </DropdownMenuContent>
                    </DropdownMenu>
                    {
                        selectedStatusOptions.length > 0 ?
                            <Button onClick={resetFilters}>
                                Reset Filter

                            </Button> : ""

                    }
                </div>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            Views
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                        {table
                            .getAllColumns()
                            .filter((column) => column.getCanHide())
                            .map((column) => (
                                <DropdownMenuCheckboxItem
                                    key={column.id}
                                    className="capitalize"
                                    checked={column.getIsVisible()}
                                    onCheckedChange={(value) =>
                                        column.toggleVisibility(!!value)
                                    }
                                >
                                    {column.id}
                                </DropdownMenuCheckboxItem>
                            ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder ? null : (
                                            <div
                                                {...{
                                                    className: header.column.getCanSort() ? "cursor-pointer" : "",
                                                    // onClick: header.column.getToggleSortingHandler(),
                                                }}
                                            >
                                                {flexRender(header.column.columnDef.header, header.getContext())}

                                            </div>
                                        )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>

                    <TableBody>
                        {table.getRowModel().rows.map((row) => (
                            <TableRow key={row.id}>
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <div className="py-4  justify-between items-center">



                <div className="flex justify-end space-x-6">
                    <div className="flex items-center ">
                        Rows per page :
                        <div className="ml-2">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline">
                                        {row}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true">
                                            <path d="m6 9 6 6 6-6"></path>
                                        </svg>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="start">
                                    <DropdownMenuItem onClick={() => { setRow(5) }} className="cursor-pointer">5</DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => { setRow(10) }} className="cursor-pointer">10</DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => { setRow(15) }} className="cursor-pointer">15</DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => { setRow(20) }} className="cursor-pointer">20</DropdownMenuItem>


                                </DropdownMenuContent>

                            </DropdownMenu>

                        </div>
                    </div>
                    <div className="flex items-center">
                        Page 1 of 3
                    </div>
                    <div className="flex space-x-4">
                        <Button
                            variant="outline"
                            onClick={() => table.setPageIndex(0)}
                            disabled={!table.getCanPreviousPage()}
                        >
                            {"<<"}
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                        >
                            {"<"}
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                        >
                            {">"}
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                            disabled={!table.getCanNextPage()}
                        >
                            {">>"}
                        </Button>

                    </div>


                </div>
            </div>
        </div>
    );
}
