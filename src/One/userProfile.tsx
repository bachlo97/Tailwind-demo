import { StarIcon } from "../assets";

export const UserProfile = () => {
  return (
    <div className="flex w-[36rem] gap-x-4 rounded-lg bg-white p-12">
      <img
        src="https://placewaifu.com/image/200"
        className="w-32 self-start rounded-full border-[11px] border-[#E6EFFA]"
        alt=""
      />
      <div className="space-y-7 text-[#1c2862]">
        <div>
          <h1 className="font-popi text-3xl font-bold">David Grant</h1>
          <h2 className="mt-1">3D Artist</h2>
        </div>

        <div className="space-y-4">
          <p className="flex items-center">
            <StarIcon />
            4.7 Rating
          </p>
          <p className="flex items-center">
            <StarIcon />
            4,447 Reivews
          </p>
          <p className="flex items-center">
            <StarIcon />
            478 Students
          </p>
        </div>

        <p className="text-lg">
          David Grant has been making video games for a living for more than 14
          years as a Designer, Producer, Creative Director, and Executive
          Producer, creating games for console, mobile, PC and Facebook.
        </p>

        <button className="rounded-md border-2 border-[#c4cadf] p-2">
          Show more
        </button>
      </div>
    </div>
  );
};
