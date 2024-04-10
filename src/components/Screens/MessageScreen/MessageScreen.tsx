import { DefaultLayout } from "../../DefaultLayout";
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';

export default function MessageScreen() {
    return (
        <DefaultLayout>
            <div className="text-3xl">Community-1</div>
            <div className="h-[20px]"></div>
            <div className="bg-[#1e293b] h-[800px] rounded-[10px] flex flex-col justify-end overflow-hidden">
                <div className="h-full"></div>
                <div className="bg-[#042f2e] h-[50px] space-x-4 flex items-center w-full p-1 pt-2">
                    <div className="h-[40px] w-[40px] flex items-center p-2 rounded-[5px] cursor-pointer">
                        <AddIcon />
                    </div>
                    <div className="rounded-[5px] overflow-hidden h-full w-full">
                        <input placeholder="Type your Message" className="bg-[#111827] h-full w-full p-2 px-4"/>
                    </div>
                    <div className="h-[40px] w-[40px] flex items-center p-2 rounded-[5px] cursor-pointer">
                        <SendIcon />
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}