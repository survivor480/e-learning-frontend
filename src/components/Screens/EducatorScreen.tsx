import { DefaultLayout } from "../DefaultLayout";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js/auto";
import GitHubIcon from '@mui/icons-material/GitHub';
import { Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '../../assets/github.svg'
import { useEffect } from "react";

Chart.register(CategoryScale);

export function EducatorsScreen() {
    useEffect(() => {
        document.title = "Educators"
    })
    
    return (
        <DefaultLayout>
            <div className="flex font-bold text-3xl p-[10px]">Educators</div>   
        <div className="grid grid-cols-4 gap-3 overflow-y-auto h-[780px] p-[10px]">
        {[1, 2, 3, 4, 5].map(_ => (
            <div className="relative rounded-[20px] border-[#ccc] border-[1px] h-[500px] overflow-hidden items-center">
                <div
                className={`h-[200px] flex bg-[url("src/assets/sample_teacher_background.jpg")] bg-opacity-50 bg-cover w-full`}
                ></div>
                <div className="flex flex-col items-center justify-center absolute top-[23%] left-[22%]">
                <img
                    height={160}
                    width={160}
                    className="bg-gray-900 p-1.5 rounded-full"
                    src={GithubIcon}
                />
                <div className="space-y-3 text-center">
                    <div className="text-[24px] font-semibold tracking-wider">
                    Something
                    </div>
                    <div className="text-sm font-medium text-gray-400 tracking-wider">
                    Web Developer
                    </div>
                    <div className="w-full flex justify-around gap-4">
                    <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((_) => (
                        <StarIcon
                            sx={{
                            "&:hover": {
                                color: "yellow",
                                cursor: "pointer",
                            },
                            }}
                        />
                        ))}
                    </div>
                    <p>2.5/5.0</p>
                    </div>
                    <div className="text-sm space-x-2">
                    <Button variant="contained">Follow</Button>
                    </div>
                    <div className="flex justify-around">
                        <button className="rounded-full bg-[#475569] p-[10px]">
                            <LinkedInIcon />
                        </button>
                        <button className="rounded-full bg-[#475569] p-[10px]">
                            <GitHubIcon />
                        </button>
                    </div>
                </div>
                </div>
            </div>
        ))}
        </div>
        </DefaultLayout>
    );
}
