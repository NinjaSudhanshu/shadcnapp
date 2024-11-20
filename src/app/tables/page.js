
import { columns } from "./columns";
import { DataTable } from "./data-table";
import styles from "./page.module.css"

async function getData() {
    // Fetch data from your API here.
    return [
        { id: "1a2b3c4d", status: "Backlog", email: "john.doe@example.com", priority: "High" },
        { id: "2b3c4d5e", status: "Todo", email: "jane.doe@example.com", priority: "Low" },
        { id: "3c4d5e6f", status: "Cancelled", email: "alice@example.com", priority: "Medium" },
        { id: "4d5e6f7g", status: "In Progress", email: "bob@example.com", priority: "Low" },
        { id: "5e6f7g8h", status: "Done", email: "charlie@example.com", priority: "High" },
        { id: "6f7g8h9i", status: "Todo", email: "david@example.com", priority: "Medium" },
        { id: "7g8h9i0j", status: "Backlog", email: "eve@example.com", priority: "High" },
        { id: "8h9i0j1k", status: "Cancelled", email: "frank@example.com", priority: "Low" },
        { id: "9i0j1k2l", status: "In Progress", email: "grace@example.com", priority: "High" },
        { id: "0j1k2l3m", status: "Done", email: "hank@example.com", priority: "High" },
        { id: "1k2l3m4n", status: "Cancelled", email: "irene@example.com", priority: "Low" },
        { id: "2l3m4n5o", status: "Todo", email: "jack@example.com", priority: "Low" },
        { id: "3m4n5o6p", status: "In Progress", email: "karen@example.com", priority: "High" },
        { id: "4n5o6p7q", status: "Done", email: "louis@example.com", priority: "High" },
        { id: "5o6p7q8r", status: "Cancelled", email: "mona@example.com", priority: "Medium" },
        { id: "6p7q8r9s", status: "In Progress", email: "nathan@example.com", priority: "High" },
        { id: "7q8r9s0t", status: "Todo", email: "olivia@example.com", priority: "High" },
        { id: "8r9s0t1u", status: "Backlog", email: "paul@example.com", priority: "Medium" },
        { id: "9s0t1u2v", status: "Cancelled", email: "quinn@example.com", priority: "High" },
        { id: "0t1u2v3w", status: "In Progress", email: "rachel@example.com", priority: "High" },
        { id: "1u2v3w4x", status: "Done", email: "sam@example.com", priority: "Low" },
        { id: "2v3w4x5y", status: "Todo", email: "tina@example.com", priority: "High" },
        { id: "3w4x5y6z", status: "Cancelled", email: "uma@example.com", priority: "Medium" },
        { id: "4x5y6z7a", status: "In Progress", email: "victor@example.com", priority: "Medium" },
        { id: "5y6z7a8b", status: "Done", email: "wendy@example.com", priority: "High" },
        { id: "6z7a8b9c", status: "Cancelled", email: "xavier@example.com", priority: "Low" },
        { id: "7a8b9c0d", status: "Todo", email: "yvonne@example.com", priority: "Low" },
        { id: "8b9c0d1e", status: "In Progress", email: "zach@example.com", priority: "Medium" },
        { id: "9c0d1e2f", status: "Backlog", email: "adam@example.com", priority: "Medium" },
        { id: "0d1e2f3g", status: "Cancelled", email: "bella@example.com", priority: "High" },
        // Add more data as needed
    ];
}

export default async function DemoPage() {
    const data = await getData();
    console.log(data.length)

    return (
        <div className={styles.tableparent}>
            <div className={styles.tableheading}>
                <h1>Welcome Back!</h1>
                <h3>{`Here's a list of your tasks for this month!`}</h3>
            </div>
            <DataTable columns={columns} data={data} />
        </div>
    );
}
