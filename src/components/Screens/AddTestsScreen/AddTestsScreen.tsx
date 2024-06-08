import { DefaultLayout } from "../../DefaultLayout";

export function AddTestsScreen() {
    return (
        <DefaultLayout>
            <div className="flex justify-between flex-row px-[10px] items-center">
                <div className="flex font-bold text-3xl p-[10px]">Add Tests Screen</div>
                <p className="text-[20px] border-[1px] px-8 rounded-lg cursor-pointer">Add Test</p>
            </div>
            <div className="h-[800px] border-[1px] rounded-md">
                
            </div>
        </DefaultLayout>
    );
}