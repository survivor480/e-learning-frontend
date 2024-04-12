import { DefaultLayout } from "../../DefaultLayout";
import AddIcon from "@mui/icons-material/Add";
import SendIcon from "@mui/icons-material/Send";
import RightChatBubble from "../../ChatBubble/RightChatBubble";
import LeftChatBubble from "../../ChatBubble/LeftChatBubble";
import { useState } from "react";

export default function MessageScreen() {
  const [messages, setMessage] = useState<
    Array<{ text: string; sender: string }>
  >([
    {
      text: `
          <div>sdfghjhgfdsdfgfdsdfgfdsdfg</div>
          <br />
          <div>dfghjksdfghj</div>
        `,
      sender: "you",
    },
  ]);
  const sendHandler = () => {
    const typed_message = document.getElementById("text-message");
    if (typed_message) {
      setMessage([
        ...messages,
        {
          text: typed_message.innerHTML,
          sender: "you",
        },
      ]);
      typed_message.innerHTML = "";
    }
  };

  return (
    <DefaultLayout>
      <div className="text-3xl mb-4">Community-1</div>
      <div className="bg-[#1e293b] h-[800px] rounded-[10px] flex flex-col justify-between pt-2">
        <div className="relative overflow-scroll m-3 p-3 overflow-x-hidden h-full gap-2 flex flex-col">
          {messages.map((element) => {
            return element?.sender === "you" ? (
              <RightChatBubble message={element.text} />
            ) : (
              <LeftChatBubble message={element.text} />
            );
          })}
        </div>
        <div className="bg-[#042f2e] space-x-4 flex items-center w-full p-1 pt-2">
          <div className=" w-[40px] flex items-center p-2 rounded-[5px] cursor-pointer">
            <AddIcon />
          </div>
          {/* <div className="rounded-[5px] overflow-hidden h-full w-full"> */}
          {/* <textarea rows={2} placeholder="Type your Message" className="bg-[#111827] outline-none max-h-32 w-full p-2 px-4"/> */}
          <div
            contentEditable
            className="w-full border border-gray-600 rounded-lg bg-[#042f2e] p-2 outline-none max-h-24 overflow-auto"
            id="text-message"
          ></div>
          {/* </div> */}
          <div
            className="h-[40px] w-[40px] flex items-center p-2 rounded-[5px] cursor-pointer"
            onClick={sendHandler}
          >
            <SendIcon />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
