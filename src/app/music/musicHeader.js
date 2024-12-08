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
import styles from "./page.module.css"
import { Button } from '@/components/ui/button'

const MusicHeader = () => {
    return (
        <div>
            <div className={styles.header}>
                <div className={styles.menuBarContainer}>
                    <Menubar>
                        <MenubarMenu>
                            <MenubarTrigger>File</MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem>
                                    New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                                </MenubarItem>
                                <MenubarItem>New Window</MenubarItem>
                                <MenubarSeparator />
                                <MenubarItem>Share</MenubarItem>
                                <MenubarSeparator />
                                <MenubarItem>Print</MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger>Edit</MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem>
                                    Undo
                                </MenubarItem>
                                <MenubarItem>Redo</MenubarItem>
                                <MenubarSeparator />
                                <MenubarItem>Find</MenubarItem>
                                <MenubarSeparator />
                                <MenubarItem>Copy</MenubarItem>
                                <MenubarSeparator />
                                <MenubarItem>Paste</MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger>View</MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem>
                                    Always Show Bookmarks Bar
                                </MenubarItem>
                                <MenubarItem>Always Show Full URLs</MenubarItem>
                                <MenubarSeparator />
                                <MenubarItem>Reload</MenubarItem>
                                <MenubarSeparator />
                                <MenubarItem>Toggle FullScreen</MenubarItem>
                                <MenubarSeparator />
                                <MenubarItem>Hide SideBar</MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger>Profiles</MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem>
                                    Andy
                                </MenubarItem>
                                <MenubarItem>Benoit</MenubarItem>
                                <MenubarSeparator />
                                <MenubarItem>Luis</MenubarItem>
                                <MenubarSeparator />
                                <MenubarItem>Edit...</MenubarItem>
                                <MenubarSeparator />
                                <MenubarItem>Add Profile...</MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>

                </div>
                <Button className="flex items-center justify-center">
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
                        className="lucide lucide-circle-plus"
                    >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8 12h8"></path>
                        <path d="M12 8v8"></path>
                    </svg>

                    Add Music
                </Button>
            </div>
            <div className={styles.musicpageheadertext}><h2>
                Listen Now
            </h2>
                <p>Top Picks for you. Updated Daily</p>
            </div>
            <div className="horizontalLine mt-[18px] mb-[12px]"></div>

        </div>
    )
}

export default MusicHeader
