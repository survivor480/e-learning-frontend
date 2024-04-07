import { DashboardIcon } from "../Icons/dashboard";
import { DocsIcon } from "../Icons/docs";
import { InsightsIcon } from "../Icons/insights";
import { MessageIcon } from "../Icons/message";
import { ProductIcon } from "../Icons/products";
import { SearchIcon } from "../Icons/search";
import { SettingsIcon } from "../Icons/settings";
import { SidebarElement } from "../Sidebar Element/sidebar_element";
import LearnIcon from "../../assets/learning_logo.svg";
import { useLocation, useNavigate } from "react-router-dom";


export function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation();
    console.log("The location is: ", location.pathname);

    return (
        <div className="flex flex-col items-center w-[20%] h-full overflow-hidden text-gray-400 bg-gray-900 rounded">
            <a className="flex items-center w-full px-3 mt-3 cursor-pointer" onClick={() => {navigate('/')}}>
                <div className="rounded-[50%] overflow-hidden p-[5px]"><img width={50} height={50} src={LearnIcon} alt="Learn Icon"></img></div>
                <span className="ml-2 text-sm font-bold">Learn</span>
            </a>
            <div className="w-full px-2">
                <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
                    <SidebarElement text="Dashboard" icon={<DashboardIcon />} redirectUrl="/dashboard" focus={location.pathname==='/dashboard' ? true : false}/>
                    <SidebarElement text="Search" icon={<SearchIcon />} redirectUrl="/search" focus={location.pathname==='/search' ? true : false} />
                    <SidebarElement text="Insights" icon={<InsightsIcon />} redirectUrl="/insights" focus={location.pathname==='/insights' ? true : false} />
                    <SidebarElement text="Docs" icon={<DocsIcon />} redirectUrl="/docs" focus={location.pathname==='/docs' ? true : false} />
                </div>
                <div className="flex flex-col items-center w-full mt-2 border-t border-gray-700">
                    <SidebarElement text="Classroom" icon={<ProductIcon />} redirectUrl="/classroom" focus={location.pathname==='/classroom' ? true : false}/>
                    <SidebarElement text="Tests" icon={<SettingsIcon />} redirectUrl="/tests" focus={location.pathname==='/tests' ? true : false}/>
                    <SidebarElement text="Courses" icon={<SettingsIcon />} redirectUrl="/courses" focus={location.pathname==='/courses' ? true : false}/>
                    <SidebarElement text="Messages" icon={<MessageIcon />} new={true} redirectUrl="/messages" focus={location.pathname==='/messages' ? true : false}/>
                </div>
            </div>
        </div>
    )

}