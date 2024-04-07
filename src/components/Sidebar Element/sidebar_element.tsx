import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type SidebarElementPropsType = {
    text: string;
    icon: ReactNode;
    redirectUrl: string;
    focus: Boolean;
    new?: Boolean;
}


export function SidebarElement(props: SidebarElementPropsType) {
    const navigate = useNavigate();

    return (
        <a className={`relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300 cursor-pointer ${props.focus ? 'text-gray-300' : ''}`} onClick={() => navigate(props.redirectUrl)}>
            {props.icon}
            <span className="ml-2 text-sm font-medium">{props.text}</span>
            {props.new && <span className="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>}
        </a>
    );
}


