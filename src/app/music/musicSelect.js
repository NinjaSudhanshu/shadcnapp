import React from 'react'

const MusicSelect = () => {
    const musicAlbum = [
        { imgsrc: "https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1611348586804-61bf6c080437%3Fw%3D300%26dpr%3D2%26q%3D80&w=640&q=75", song: "React", singer: "Thinking Components" },
        { imgsrc: "https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1468817814611-b7edf94b5d60%3Fw%3D300%26dpr%3D2%26q%3D80&w=640&q=75", song: "Next", singer: "Functional Fury" },
        { imgsrc: "https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1615247001958-f4bc92fa6a4a%3Fw%3D300%26dpr%3D2%26q%3D80&w=384&q=75", song: "Net", singer: "React Rendezvous" },
        { imgsrc: "https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1528143358888-6d3c7f67bd5d%3Fw%3D300%26dpr%3D2%26q%3D80&w=640&q=75", song: "Vue", singer: "Async Awakening" },
        { imgsrc: "https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1513745405825-efaf9a49315f%3Fw%3D300%26dpr%3D2%26q%3D80&w=384&q=75", song: "Nest", singer: "Stateful Symphony" },
        { imgsrc: "https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1490300472339-79e4adc6be4a%3Fw%3D300%26dpr%3D2%26q%3D80&w=640&q=75", song: "Angular", singer: "The Art of Reusability" },
        { imgsrc: "https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1446185250204-f94591f7d702%3Fw%3D300%26dpr%3D2%26q%3D80&w=384&q=75", song: "Express", singer: "The Art of Knowledge" }

    ]
    return (
        <div>
            <div className=''>
                <div className="flex space-x-4">
                    {
                        musicAlbum.map((gallery, index) => {
                            return (
                                <div className='overflow-hidden rounded-md w-[150px]' key={index}>
                                    <img
                                        width={130}
                                        height={130}
                                        src={gallery.imgsrc}
                                        alt={gallery.song}
                                        className='rounded-md w-full h-auto object-cover transition-all hover:scale-105 aspect-[3/4]'
                                    />
                                    <div className='mt-[18px]'>
                                        <h3 className='text-[14px] leading-none'>{gallery.singer}</h3>
                                        <p className='text-xs text-muted-foreground mt-2'>{gallery.song}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default MusicSelect
