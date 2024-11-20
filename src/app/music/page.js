"use client"
import React, { useState } from 'react'
import styles from "./page.module.css"
import MusicHeader from "./musicHeader"
import MusicAlbum from './musicAlbum'
import MusicSelect from './musicSelect'


const page = () => {
    const [navState, setNavState] = useState(0)

    return (
        <>

            <div className={styles.MusicPage}>
                <div className={styles.navBar}>
                    <div className={`${navState === 0 ? styles.navButton : styles.normalButton}`} onClick={() => setNavState(0)}>Music</div>
                    <div className={`${navState === 1 ? styles.navButton : styles.normalButton}`} onClick={() => { setNavState(1) }}>Podcasts</div>
                </div>


                {
                    navState === 0 && (<>
                        <MusicHeader />
                        <MusicAlbum />
                        <div className={styles.musicpageheadertext}><h2>
                            Made for You
                        </h2>
                            <p>Your personal playlist. Updated Daily.</p>
                        </div>
                        <div className="horizontalLine mt-[18px] mb-[12px]"></div>
                        <MusicSelect /></>)
                }
                {
                    navState === 1 && (<>
                        <div className={styles.PodCastPage}>
                            <div className={styles.musicpageheadertext}><h2>
                                New Episodes
                            </h2>
                                <p>Your favorite posdcasts. Updated Daily</p>
                            </div>
                            <div className="horizontalLine mt-[18px] mb-[12px]"></div>

                        </div>

                    </>)
                }

            </div>




        </>

    )
}

export default page
