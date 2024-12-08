import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'

const MusicAlbum = () => {
    const imageGallery = [
        { imgsrc: "https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1611348586804-61bf6c080437%3Fw%3D300%26dpr%3D2%26q%3D80&w=640&q=75", song: "React", singer: "React Rendezvous" },
        { imgsrc: "https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1468817814611-b7edf94b5d60%3Fw%3D300%26dpr%3D2%26q%3D80&w=640&q=75", song: "Next", singer: "Async Awakening" },
        { imgsrc: "https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1528143358888-6d3c7f67bd5d%3Fw%3D300%26dpr%3D2%26q%3D80&w=640&q=75", song: "Vue", singer: "The Art of Reusablity" },
        { imgsrc: "https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1490300472339-79e4adc6be4a%3Fw%3D300%26dpr%3D2%26q%3D80&w=640&q=75", song: "Angular", singer: "Stateful Symphony" }
    ]

    return (
        <div className='w-full overflow-x-auto'>
            <div className="flex flex-nowrap gap-6 ">
                {
                    imageGallery.map((gallery, index) => {
                        return (
                            <div className='overflow-hidden rounded-md w-[250px]' key={index}>
                                <Image
                                    width={250}
                                    height={330}
                                    src={gallery.imgsrc}
                                    alt={gallery.song}
                                    className='rounded-md w-full h-auto object-cover transition-all hover:scale-105 aspect-[3/4]'
                                />
                                <div className='mt-[18px]'>
                                    <h3 className='font-medium leading-none'>{gallery.singer}</h3>
                                    <p className='text-xs text-muted-foreground mt-2'>{gallery.song}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MusicAlbum
