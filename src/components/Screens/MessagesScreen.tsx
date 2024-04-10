import { DefaultLayout } from "../DefaultLayout";
import { SingleMessage } from "../SingleMessage/SingleMessage";

export function MessagesScreen() {
    return (
        <DefaultLayout>
            <div className="p-[20px]">
                <h1 className="text-[30px] pb-[20px]">Community</h1>
                <SingleMessage />
            </div>
        </DefaultLayout>
    );
}
