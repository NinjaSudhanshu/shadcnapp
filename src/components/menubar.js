import React from 'react'
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"

const Menuu = () => {
    return (
        <div className="p-2">
            <Menubar className="inline-flex w-auto">
                {/* Overview Menu */}
                <MenubarMenu>
                    <MenubarTrigger>Overview</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>Dashboard</MenubarItem>
                        <MenubarItem>Projects</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>
                            Settings <MenubarShortcut>⌘S</MenubarShortcut>
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>

                {/* Analytics Menu */}
                <MenubarMenu>
                    <MenubarTrigger>Analytics</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>Traffic</MenubarItem>
                        <MenubarItem>Conversions</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Performance</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>

                {/* Reports Menu */}
                <MenubarMenu>
                    <MenubarTrigger>Reports</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>Annual Report</MenubarItem>
                        <MenubarItem>Quarterly Report</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Custom Report</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>

                {/* Notifications Menu */}
                <MenubarMenu>
                    <MenubarTrigger>Notifications</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>Message</MenubarItem>
                        <MenubarItem>Email</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Push Notification</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
        </div>
    )
}

export default Menuu
