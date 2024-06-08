import { useEffect } from "react";
import { DefaultLayout } from "../DefaultLayout";
import SinglePDF from "../SinglePDF/SinglePDF";

export function DocsScreen() {

    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    useEffect(() => {
        document.title = "Documents"
    })
    return (
        <DefaultLayout>
            <div className="">
                <h1 className="text-[30px]">Documents</h1>
                <div className="overflow-y-auto cursor-pointer h-[80%] p-[10px] pb-[0px] max-h-[820px]">
                    {array.map((_) => (
                        <SinglePDF />
                    ))}
                </div>
            </div>
        </DefaultLayout>
    );
}
