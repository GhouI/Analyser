"use client"
import CSVRow from '@/Utils/types/CSV-Types';
import React, { useEffect, useState } from 'react';
import DataTable from '@/app/components/data-table';
interface Props {
    // Define the props for your component here
}

const MyComponent: React.FC<Props> = (props) => {
    const [data, setData] = useState<CSVRow[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const apiHit = await fetch("/api/getallads");
            const response = await apiHit.json();
            setData(response);
        };
        fetchData();
    }, []);

    // Implement your component logic here
    return (
        <div className='flex justify-center items-center p-52'>
            {/* Render your component UI here */}
            <DataTable data={data} />
        </div>
    );
};

export default MyComponent;