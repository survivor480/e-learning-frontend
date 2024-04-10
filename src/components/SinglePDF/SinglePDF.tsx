import UserIcon from "../../assets/avatar.svg";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useState } from "react";

export default function SinglePDF() {

    let [bookmarked, setBookMark] = useState(false);

    function toggleBookmarkButton() {
        return setBookMark(!bookmarked);
    }

    return (
        <div className="text-[#9a9a9a] border-[1px] border-[#334155] rounded-[10px] my-3">
            <div className="w-full p-[10px] flex flex-row cursor-pointer items-center">
                <div className="rounded-[50%] overflow-hidden p-[5px] mr-[15px]"><img width={50} height={50} src={UserIcon}alt="Learn Icon"></img></div>
                <div className="flex flex-col w-full">
                    <h1 className="font-bold text-lg">Final Year</h1>
                    <p className="text-xs">Important update! This is to remind that this class will close upon the completion of your final year exams.</p>
                </div>
                <div className="flex items-center justify-around w-[6%]">
                    <div onClick={toggleBookmarkButton}>{bookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}</div>
                    <ArrowForwardIosIcon />
                </div>
            </div>

        </div>
    );
}



