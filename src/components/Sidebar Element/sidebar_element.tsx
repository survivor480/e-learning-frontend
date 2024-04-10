import { useNavigate } from "react-router-dom";

type SidebarElementPropsType = {
  text: string;
  Icon: () => JSX.Element;
  redirectUrl: string;
  focus: Boolean;
  update?: Boolean;
};

export function SidebarElement({
  focus,
  Icon,
  redirectUrl,
  text,
  update,
}: SidebarElementPropsType) {
  const navigate = useNavigate();

  return (
    <li
      className={`w-full hover:bg-gray-700/60 hover:text-gray-300 ${
        focus && "bg-gray-700"
      }`}
      onClick={() => navigate(redirectUrl)}
    >
      <a className={`flex  ${focus ? "text-gray-300 " : ""}`}>
        <Icon />
        <span className="ml-2 font-medium text-[17px] max-sm:hidden">{text}</span>
        {update && (
          <span className="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-red-700 rounded-full"></span>
        )}
      </a>
    </li>
  );
}
