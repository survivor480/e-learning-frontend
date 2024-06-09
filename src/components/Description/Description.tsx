
import UserIcon from "../../assets/avatar.svg";
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { useNavigate } from "react-router-dom";

export default function Description() {
    const navigate = useNavigate();
    return (
        <div className="right-[25px] top-[60px] absolute mt-2 w-[300px] rounded-md shadow-lg bg-[#d4d4d4] ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="flex items-center p-[10px]">
                <img width={80} height={80} src={UserIcon} alt="User" className="p-[5px]"/>
                <div className="items-start h-full">
                    <h1 className="text-md text-black font-bold">Admin</h1>
                    <p className="text-xs text-black">@admin</p>
                </div>
            </div>
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <div className="flex justify-between items-center px-2" role="menuitem" onClick={() => navigate('/profile')}>
                <a href="#" className="block py-2 text-sm text-gray-700">
                Profile
                </a>
                <ManageAccountsIcon color="primary"/>
            </div>
            <div className="flex justify-between items-center px-2" role="menuitem" onClick={() => navigate('/settings')}>
                <a href="#" className="block py-2 text-sm text-gray-700">
                Settings
                </a>
                <SettingsIcon color="primary"/>
            </div>
            <div className="flex justify-between items-center px-2" role="menuitem">
                <a href="#" className="block py-2 text-sm text-gray-700">
                Logout
                </a>
                <LogoutIcon color="secondary"/>
            </div>
            </div>
        </div>
    )
}