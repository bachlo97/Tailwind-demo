import { ReactNode } from "react";

interface Choice {
  logo: ReactNode;
  title: string;
  subtitle: string;
  price: number;
  shadowClass: string;
}
const choices: Choice[] = [
  {
    title: "Ice mobile 10GB",
    subtitle: "Up to 100Mbit/s",
    price: 299,
    logo: <img src="../../public/logo 1.png" alt="" />,
    shadowClass: "shadow-[-1.5rem_-1.5rem__0_0_#fffbec]",
  },
  {
    title: "Telia Mobil 15GB",
    subtitle: "Unlimited calls, SMS and MMS",
    price: 953,
    shadowClass: "shadow-[-1.5rem_-1.5rem__0_0_#F9ECFF]",
    logo: <img src="../../public/logo 2.png" alt="" />,
  },
  {
    title: "Telenor Next Fast",
    subtitle: "Up to 100Mbit/s",
    price: 1028,
    shadowClass: "shadow-[-1.5rem_-1.5rem__0_0_#ECEEFF]",
    logo: <img src="../../public/logo 3.png" alt="" />,
  },
];

export const Subscriptions = () => {
  return (
    <div className="space-y-14 rounded-3xl bg-[#f4f5fa] p-20">
      <div>
        <h1 className="text-balance text-center font-meri text-3xl font-black">
          Get the most out of your mobile with the right subscription
        </h1>
        <p className="mt-6 text-balance text-center font-popi text-lg">
          All devices come with free delivery or pickup as standard. See
          information on available shopping options for your location.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-10 ">
        {choices.map((choice) => (
          <div className={`rounded-xl bg-white p-10 ${choice.shadowClass}`}>
            {choice.logo}
            <div className="h-[8rem]">
                <h3 className="mt-4 font-popi text-lg font-semibold">
                  {choice.title}
                </h3>
                <p className="mt-1 font-popi text-sm">{choice.subtitle}</p>
                <div className="mt-4 flex items-center font-popi">
                  <span className="text-2xl font-bold">{`${choice.price},-`}</span>
                  <span className="text-sm">month</span>
                </div>
            </div>
            <button className="mt-10 rounded-full border-[1px] border-[#f0f0f6] bg-[#f4f5fa] px-6 py-4 shadow-[0px_4px_0px_0px_#e7e7fb;]">
              Add subscription
            </button>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="rounded-full bg-[#171435] p-4 text-white">
          See all subscriptions
        </button>
      </div>
    </div>
  );
};
