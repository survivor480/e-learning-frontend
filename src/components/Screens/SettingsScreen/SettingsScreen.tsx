import { DefaultLayout } from "../../DefaultLayout";

export default function SettingsScreen() {
    return (
        <DefaultLayout>
            <div className="flex justify-between flex-row px-[10px] items-center">
                <div className="flex font-bold text-3xl p-[10px]">Settings</div>
            </div>
        </DefaultLayout>
    )
}