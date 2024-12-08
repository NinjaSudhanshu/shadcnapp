"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import MusicHeader from "./musicHeader";
import MusicAlbum from "./musicAlbum";
import MusicSelect from "./musicSelect";
import PodCast from "./podCast";

const Page = () => {
    const [navState, setNavState] = useState(0);

    // Load state from localStorage on mount
    useEffect(() => {
        const storedNavState = localStorage.getItem("navState");
        if (storedNavState !== null) {
            setNavState(parseInt(storedNavState, 10)); // Ensure it's a number
        }
    }, []);

    // Save state to localStorage whenever it changes
    const handleNavStateChange = (newState) => {
        setNavState(newState);
        localStorage.setItem("navState", newState);
    };

    return (
        <>
            <div className={styles.MusicPage}>
                <div className={styles.navBar}>
                    <div
                        className={`${navState === 0 ? styles.navButton : styles.normalButton}`}
                        onClick={() => handleNavStateChange(0)}
                    >
                        Music
                    </div>
                    <div
                        className={`${navState === 1 ? styles.navButton : styles.normalButton}`}
                        onClick={() => handleNavStateChange(1)}
                    >
                        Podcasts
                    </div>
                </div>

                {navState === 0 && (
                    <>
                        <MusicHeader />
                        <MusicAlbum />
                        <div className={styles.musicpageheadertext}>
                            <h2>Made for You</h2>
                            <p>Your personal playlist. Updated Daily.</p>
                        </div>
                        <div className="horizontalLine mt-[18px] mb-[12px]"></div>
                        <MusicSelect />
                    </>
                )}
                {navState === 1 && (
                    <>
                        <div className={styles.PodCastPage}>
                            <div className={styles.musicpageheadertext}>
                                <h2>New Episodes</h2>
                                <p>Your favorite podcasts. Updated Daily</p>
                            </div>
                            <div className="horizontalLine mt-[18px] mb-[12px]"></div>
                        </div>
                        <PodCast />
                    </>
                )}
            </div>
        </>
    );
};

export default Page;
