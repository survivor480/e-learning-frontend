import { DefaultLayout } from "../DefaultLayout";
import SearchIcon from '@mui/icons-material/Search';

export function SearchScreen() {
    return (
        <DefaultLayout>
            <div className="flex items-center justify-center">
                <div className="rounded-[50px] overflow-hidden flex w-[60%] h-[40px] items-center justify-center max-w-[500px] border-[1px] border-solid border-[#ccc]">
                    <div className="w-[12%] flex justify-center cursor-pointer"><SearchIcon /></div>
                    <input className="w-full focus:outline-none focus:bg-black  p-[10px] h-full text-white" placeholder="Search"></input>
                </div>
            </div>
        </DefaultLayout>
    );
}
