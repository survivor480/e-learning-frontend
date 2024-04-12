export default function RightChatBubble({ message }: { message: string }) {
  return (
    <div className="self-end min-w-72 max-w-[80%] p-1 ">
      <div className="bg-gray-300 rounded-2xl text-black relative p-2 px-4 before:w-10 before:h-[21px] before:absolute before:-right-7 before:bottom-0 before:bg-gray-300 before:rounded-bl-3xl after:w-10 after:h-8 after:rounded-bl-[1.7rem] after:bg-[#1e293b] after:absolute after:bottom-0.5 after:-right-10 after:translate-y-1"
      dangerouslySetInnerHTML={{__html: message}}
      >
        {/* {message} */}
      </div>
    </div>
  );
}
