"use client"
import React from 'react';
import { SignOutButton, useUser } from '@clerk/nextjs'
import { Dashboard } from '@/components/component/dashboard';


interface Props {
    // Define the props for your component here
}

const MyComponent: React.FC<Props> = (props) => {
    // Implement your component logic here
    const { user } = useUser()

    return (
        <div className="p-6">
            <p className='text-xl font-extrabold mb-6'>Welcome back {user?.firstName}</p>
            <Dashboard />
        </div>
    );
};

export default MyComponent;