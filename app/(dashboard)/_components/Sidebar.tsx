"use client"
import Logo from '@/components/ui/Logo';
import React from 'react';
import SidebarRoutes from './SidebarRoutes';

const Sidebar: React.FC = () => {
    return (
        <div className="h-full border flex flex-col overflow-y-auto bg-white shadow-sm">
            <div className='p-6'>
                <Logo />
            </div>
            <div className="flex flex-col w-full">
                <SidebarRoutes />
            </div>

        </div>
    );
};

export default Sidebar;