import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";
import { makeRandomMessages } from "../utils/helper";
const LiveChat = () => {
  const [LiveMessage, setLiveMessage] = useState("");
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
    }, 1500);
    return () => clearInterval(i);
  }, []);
  return (
    <div>
      <div className="p-2 bg-slate-100 overflow-y-scroll rounded-lg border border-black ml-2 w-full h-[500px] flex flex-col-reverse">
        <div>
          {/* Disclaimer:dont use indexes as keys */}
          {ChatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Thanmai Palla",
              message: LiveMessage,
            })
          );
          setLiveMessage("");
        }}
        className="flex border border-black ml-2 p-2 w-full"
      >
        <input
          placeholder="Type Something...."
          type="text"
          className="px-2 w-64"
          value={LiveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
