export default function LeftChatBubble({ message }: { message: React.ReactNode }) {
  return (
    <div className="self-start min-w-72 max-w-[80%] p-1 tracking-wider font-medium">
      <div className="bg-white shadow-2xl rounded-2xl text-black relative p-2 pl-4 before:w-10 before:h-7 before:absolute before:-left-7 before:bottom-0 before:bg-white before:rounded-br-3xl after:w-10 after:h-8 after:rounded-br-[1.7rem] after:bg-[#1e293b] after:absolute after:bottom-[-6px] after:-left-10 after:-translate-y-1">
        {message}
      </div>
    </div>
  );
}
