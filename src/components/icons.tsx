import { cn } from "@/lib/utils";

export const Icons = {
    Logo: ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className={cn("h-6 w-6", className)}
            {...props}
        >
            <path fill="none" d="M0 0h256v256H0z" />
            <path
                fill="currentColor"
                d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm-44.11 152H68V80h15.89a48 48 0 0 1 0 96Zm64.1-40.45-19.14-22.1a24 24 0 0 0-16.76-7.45H96v52h16.11a24 24 0 0 0 16.77-7.45l19.14-22.1a4 4 0 0 1 5.3-.29A4 4 0 0 1 153.61 136Z"
            />
            <path
                fill="currentColor"
                d="M150.39 160H160a28 28 0 0 0 0-56h-9.61a4 4 0 0 0-3.23 6.14l12.37 14.29a4 4 0 0 1 0 5.14l-12.37 14.29A4 4 0 0 0 150.39 160Z"
            />
        </svg>
    ),
};
