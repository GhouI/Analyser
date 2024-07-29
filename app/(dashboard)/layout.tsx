import { useClerk } from '@clerk/nextjs';

const DashboardLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    const { signOut } = useClerk();
    return (
        <main>
            {children}
            <div className='flex justify-end my-0 py-0'>
                <button className="outline outline-black " onClick={() => signOut({ redirectUrl: '/' })}>
                    Sign out
                </button>
            </div>
        </main>
    );
}

export default DashboardLayout;