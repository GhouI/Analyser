"use client"
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card"
import Campaigns from '@/Utils/types/Campaign-Type';
import { useRouter } from 'next/navigation';

interface Props {
    // Define the props for your component here
}

const MyComponent: React.FC<Props> = (props) => {
    const Navigate = useRouter()
    const [CampaignData, SetCampaignData] = useState<Campaigns[]>([]);
    const Router = (id: string) => {

        try {
            Navigate.push(`/data-analysis/${id}`)
        } catch (e) {
            console.error("Navigation routing error has occured.")
        }
    }
    useEffect(() => {
        const fetchData = async () => {
            const apiHit = await fetch("/api/campaigns");
            const response = await apiHit.json();
            SetCampaignData(response);
        };
        fetchData();
    }, []);

    // Implement your component logic here
    return (
        <div>
            <div className="ml-16">
                <p className='text-5xl font-thin'>Data Analysis</p>
            </div>
            <Card className="w-full max-w-6xl my-32  mx-auto">
                <div className="h-10 bg-gray-200 flex items-center justify-between px-4">
                    <p className='font-bold text-lg justify-center'>Select your Campaign to view</p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded">
                        Select All Campaigns
                    </button>
                </div>

                <CardContent>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {CampaignData.map((Campaign, index) => (
                            <div key={index} className="my-2 relative overflow-hidden rounded-lg outline-none hover:outline hover:outline-2 hover:outline-blue-500" onClick={() => Router("1")}>
                                <img src={Campaign.ImageURL} alt={Campaign.Name} className="w-full h-48 object-cover" />
                                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                                    <p className="text-sm font-semibold">{Campaign.Name}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default MyComponent;