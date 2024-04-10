import  DashboardIcon  from "../Icons/dashboard";
import { DocsIcon } from "../Icons/docs";
import { InsightsIcon } from "../Icons/insights";
import { MessageIcon } from "../Icons/message";
import  SearchIcon  from "../Icons/search";
import BooksIcon from "../Icons/books";
import TestIcon from "../Icons/quix";
import CoursesIcon from "../Icons/courses";

export const sidebardata = [
    {
        id: 1,
        title: "Dashboard",
        path: '/',
        Icon: DashboardIcon
    },
    {
        id: 2,
        title: 'Search',
        path: '/search',
        Icon: SearchIcon
    },
    {
        id: 3,
        title: 'Insights',
        path: '/insights',
        Icon: InsightsIcon
    },
    {
        id: 4,
        title: 'Docs',
        path: '/docs',
        Icon: DocsIcon
    },
    {
        id: 5,
        title: 'Educators',
        path: '/educators',
        Icon: BooksIcon
    },
    {
        id: 6,
        title: 'Tests',
        path: '/tests',
        Icon: TestIcon
    },
    {
        id: 7,
        title: 'Courses',
        path: '/courses',
        Icon: CoursesIcon
    },
    {
        id: 8,
        title: 'Messages',
        path: '/messages',
        Icon: MessageIcon,
        update: true
    },
]