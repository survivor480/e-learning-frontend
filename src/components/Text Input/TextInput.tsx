import { useEffect } from "react"


export default function TextInput({placeholder, maxRows} : {placeholder: string, maxRows?:number}) {
    useEffect(() => {
        console.log("The placeholder is: ", placeholder);

        console.log("The max rows is: ", maxRows);
    })
    return (
        <div className="w-full pr-2 py-3">
            {!maxRows && <div className="py-3">
                <input type="text" name="text" placeholder={placeholder} className="focus:outline-none rounded-lg px-[10px] py-[5px] text-[#cbd5e1] w-full bg-[#1e293b]" />
            </div> }
            {maxRows && <div className="py-3">
                <textarea rows={maxRows} maxLength={800} placeholder={placeholder} className="resize w-full rounded-lg py-[5px] px-[10px] text-[#cbd5e1] bg-[#1e293b] focus:outline-none"/>
                </div>}
            </div>
    )
}