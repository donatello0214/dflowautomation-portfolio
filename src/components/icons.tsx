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
    OpenAI: (props: React.SVGProps<SVGSVGElement>) => (
        <svg {...props} viewBox="0 0 512 512" fill="currentColor">
            <path d="M256 512c141.38 0 256-114.62 256-256S397.38 0 256 0 0 114.62 0 256s114.62 256 256 256z" />
            <path fill="#fff" d="M369.34 322.2c-13.4-7.7-20.5-22.1-20.5-35.3v-65.3c0-13.2 7.1-27.6 20.5-35.3l57-32.9c13.4-7.7 30.2-7.7 43.6 0l57 32.9c13.4 7.7 20.5 22.1 20.5 35.3v65.3c0 13.2-7.1 27.6-20.5 35.3l-57 32.9c-13.4 7.7-30.2 7.7-43.6 0l-57-32.9zM224.66 226.8c-13.4 7.7-20.5 22.1-20.5 35.3v65.3c0 13.2 7.1 27.6 20.5 35.3l57 32.9c13.4 7.7 30.2 7.7 43.6 0l57-32.9c13.4-7.7 20.5-22.1 20.5-35.3v-65.3c0-13.2-7.1-27.6-20.5-35.3l-57-32.9c-13.4-7.7-30.2-7.7-43.6 0l-57 32.9zM142.66 322.2c-13.4-7.7-20.5-22.1-20.5-35.3v-65.3c0-13.2 7.1-27.6 20.5-35.3l57-32.9c13.4-7.7 30.2-7.7 43.6 0l57 32.9c13.4 7.7 20.5 22.1 20.5 35.3v65.3c0 13.2-7.1 27.6-20.5 35.3l-57 32.9c-13.4-7.7-30.2-7.7-43.6 0l-57-32.9zM85.66 226.8c-13.4 7.7-20.5 22.1-20.5 35.3v65.3c0 13.2 7.1 27.6 20.5 35.3l57 32.9c13.4 7.7 30.2 7.7 43.6 0l57-32.9c13.4-7.7 20.5-22.1 20.5-35.3v-65.3c0-13.2-7.1-27.6-20.5-35.3l-57-32.9c-13.4-7.7-30.2-7.7-43.6 0l-57 32.9z" />
        </svg>
    ),
    Firebase: (props: React.SVGProps<SVGSVGElement>) => (
        <svg {...props} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 15.5L4.5 9.5l1-1 4.5 4.5 4.5-4.5 1 1-6 6zm1-12.5L18.5 13l-1 1-4.5-4.5-4.5 4.5-1-1 6-6z" />
        </svg>
    ),
    Make: (props: React.SVGProps<SVGSVGElement>) => (
        <svg {...props} viewBox="0 0 256 256" fill="currentColor">
            <circle cx="128" cy="128" r="128" />
            <path fill="#fff" d="M128 64a64 64 0 100 128 64 64 0 000-128zm0 104a40 40 0 110-80 40 40 0 010 80z" />
            <circle fill="#fff" cx="192" cy="128" r="24" />
        </svg>
    ),
    n8n: (props: React.SVGProps<SVGSVGElement>) => (
        <svg {...props} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-9h4v2h-4v-2zm0 4h4v2h-4v-2z" />
        </svg>
    ),
    Zapier: (props: React.SVGProps<SVGSVGElement>) => (
        <svg {...props} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-4h2v4zm4 0h-2v-4h2v4zm-2-6h-2V6h2v4z" />
        </svg>
    ),
    Notion: (props: React.SVGProps<SVGSVGElement>) => (
        <svg {...props} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H7.5V8H10v6h2V8h2.5v8z" />
        </svg>
    ),
    Airtable: (props: React.SVGProps<SVGSVGElement>) => (
        <svg {...props} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5L12 2zm0 11.5L2 8.5V17l10 5 10-5V8.5L12 13.5z" />
        </svg>
    ),
    Slack: (props: React.SVGProps<SVGSVGElement>) => (
        <svg {...props} viewBox="0 0 24 24" fill="currentColor">
            <path d="M5.5 14h3v-3h-3v3zm-2 2h3v-3h-3v3zm11-13h3v3h-3V3zm-2 2h3v3h-3V5zm-2-2h3v3h-3V3zm-2 2h3v3h-3V5zm-2-2h3v3h-3V3zm11 11h3v-3h-3v3zm-2 2h3v-3h-3v3zm2-4h3v-3h-3v3z" />
        </svg>
    ),
    Pipedrive: (props: React.SVGProps<SVGSVGElement>) => (
        <svg {...props} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5V7.5L16.5 12 10 16.5z" />
        </svg>
    ),
    GoogleCloud: (props: React.SVGProps<SVGSVGElement>) => (
        <svg {...props} viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.5 12c0-4.14-3.36-7.5-7.5-7.5S4.5 7.86 4.5 12s3.36 7.5 7.5 7.5 7.5-3.36 7.5-7.5zm-10.5 4.5l6-3-6-3v6z" />
        </svg>
    ),
};
