import { SidebarElement } from "../Sidebar Element/sidebar_element";
// import LearnIcon from "../../assets/learning_logo.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { sidebardata } from "./sidebardata";

export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("The location is: ", location.pathname);

  return (
    <div className="flex flex-col left-0 items-center w-full min-h-screen overflow-hidden text-gray-400 rounded border-r border-gray-700 bg-gray-900">
      <a
        className="flex w-full mt-3 pl-6 cursor-pointer "
        onClick={() => {
          navigate("/");
        }}
      >
        {/* <div className="rounded-[50%] overflow-hidden p-[5px]"><img width={75} height={75} src={LearnIcon} alt="Learn Icon"></img></div> */}
        <span className="ml-2 font-semibold tracking-wider text-3xl font-[Righteous]">Learn</span>
      </a>
      <div className="w-full">
        <ul className="flex flex-col items-center w-full mt-3 border-t border-gray-700 px-4 *:relative *:flex *:items-center *:w-full *:h-12 *:px-3 *:mt-2 *:rounded *:cursor-pointer">
          {sidebardata.map((data) => (
            <SidebarElement
              text={data.title}
              key={data.id}
              Icon={data.Icon}
              redirectUrl={data.path}
              focus={location.pathname === data.path ? true : false}
              update={data.update}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
