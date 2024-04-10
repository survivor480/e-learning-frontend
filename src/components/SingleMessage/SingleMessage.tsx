import { useNavigate } from "react-router-dom";
import UserIcon from "../../assets/avatar.svg"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export function SingleMessage() {

    const navigate = useNavigate();

    const goToMessage = () => {
        navigate('/messages/sample_message_interface');
    }

    return (
        <div className="text-[#9a9a9a] border-[1px] border-[#334155] rounded-[10px] my-3" onClick={goToMessage}>
            <div className="w-full p-[10px] flex flex-row cursor-pointer items-center h-full">
                <div className="rounded-[50%] overflow-hidden p-[5px] mr-[15px]"><img width={50} height={50} src={UserIcon}alt="Learn Icon"></img></div>
                <div className="flex flex-col w-full justify-center">
                    <h1 className="font-bold text-lg">Final Year</h1>
                    <p className="text-xs">Important update! This is to remind that this class will close upon the completion of your final year exams.</p>
                </div>
                <div className="flex items-center justify-around w-[6%]">
                    <ArrowForwardIosIcon />
                </div>
            </div>
        </div>
    );
}



