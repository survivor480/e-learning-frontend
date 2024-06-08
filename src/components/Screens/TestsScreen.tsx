import { DefaultLayout } from "../DefaultLayout";
import UserIcon from "../../assets/avatar.svg";
import SingleTest from "../SingleTest/SingleTest";
import { useNavigate } from "react-router-dom";

export function TestsScreen() {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const navigate = useNavigate();
    return (
        <DefaultLayout>
            <div className="flex justify-between flex-row px-[10px] items-center">
                <div className="flex font-bold text-3xl p-[10px]">Tests</div>
                <p className="border-[1px] p-[3px] rounded min-w-[11.5rem] text-center cursor-pointer border-[#64748b]" onClick={() => navigate('/add-test')}>Add Test</p>
            </div>
            <div className="overflow-y-auto cursor-pointer h-[80%] p-[10px] pb-[0px] max-h-[820px]">
                {array.map((_) => (
                    <SingleTest UserIcon={UserIcon} />
                ))}
            </div>
        </DefaultLayout>
    );
}
