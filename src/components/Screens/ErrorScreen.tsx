import { DefaultLayout } from "../DefaultLayout";

import ErrorImage from "../../assets/error-svgrepo-com.svg";
import TextInput from "../Text Input/TextInput";

export default function ErrorScreen() {
    return (
        <DefaultLayout>
            <div className="flex flex-col justify-center items-center">
                {/* <ErrorImage /> */}
                <img src={ErrorImage} height={500} width={500}/>
                <h1 className="text-3xl">Oops!! You got to the wrong page</h1>
                <TextInput placeholder="Testing"/>
            </div>
        </DefaultLayout>
    )
}