import { StarIcon } from "../assets"

export const UserProfile = () => {
    return (
        <div className='w-[36rem] bg-white rounded-lg p-12 flex gap-x-4'>
            <img src="https://placewaifu.com/image/200" className='w-32 rounded-full border-[11px] border-[#E6EFFA] self-start' alt="" />
            <div className='space-y-7 text-[#1c2862]'>
                <div>
                    <h1 className='text-3xl font-bold font-popi'>David Grant</h1>
                    <h2 className='mt-1'>3D Artist</h2>
                </div>

                <div className='space-y-4'>
                    <p className='flex items-center'>
                        <StarIcon />
                        4.7 Rating</p>
                    <p className='flex items-center'>
                        <StarIcon />4,447 Reivews</p>
                    <p className='flex items-center'>
                        <StarIcon />478 Students</p>
                </div>

                <p className="text-lg">
                    David Grant has been making video games for a living for more than 14 years as a Designer, Producer, Creative Director, and Executive Producer, creating games for console, mobile, PC and Facebook.
                </p>

                <button className="border-2 border-[#c4cadf] p-2 rounded-md">Show more</button>
            </div>
        </div>
    )
}
