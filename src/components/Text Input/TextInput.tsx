import { ChangeEvent } from "react";


export default function TextInput({value, onChange, placeholder, maxRows, maxLength} : {value: string, onChange: (value: string) => void, placeholder: string, maxRows?:number, maxLength?:number}) {
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const inputValue = e.target.value;
        console.log("The value is: ", inputValue);
        onChange(inputValue);
    };

    return (
        <div className="w-full pr-2 py-3">
            {!maxRows && <div className="py-3">
                <input type="text" onChange={handleInputChange} name="text" value={value} placeholder={placeholder} className="focus:outline-none rounded-lg px-[10px] py-[5px] text-[#cbd5e1] w-full bg-[#1e293b]" />
            </div> }
            {maxRows && <div className="py-3">
                <textarea value={value} onChange={handleInputChange} rows={maxRows} maxLength={maxLength||800} placeholder={placeholder} className="resize w-full rounded-lg py-[5px] px-[10px] text-[#cbd5e1] bg-[#1e293b] focus:outline-none"/>
                </div>}
            </div>
    )
}