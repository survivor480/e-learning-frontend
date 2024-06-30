import {useEffect, useState} from "react";
import { DefaultLayout } from "../../DefaultLayout";
import UserIcon from "../../../assets/avatar.svg";
import Modal from "../../Modal/Modal";
import TextInput from "../../Text Input/TextInput";
import NumberInput from "../../NumberInput/NumberInput";
import SingleAddTest from "../../SingleAddTest/SingleAddTest";

interface SingleTestDetail {
    test_title: string;
    questions: number;
    full_marks: number;
    passing_marks: number;
    test_syllabus_description: string;
}

export function AddTestsScreen() {
    const [open, setOpen] = useState<boolean>(false);
    const [testList, setTestList] = useState<SingleTestDetail[]>([]);
    const [noOfTests, setNoOfTests] = useState<number>(0);
    const [questionInEach, setQuestionsInEach] = useState<number>(0);
    const [fullMarks, setFullMarks] = useState<number>(0);
    const [passingMarks, setPassingMarks] = useState<number>(0);
    const [testTitle, setTestTitle] = useState<string>("");
    const [testSyllabusDescription, setTestSyllabusDescription] = useState<string>("");

    const onSubmit = () => {
        let test_list:SingleTestDetail[] = [];

        for(let i=0; i<noOfTests; i++){
            test_list.push({
                test_title: `${testTitle} ${i+1}`,
                questions: questionInEach,
                full_marks: fullMarks,
                passing_marks: passingMarks,
                test_syllabus_description: testSyllabusDescription
            })
        }

        console.log("The test list is: ", test_list);
        
        setTestList(testList.concat(test_list));

        console.log("The total value is: ", testList);

        setNoOfTests(0);
        setQuestionsInEach(0);
        setFullMarks(0);
        setPassingMarks(0);
        setTestTitle("");
        setTestSyllabusDescription("");
        
        setOpen(false);
    }
 
    const handleClose = () => {
        setOpen(false);
    };
 
    const handleOpen = () => {
        setOpen(true);
    };

    useEffect(() => {}, [testList]);

    return (
        <DefaultLayout>
            <Modal isOpen={open} onClose={handleClose}>
                <div className=" flex-col justify-around">
                    <div className="w-full text-[20px] text-center text-bold">Add Test Details</div>
                    <div className="">
                        <TextInput value={testTitle} onChange={(title: string) => setTestTitle(title)} placeholder="Test Title" />
                    </div>
                    <div className="flex">
                        <NumberInput value={noOfTests} onChange={(number:number) => setNoOfTests(number)} placeholder="Number of Tests"/>
                        <NumberInput value={questionInEach} onChange={(number: number) => setQuestionsInEach(number)} placeholder="Questions in Each" />
                    </div>
                    <div className="flex">
                        <NumberInput value={fullMarks} onChange={(number: number) => setFullMarks(number)} placeholder="Full Marks"/>
                        <NumberInput value={passingMarks} onChange={(number: number) => setPassingMarks(number)} placeholder="Passing Marks" />
                    </div>
                    <div className="">
                        <TextInput value={testSyllabusDescription} onChange={(description: string) => setTestSyllabusDescription(description)} placeholder="Test Syllabus Description" maxRows={5} />
                    </div>
                    <p className="text-[20px] border-[1px] border-[#0369a1] px-8 rounded-lg cursor-pointer text-center capitalize" onClick={onSubmit}>Submit</p>
                </div>
            </Modal>
            <div className="flex justify-between flex-row px-[10px] items-center">
                <div className="flex font-bold text-3xl p-[10px]">Add Tests Screen</div>
                <p className="text-[20px] border-[1px] border-[#475569] px-8 rounded-lg cursor-pointer" onClick={handleOpen}>Add Test</p>
            </div>
            <div className="overflow-y-auto cursor-pointer h-[80%] p-[10px] pb-[0px] max-h-[820px]">
                {testList.map((element) => (
                    <SingleAddTest UserIcon={UserIcon} title={element.test_title} description={element.test_syllabus_description} />
                ))}
            </div>
        </DefaultLayout>
    );
}