import { useState } from "react";

export const Notification: React.FC = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="w-[44rem]">
      <div className="text-right">
        <button
          className="rounded-full bg-[#0c0e41] p-4 text-white"
          onClick={() => setShow(!show)}
        >
          <svg
            className="h-10 w-10"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2_7)">
              <path
                d="M18.3333 9.16667C18.3333 8.19421 18.7196 7.26158 19.4073 6.57394C20.0949 5.88631 21.0275 5.5 22 5.5C22.9724 5.5 23.9051 5.88631 24.5927 6.57394C25.2803 7.26158 25.6666 8.19421 25.6666 9.16667C27.7721 10.1622 29.5669 11.7119 30.8587 13.6497C32.1506 15.5875 32.8908 17.8403 33 20.1667V25.6667C33.1379 26.8065 33.5416 27.8979 34.1785 28.8532C34.8153 29.8085 35.6676 30.6009 36.6666 31.1667H7.33331C8.33237 30.6009 9.18463 29.8085 9.82149 28.8532C10.4583 27.8979 10.862 26.8065 11 25.6667V20.1667C11.1092 17.8403 11.8494 15.5875 13.1412 13.6497C14.4331 11.7119 16.2279 10.1622 18.3333 9.16667"
                stroke="currentColor"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.5 31.1667V33C16.5 34.4587 17.0795 35.8576 18.1109 36.8891C19.1424 37.9205 20.5413 38.5 22 38.5C23.4587 38.5 24.8576 37.9205 25.8891 36.8891C26.9205 35.8576 27.5 34.4587 27.5 33V31.1667"
                stroke="currentColor"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_7">
                <rect width={44} height={44} fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      <div
        className={`mt-4 w-full rounded-2xl bg-white p-10 shadow-sm transition-all duration-500 ${show ? "opacity-1" : "opacity-0"}`}
      >
        <h2 className="font-popi text-xl font-semibold">
          You have 1 new message
        </h2>
        <div className="mt-6 flex gap-6">
          <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-[#ffe9f2]">
            <svg
              className="h-10 w-10"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2_15)">
                <path
                  d="M34.8333 9.16666H9.16667C7.14162 9.16666 5.5 10.8083 5.5 12.8333V31.1667C5.5 33.1917 7.14162 34.8333 9.16667 34.8333H34.8333C36.8584 34.8333 38.5 33.1917 38.5 31.1667V12.8333C38.5 10.8083 36.8584 9.16666 34.8333 9.16666Z"
                  stroke="#C83974"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.5 12.8333L22 23.8333L38.5 12.8333"
                  stroke="#C83974"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_15">
                  <rect width={44} height={44} fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col justify-center font-popi text-[#0c0e41]">
            <h3 className="font-semibold">Feb 22</h3>
            <p className="text-sm font-normal">
              If you like what we do, please tell your friends and share.
            </p>
          </div>
        </div>
        <div className="mt-8 space-x-4 text-center">
          <button className="space-x-1 rounded-full border-2 border-[#158ABB] p-2 font-popi font-semibold text-[#158ABB]">
            <svg
              className="inline h-6 w-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="">Twitter</span>
          </button>
          <button className="rounded-full border-2 border-[#205195] p-2 font-popi font-semibold text-[#205195]">
            <svg
              className="inline h-6 w-6 font-semibold"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                clip-rule="evenodd"
              />
            </svg>

            <span>Facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
};
