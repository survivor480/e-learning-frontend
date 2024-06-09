import DeleteIcon from '@mui/icons-material/Delete';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';

export default function SingleAddTest({
  UserIcon,
  title,
  description
}: {
  UserIcon: string;
  title: string;
  description: string;
}) {
    const navigate = useNavigate();
    return (
        <div className="text-[#9a9a9a] border-[1px] border-[#334155] rounded-[10px] my-3">
            <div className="w-full p-[10px] flex flex-row cursor-pointer items-center h-full">
                <div className="rounded-[50%] overflow-hidden p-[5px] mr-[15px]">
                <img width={50} height={50} src={UserIcon}alt="Learn Icon" />
                </div>
                <div className="flex flex-col w-full justify-center">
                    <h1 className="font-bold text-lg">{title}</h1>
                    <p className="text-xs">{description}</p>
                </div>
                <div className="flex items-center justify-around w-[6%]">
                    <DeleteIcon color='secondary' />
                    <ArrowForwardIosIcon onClick={() => navigate('/add-test/add-questions')}/>
                </div>
            </div>
        </div>
    );
}
