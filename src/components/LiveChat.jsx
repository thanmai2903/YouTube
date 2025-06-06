import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";
import { makeRandomMessages } from "../utils/helper";
const LiveChat = () => {
  const dispatch = useDispatch();
  const ChatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      console.log("API Polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessages(20),
        })
      );
    }, 500);
    return () => clearInterval(i);
  }, []);
  return (
    <div className="p-2 bg-slate-100 overflow-y-scroll rounded-lg border border-black ml-2 w-full h-[500px] flex flex-col-reverse">
      {/* Disclaimer:dont use indexes as keys */}
      {ChatMessages.map((c, i) => (
        <ChatMessage key={i} name={c.name} message={c.message} />
      ))}
    </div>
  );
};

export default LiveChat;
