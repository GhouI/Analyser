"use client"
import React from 'react';
import { useParams } from 'next/navigation'
interface Props {
    // Define the props for your component here
}

const MyComponent: React.FC<Props> = (props) => {
    // Implement your component logic here
    const parms = useParams() as { [key: string]: string }
    const campaignId = parms.CampaignId || "nothing found"; // Make sure this matches your route parameter name exactly

    return (
        <div>
            {/* Render your component UI here */}
            Hello, Campaign ID: {campaignId}
        </div>
    );
};

export default MyComponent;