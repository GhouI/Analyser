import { cn } from '@/Utils/utils';
import { LucideIcon } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

interface SidebarItemProps {
    icon: LucideIcon,
    text: string,
    path: string,
}

const SidebarItem = ({ icon: Icon, text, path }: SidebarItemProps) => {
    // Implement your component logic here
    const pathname = usePathname();
    const router = useRouter();

    const isActive =
        (pathname === "/" && path === "/") || pathname === path || pathname?.startsWith(`${path}/`)

    const onClick = () => {
        router.push(path);
    }
    return (
        // JSX code for your component's UI goes here
        <button
            onClick={onClick}
            type="button"
            className={cn(
                "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
                isActive && "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
            )}
        >
            <div className="flex items-center gap-x-2 py-4">
                <Icon
                    size={22}
                    className={cn(
                        "text-slate-500",
                        isActive && "text-sky-700"
                    )}
                />
                {text}
            </div>
            <div
                className={cn(
                    "ml-auto opacity-0 border-2 border-sky-700 h-full transition-all",
                    isActive && "opacity-100"
                )}
            >
            </div>
        </button>
    );
};

export default SidebarItem;