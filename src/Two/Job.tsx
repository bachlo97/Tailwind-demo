import { ReactNode } from "react";

export interface JobProps {
    title: string;
    icon: ReactNode,
    bgClass: string;
    
}

export const Job: React.FC<JobProps> = ({ title, icon, bgClass}) => {
    return (
        <div className={`${bgClass} flex justify-center items-center flex-col aspect-square rounded-lg p-4`}>
            {icon}
            <p className="pt-2 font-popi">{title}</p>

        </div>
    )
}


// export default function Job({ title, icon, bgClass }:JobProps) {
//     return (
//         <div className={`${bgClass}-200`}>
//             {icon}
//             <p>{title}</p>
//         </div>
//     )
// }



