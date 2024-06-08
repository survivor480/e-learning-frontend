import { DefaultLayout } from "../../DefaultLayout";
import TextInput from "../../Text Input/TextInput";

export default function ProfileScreen() {
    return (
        <DefaultLayout>
            <div className="flex justify-between flex-row px-[10px] items-center">
                <div className="flex font-bold text-3xl p-[10px]">Profile</div>
            </div>
            <div className="h-[800px] w-full border-[1px] rounded-xl border-[#6b7280] py-[30px] px-[25px] overflow-scroll">
                <p className="bold text-[20px]">Personal Details:</p>
                <div className="w-full flex">
                    <TextInput placeholder="First Name" />
                    <TextInput placeholder="Middle Name(Optional)" />
                    <TextInput placeholder="Last Name" />
                </div>
                <div className="w-full">
                    <TextInput placeholder="Description" maxRows={5}/>
                </div>
                <p className="bold text-[20px]">Professional Details:</p>
                <div className="flex w-full">
                    <TextInput placeholder="Company Name"/>
                    <TextInput placeholder="Years of Experience" />
                </div>
                <div className="flex w-full">
                    <TextInput placeholder="Job Role"/>
                    <TextInput placeholder="Year of Joining" />
                </div>
                <p className="bold text-[20px]">Social Media: </p>
                <div className="flex w-full">
                    <TextInput placeholder="Linkedin URL"/>
                </div>
                <div className="flex w-full">
                    <TextInput placeholder="Github URL"/>
                </div>
                <div className="flex w-full">
                    <TextInput placeholder="Twitter URL"/>
                </div>
                <div className="flex w-full">
                    <TextInput placeholder="Youtube URL"/>
                </div>
            </div>
        </DefaultLayout>
    )
}