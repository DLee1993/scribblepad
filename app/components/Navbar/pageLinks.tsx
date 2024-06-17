import { ReaderIcon, CalendarIcon, CheckboxIcon, DesktopIcon } from "@radix-ui/react-icons";

export const pageLinks = [
    {
        pageName: "dashboard",
        href: "/dashboard",
        icon: <DesktopIcon />,
    },
    {
        pageName: "notes",
        href: "/notes",
        icon: <ReaderIcon />,
    },
    {
        pageName: "tasks",
        href: "/tasks",
        icon: <CheckboxIcon />,
    },
    {
        pageName: "calendar",
        href: "/calendar",
        icon: <CalendarIcon />,
    },
];
