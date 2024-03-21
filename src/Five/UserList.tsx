import { useState } from "react";
import { Job } from "../Two/Job";

interface User {
  name: string;
  job: string;
  avatar: string;
  tags: string[];
}
const users: Array<User> = [
  {
    name: "Lelah Nichols",
    job: "Troy, MI",
    avatar: "/public/avt 1.png",
    tags: ["clothes", "stem"],
  },
  {
    name: "Jesus Weiss",
    job: "Fort Worth, TX",
    avatar: "/public/avt 2.png",
    tags: ["headset", "gadget", "speed", "winter"],
  },
  {
    name: "Annie Rice",
    job: "Austin, TX",
    avatar: "/public/avt 3.png",
    tags: ["road", "moutain", "trip", "earth", "nature"],
  },
  {
    name: "Robert Brower",
    job: "CinCinnati, OH",
    avatar: "/public/avt 4.png",
    tags: ["Maintenance", "gears", "frames", "repair"],
  },
  {
    name: "Amy Campbell",
    job: "Warrior, AL",
    avatar: "/public/avt 5.png",
    tags: ["music", "disks"],
  },
  {
    name: "Anthony S.Morin",
    job: "Lyndhurst, NJ",
    avatar: "/public/avt 6.png",
    tags: ["vintage", "electric"],
  },
];
export const UserList = () => {
  const [query, setQuery] = useState("");
  const FILTERS: string[] = [
    "Reputation",
    "New users",
    "Voters",
    "Editors",
    "Moderators",
  ];
  const filterUsers: User[] =
    query.length > 0
      ? users.filter((user) => {
          return user.name.toLowerCase().includes(query.toLowerCase());
        })
      : users;
  return (
    <div className="min-w-[40rem] rounded-lg bg-white p-16 shadow">
      <h1 className="font-meri text-4xl font-black">Users</h1>

      <div className="my-6 flex flex-col gap-4 md:flex-row">
        <div>
          <div className="relative grow rounded-md border-2 border-gray-300">
            <input
              type="text"
              className="mr-2 w-full  px-4 py-3 pl-10"
              placeholder="Search users"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>
        <div className="space-x-2 ">
          {FILTERS.map((flt) => (
            <a
              className="hover:text-white-600 mb-2 inline-block cursor-pointer rounded-lg bg-white px-4 py-3 hover:bg-[#849fff]"
              id={flt}
            >
              {flt}
            </a>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filterUsers.map((user) => (
          <div
            key={user.name}
            className="flex cursor-pointer gap-x-4 rounded-xl bg-[#fbfcff] p-6 hover:border-[1px] hover:border-[#BFC8E5] hover:shadow-lg"
          >
            <img src={user.avatar} alt="" className="object-contain" />
            <div>
              <h3 className="font-meri font-black">{user.name}</h3>
              <p className="font-popi text-sm">{user.job}</p>
              <div className="mt-4 space-x-2">
                {user.tags.map((tag) => (
                  <span
                    className="inline-block rounded-full border-[1px] border-slate-500 px-1 text-xs text-[#516fd4]"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
