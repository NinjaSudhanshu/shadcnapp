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
    const [searchValueStatus, setSearchValueStatus] = useState("")
    const [searchValuePriority, setSearchValuePriority] = useState("")
    const [globalFilter, setGlobalFilter] = useState('');

    const [selectedStatusOptions, setSelectedStatusOptions] = useState([]);
    const [selectedPriorityOptions, setSelectedPriorityOptions] = useState([]);
    const [row, setRow] = useState(10);

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
        option.label.toLowerCase().includes(searchValueStatus.toLowerCase())
    );
    const filteredPriorityOptions = priorityOptions.filter((option) =>
        option.label.toLowerCase().includes(searchValuePriority.toLowerCase())
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

    const [pageIndex, setPageIndex] = useState(0);

    const table = useReactTable({
        data: filteredData,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        globalFilterFn: 'includesString',
        onGlobalFilterChange: setGlobalFilter,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
            globalFilter,
            pagination: {
                pageSize: row,
                pageIndex: pageIndex,
            },
        },
        onPaginationChange: setState => {
            const newState = setState(table.getState().pagination);
            setPageIndex(newState.pageIndex);
        },
    });

    const resetFilters = () => {
        setSelectedStatusOptions([]);
        setSelectedPriorityOptions([]);
    };
    const resetFiltersstatus = () => {
        setSelectedStatusOptions([])
    }
    const resetFilterspriority = () => {
        setSelectedPriorityOptions([])
    }

    return (
        <div>
            <div className="flex items-center py-4">
                <div className="flex items-center gap-4">
                    <Input
                        placeholder="Filter emails..."
                        value={globalFilter ?? ''}
                        onChange={(event) => table.setGlobalFilter(event.target.value)}
                        className="max-w-sm mt-4 mb-2"
                    />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className={styles.statusbutton}>
                                <Button
                                    variant="outline"
                                    className="ml-auto px-4  h-auto cursor-pointer shadow-none border-none py-1.5
                                        hover:!bg-gray-800 
                                        "
                                >
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-plus">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M8 12h8"></path>
                                            <path d="M12 8v8"></path>
                                        </svg>

                                        <span className="ml-1">Status</span>
                                        {selectedStatusOptions.length > 2 ? (
                                            <div className="flex items-center space-x-1 ml-2  rounded-lg bg-gray-900 px-2">
                                                <span>{`${selectedStatusOptions.length} selected`}</span>
                                            </div>
                                        ) : (
                                            selectedStatusOptions.map((option) => (
                                                <div
                                                    key={option}
                                                    className="flex items-center space-x-1 ml-2  rounded-lg bg-gray-900 px-2"
                                                >
                                                    <span>{option}</span>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </Button>
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" >
                            <div className="relative">
                                {/* SVG Icon as Prefix */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-search absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 opacity-50"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </svg>

                                {/* Input Field */}
                                <Input
                                    placeholder="Search Status"
                                    value={searchValueStatus}
                                    onChange={(e) => setSearchValueStatus(e.target.value)}
                                    className="pl-10 shadow-none border-none "
                                />
                            </div>

                            <DropdownMenuSeparator />
                            {/* Dropdown Items */}
                            {filteredStatusOptions.map((option) => (
                                <div
                                    key={option.label}
                                    className="flex items-center px-3 py-1.5 hover:bg-gray-800 cursor-pointer rounded-md"
                                    onClick={() => handleStatusOptionToggle(option.label)}
                                >
                                    <Checkbox
                                        checked={selectedStatusOptions.includes(option.label)}
                                        onCheckedChange={() => handleStatusOptionToggle(option.label)}
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                    <div className="ml-[16px]">
                                        {option.label === "Backlog" && (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-circle-help mr-2 h-4 w-4 text-muted-foreground"
                                            >
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                                <path d="M12 17h.01"></path>
                                            </svg>
                                        )}
                                        {option.label === "Todo" && (
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-circle mr-2 h-4 w-4 text-muted-foreground">
                                                <circle cx="12" cy="12" r="10"></circle>
                                            </svg>

                                        )}
                                        {option.label === "Cancelled" && (
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-timer mr-2 h-4 w-4 text-muted-foreground">
                                                <line x1="10" y1="2" x2="14" y2="2"></line>
                                                <line x1="12" y1="14" x2="15" y2="11"></line>
                                                <circle cx="12" cy="14" r="8"></circle>
                                            </svg>

                                        )}
                                        {option.label === "In Progress" && (
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-circle-check-big mr-2 h-4 w-4 text-muted-foreground">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <path d="m9 11 3 3L22 4"></path>
                                            </svg>

                                        )}
                                        {option.label === "Done" && (
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-circle-off mr-2 h-4 w-4 text-muted-foreground">
                                                <path d="m2 2 20 20"></path>
                                                <path d="M8.35 2.69A10 10 0 0 1 21.3 15.65"></path>
                                                <path d="M19.08 19.08A10 10 0 1 1 4.92 4.92"></path>
                                            </svg>

                                        )}
                                    </div>
                                    <span className="flex-1">{option.label}</span>
                                    <span className="text-sm text-muted-foreground">{option.count}</span>
                                </div>
                            ))}

                            {
                                selectedStatusOptions.length > 0 ?
                                    <>
                                        <DropdownMenuSeparator />
                                        <div onClick={resetFiltersstatus} className="cursor-pointer flex items-center justify-center py-2 hover:bg-gray-800  rounded-md">
                                            Reset Filter

                                        </div> </> : ""

                            }
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
                                                    className="flex items-center space-x-1 ml-2  rounded-lg bg-gray-900 px-2"
                                                >
                                                    <span>{option}</span>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </Button>
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" >
                            <div className="relative">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-search absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 opacity-50"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </svg>
                                <Input
                                    placeholder="Search Priority"
                                    value={searchValuePriority}
                                    onChange={(e) => setSearchValuePriority(e.target.value)}
                                    className="pl-10 border-none shadow-none"
                                />
                            </div>
                            <DropdownMenuSeparator />
                            {/* Dropdown Items */}
                            {filteredPriorityOptions.map((option) => (
                                <div
                                    key={option.label}
                                    className="flex items-center px-3 py-1.5 hover:bg-gray-800 cursor-pointer rounded-md"
                                    onClick={() => handlePriorityOptionToggle(option.label)}
                                >
                                    <Checkbox
                                        checked={selectedPriorityOptions.includes(option.label)}
                                        onCheckedChange={() => handlePriorityOptionToggle(option.label)}
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                    {
                                        <div className="ml-[16px]">

                                            {
                                                option.label === "High" && (
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        width="24" height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="lucide lucide-arrow-down mr-2 h-4 w-4 text-muted-foreground">
                                                        <path d="M12 5v14"></path>
                                                        <path d="m19 12-7 7-7-7"></path>
                                                    </svg>)


                                            }
                                            {
                                                option.label === "Medium" && (
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        width="24" height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="lucide lucide-arrow-right mr-2 h-4 w-4 text-muted-foreground">
                                                        <path d="M5 12h14"></path>
                                                        <path d="m12 5 7 7-7 7"></path>
                                                    </svg>

                                                )
                                            }
                                            {
                                                option.label === "Low" && (
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        width="24" height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="lucide lucide-arrow-up mr-2 h-4 w-4 text-muted-foreground">
                                                        <path d="m5 12 7-7 7 7"></path>
                                                        <path d="M12 19V5"></path>
                                                    </svg>

                                                )
                                            }
                                        </div>
                                    }
                                    <span className="ml-2 flex-1">{option.label}</span>
                                    <span className="text-sm text-muted-foreground">{option.count}</span>
                                </div>
                            ))}
                            {
                                selectedPriorityOptions.length > 0 ?
                                    <>
                                        <DropdownMenuSeparator />

                                        <div onClick={resetFilterspriority} className="cursor-pointer flex items-center justify-center py-2 hover:bg-gray-800  rounded-md">
                                            Reset Filter

                                        </div> </> : ""

                            }
                        </DropdownMenuContent>
                    </DropdownMenu>
                    {
                        selectedPriorityOptions.length > 0 || selectedStatusOptions.length > 0 ?
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
                    <DropdownMenuContent align="end">
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
                                    <DropdownMenuItem
                                        onClick={() => {
                                            setRow(5);
                                            table.setPageSize(5);
                                        }}
                                        className={`cursor-pointer flex justify-between items-center ${row === 5 ? 'bg-gray-700' : ''}`}
                                    >
                                        <span>5</span>
                                        {row === 5 && (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        )}
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        onClick={() => {
                                            setRow(10);
                                            table.setPageSize(10);
                                        }}
                                        className={`cursor-pointer flex justify-between items-center ${row === 10 ? 'bg-gray-700' : ''}`}
                                    >
                                        <span>10</span>
                                        {row === 10 && (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        )}
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        onClick={() => {
                                            setRow(15);
                                            table.setPageSize(15);
                                        }}
                                        className={`cursor-pointer flex justify-between items-center ${row === 15 ? 'bg-gray-700' : ''}`}
                                    >
                                        <span>15</span>
                                        {row === 15 && (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        )}
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        onClick={() => {
                                            setRow(20);
                                            table.setPageSize(20);
                                        }}
                                        className={`cursor-pointer flex justify-between items-center ${row === 20 ? 'bg-gray-700' : ''}`}
                                    >
                                        <span>20</span>
                                        {row === 20 && (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        )}
                                    </DropdownMenuItem>
                                </DropdownMenuContent>

                            </DropdownMenu>

                        </div>
                    </div>
                    <div className="flex items-center">
                        Page {table.getState().pagination.pageIndex + 1} of{" "}
                        {table.getPageCount()}
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
