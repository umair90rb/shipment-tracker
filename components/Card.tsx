import { PropsWithChildren } from "react";

export default function Card({children}: PropsWithChildren){
    return <div className=" container mx-auto px-4 py-8 max-w-4xl bg-white rounded-2xl shadow-xl p-8 border border-gray-100 space-y-8">{children}</div>
}