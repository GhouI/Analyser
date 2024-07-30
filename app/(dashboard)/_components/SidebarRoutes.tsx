"use client"
import React from 'react';
import { AlertCircle, ChartNoAxesColumnIncreasing, Gauge } from "lucide-react"
import { usePathname } from 'next/navigation';
import SidebarItem from './SidebarItem';

interface Props {

}

const AllRoutes = [
    {
        icon: Gauge,
        text: "Main Board",
        path: "/main-board"
    },
    {
        icon: ChartNoAxesColumnIncreasing,
        text: "Data Analysis",
        path: "/data-analysis"
    },
    {
        icon: AlertCircle,
        text: "Alerts",
        path: "/alerts"
    }
]
const SidebarRoutes: React.FC<Props> = (props) => {
    // Implement your component logic here
    const pathname = usePathname();

    return (
        // JSX code for your component's UI goes here
        <div className="flex flex-col w-full">
            {/* Add your component's content here */}
            {AllRoutes.map((route) => {
                return <SidebarItem key={route.text} icon={route.icon} text={route.text} path={route.path} />
            })}
        </div>
    );
};

export default SidebarRoutes;