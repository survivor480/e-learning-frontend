import { ReactNode, MouseEvent } from "react";
 
const Modal = ({ isOpen, onClose, children }: {isOpen: boolean, onClose: () => void, children: ReactNode}) => {
    if (!isOpen) return null;

    const handleModalClick = (e: MouseEvent<HTMLDivElement>) => {
        // Prevent click event from propagating to the overlay
        e.stopPropagation();
    };
 
    return (
        <div onClick={onClose} className="fixed top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center">
            <div className="bg-[#0f172a] h-[600px] w-[800px] m-auto p-[2%] border-[2px] border-solid border-[#000] rounded-[10px] shadow-md z-10 overflow-scroll" onClick={handleModalClick}>
                {children}
            </div>
        </div>
    );
};
 
export default Modal;
