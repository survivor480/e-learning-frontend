import { Sidebar } from "../Sidebar/sidebar";
import UserIcon from "../../assets/avatar.svg"

export function TestsScreen() {
    return (
        <div className='w-full h-[100vh] bg-[#1f2937] flex flex-row select-none'>
            <Sidebar />
            <div className="text-[#ccc] w-full p-[10px] flex flex-col">
                <div className="w-full float-right flex flex-row justify-end cursor-pointer mb-[25px]">
                    <div className="flex flex-row justify-between items-center pr-[30px] rounded-[10px]">
                        <div className="rounded-[50%] overflow-hidden p-[5px] mr-[15px]"><img width={50} height={50} src={UserIcon} alt="Learn Icon"></img></div>
                        <div className="flex flex-col">
                            <h1 className="font-bold text-[18px] font-serif">Admin</h1>
                            <p className="text-[11px] font-serif">@admin</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#111827] rounded-[20px] h-full">

                </div>
            </div>
        </div>
    );
}
