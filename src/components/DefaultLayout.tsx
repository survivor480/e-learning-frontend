import { Sidebar } from "./Sidebar/sidebar";
import UserIcon from "../assets/avatar.svg";
import { ReactNode, useEffect, useState } from "react";
import gradient1 from "../assets/docs-dark@30.1a9f8cbf.avif"
import gradient2 from "../assets/docs@30.8b9a76a2.avif"
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { useNavigate } from "react-router-dom";

export function DefaultLayout({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event:any) => {
    if (!event.target.closest('.dropdown')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full h-screen bg-slate-900 flex flex-row select-none font-[Raleway]">
      <div className="absolute z-20 top-0 inset-x-0 flex justify-center pointer-events-none blur-3xl h-screen">
        <div className="w-[108rem] flex-none flex justify-end">
          <picture>
            <source
              srcSet={gradient1}
              type="image/avif"
            />
            <img
              src="/_next/static/media/docs@tinypng.d9e4dcdc.png"
              alt=""
              className="w-[71.75rem] flex-none max-w-none dark:hidden"
              decoding="async"
            />
          </picture>
          <picture>
            <source
              srcSet={gradient2}
              type="image/avif"
            />
            <img
              src="/_next/static/media/docs-dark@tinypng.1bbe175e.png"
              alt=""
              className="w-[90rem] flex-none max-w-none hidden dark:block"
              decoding="async"
            />
          </picture>
        </div>
      </div>
      <div className="w-[20%]">
        <Sidebar />
      </div>
      <div className="text-[#ccc] w-full h-screen overflow-hidden">
        <div className="w-full flex justify-end items-center cursor-pointer p-2 pt-3">
          <div className="flex justify-between items-center gap-2 pr-[10px] rounded-[10px] dropdown" onClick={toggleDropdown}>
            <div className="px-[5px]">
              <h1 className="font-bold text-[18px]">Admin</h1>
              <p className="text-[11px]">@admin</p>
            </div>
            <div className="rounded-full overflow-hidden">
              <img width={44} height={44} src={UserIcon} alt="User"></img>
            </div>
          </div>
          {isOpen && (
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
          )}
        </div>
        <div className="bg-[#111827] rounded-[20px] p-[15px]">{children}</div>
      </div>
    </div>
  );
}
