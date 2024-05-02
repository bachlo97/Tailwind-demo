import { ReactNode } from "react";

export interface JobProps {
  title: string;
  icon: ReactNode;
  bgClass: string;
}

export const Job: React.FC<JobProps> = ({ title, icon, bgClass }) => {
  return (
    <div
      className={`${bgClass} flex aspect-square flex-col items-center justify-center rounded-lg p-4`}
    >
      {icon}
      <p className="pt-2 font-popi">{title}</p>
    </div>
  );
};

// export default function Job({ title, icon, bgClass }:JobProps) {
//     return (
//         <div className={`${bgClass}-200`}>
//             {icon}
//             <p>{title}</p>
//         </div>
//     )
// }
