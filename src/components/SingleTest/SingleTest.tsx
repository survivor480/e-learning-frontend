import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function SingleTest({
  UserIcon,
}: {
  UserIcon: string;
}) {
  return (
    <div className="text-[#9a9a9a] border-[1px] border-[#334155] rounded-[10px] my-3">
        <div className="w-full p-[10px] flex flex-row cursor-pointer items-center h-full">
            <div className="rounded-[50%] overflow-hidden p-[5px] mr-[15px]">
              <img width={50} height={50} src={UserIcon}alt="Learn Icon" />
            </div>
            <div className="flex flex-col w-full justify-center">
                <h1 className="font-bold text-lg">Utkarsh Test</h1>
                <p className="text-xs">25 Full Length tests and 15 subject wise test.</p>
            </div>
            <div className="flex items-center justify-around w-[6%]">
                <ArrowForwardIosIcon />
            </div>
        </div>
    </div>
  );
}
