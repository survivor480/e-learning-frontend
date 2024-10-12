import { useState } from "react";
import { DefaultLayout } from "../../DefaultLayout";
import TextInput from "../../Text Input/TextInput";

export default function ProfileScreen() {    
    const [formData, setFormData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        dateOfBirth: "",
        personalEmail: "",
        description: "",
        companyName: "",
        yearsOfExperience: "",
        jobRole: "",
        yearOfJoining: "",
        professionalEmail: "",
        endYear: "",
        linkedinUrl: "",
        githubUrl: "",
        twitterUrl: "",
        youtubeUrl: ""
    });

    const handleInputChange = (field: string, value: string) => {
        setFormData({
            ...formData,
            [field]: value
        });
    };

    return (
        <DefaultLayout>
            <div className="flex justify-between flex-row px-[10px] items-center">
                <div className="flex font-bold text-3xl p-[10px]">Profile</div>
            </div>
            <div className="h-[800px] w-full border-[1px] rounded-xl border-[#6b7280] py-[30px] px-[25px] overflow-scroll">
                <p className="font-bold text-[18px]">Personal Details:</p>
                <div className="w-full flex">
                    <TextInput 
                        placeholder="First Name" 
                        value={formData.firstName} 
                        onChange={(value) => handleInputChange("firstName", value)} 
                    />
                    <TextInput 
                        placeholder="Middle Name(Optional)" 
                        value={formData.middleName} 
                        onChange={(value) => handleInputChange("middleName", value)} 
                    />
                    <TextInput 
                        placeholder="Last Name" 
                        value={formData.lastName} 
                        onChange={(value) => handleInputChange("lastName", value)} 
                    />
                </div>
                <div className="w-full flex">
                    <TextInput 
                        placeholder="Date of Birth" 
                        value={formData.dateOfBirth} 
                        onChange={(value) => handleInputChange("dateOfBirth", value)} 
                    />
                    <TextInput 
                        placeholder="Personal Email(Optional)" 
                        value={formData.personalEmail} 
                        onChange={(value) => handleInputChange("personalEmail", value)} 
                    />
                </div>
                <div className="w-full">
                    <TextInput 
                        placeholder="Description" 
                        maxRows={5} 
                        value={formData.description} 
                        onChange={(value) => handleInputChange("description", value)} 
                    />
                </div>
                <p className="font-bold text-[18px]">Professional Details:</p>
                <div className="flex w-full">
                    <TextInput 
                        placeholder="Company Name" 
                        value={formData.companyName} 
                        onChange={(value) => handleInputChange("companyName", value)} 
                    />
                    <TextInput 
                        placeholder="Years of Experience" 
                        value={formData.yearsOfExperience} 
                        onChange={(value) => handleInputChange("yearsOfExperience", value)} 
                    />
                </div>
                <div className="flex w-full">
                    <TextInput 
                        placeholder="Job Role" 
                        value={formData.jobRole} 
                        onChange={(value) => handleInputChange("jobRole", value)} 
                    />
                    <TextInput 
                        placeholder="Year of Joining" 
                        value={formData.yearOfJoining} 
                        onChange={(value) => handleInputChange("yearOfJoining", value)} 
                    />
                </div>
                <div className="flex w-full">
                    <TextInput 
                        placeholder="Professional Email(Optional)" 
                        value={formData.professionalEmail} 
                        onChange={(value) => handleInputChange("professionalEmail", value)} 
                    />
                    <TextInput 
                        placeholder="End Year" 
                        value={formData.endYear} 
                        onChange={(value) => handleInputChange("endYear", value)} 
                    />
                </div>
                <p className="font-bold text-[18px]">Social Media: </p>
                <div className="flex w-full">
                    <TextInput 
                        placeholder="Linkedin URL" 
                        value={formData.linkedinUrl} 
                        onChange={(value) => handleInputChange("linkedinUrl", value)} 
                    />
                </div>
                <div className="flex w-full">
                    <TextInput 
                        placeholder="Github URL" 
                        value={formData.githubUrl} 
                        onChange={(value) => handleInputChange("githubUrl", value)} 
                    />
                </div>
                <div className="flex w-full">
                    <TextInput 
                        placeholder="Twitter URL" 
                        value={formData.twitterUrl} 
                        onChange={(value) => handleInputChange("twitterUrl", value)} 
                    />
                </div>
                <div className="flex w-full">
                    <TextInput 
                        placeholder="Youtube URL" 
                        value={formData.youtubeUrl} 
                        onChange={(value) => handleInputChange("youtubeUrl", value)} 
                    />
                </div>
            </div>
        </DefaultLayout>
    )
}
