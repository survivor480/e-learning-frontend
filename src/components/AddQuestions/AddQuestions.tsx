import { DefaultLayout } from "../DefaultLayout";
import TextEditor from "../TextEditor/TextEditor";

export function AddQuestions() {
    return (
        <DefaultLayout>
            <div className="flex justify-between flex-row px-[10px] items-center">
                <div className="flex font-bold text-3xl p-[10px]">Add Questions</div>
            </div>
            <TextEditor />
        </DefaultLayout>
    );
}