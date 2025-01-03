import { FunctionComponent, useEffect, useRef, useState } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../amplify/data/resource";

// Initialize the client for accessing the backend
const client = generateClient<Schema>();

interface MessageComponentProps {
  chatOpen: boolean;
  artistId: string;
  setIsOpenFun: (isOpen: boolean) => void;
}

const MessageComponent: FunctionComponent<MessageComponentProps> = ({
  chatOpen,
  artistId,
  setIsOpenFun
}) => {
  // State hooks
  console.log(chatOpen)
  const isOpen = chatOpen;
  const [message, setMessage] = useState("");
  const [sending, setIsSending] = useState(false)
  const [loading, setIsLoading] = useState(false)
  const [userInfo, setUserInfo] = useState<{
    loginId: string;
    authFlowType: string;
  }>({
    loginId: "",
    authFlowType: "",
  });
  const [messages, setMessages] = useState<Schema["Message"]["type"][]>([]);

  const secRef = useRef<HTMLDivElement | null>(null); // Reference for scrolling

  // Fetch current user details from localStorage
  const fetchCurrentUserDetails = async () => {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.endsWith("signInDetails")) {
        const info = JSON.parse(localStorage.getItem(key)!);
        setUserInfo(info);
      }
    }
  };

  // Effect for subscribing to message updates
  useEffect(() => {
    setIsLoading(true)
    const sub = client.models.Message.observeQuery({
      filter: { artistId: { eq: artistId } },
    }).subscribe({
      next: ({ items }) => {
        setMessages([...items]);
      },
    });
    setIsLoading(false)
    return () => sub.unsubscribe();
  }, []);

  // Effect for fetching user details
  useEffect(() => {
    fetchCurrentUserDetails();
  }, []);

  // Effect for scrolling the chat to the bottom
  useEffect(() => {
    if (secRef.current) {
      secRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, []);

const closeChat = () => {
    setIsOpenFun(false);
  };

  // Send a new message
  const sendMessage = async () => {
    setIsSending(true)
    await client.models.Message.create({
      content: message,
      senderId: userInfo.loginId,
      artistId: artistId,
    });
    setMessage(""); 
    setIsSending(false)
  };

  return (
    <>
      <style>
        {`
          div::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>

      {isOpen && (
        <div className="bg-gray-900/80 h-full z-50 fixed w-full top-0 left-0">
          <div className="chatsSection fixed top-0 w-[400px] z-70 right-0 bg-black border-l-[0.5px] border-gray-400/40 h-full overflow-y-scroll">
            <div className="py-6 flex justify-between border-b-[0.5px] border-gray-400/40 px-4 sticky top-0 bg-black">
              <p className="font-bold heading">Your Chats</p>
              <button
                onClick={closeChat}
                className="text-2xl font-bold text-gray-500 border-[0.2px] h-[30px] w-[30px] flex justify-center items-center rounded-full"
              >
                x
              </button>
            </div>

            {/* No messages yet */}
            {
                loading?<><div className="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M7.706.29c-.222.072-.35.2-.412.409c-.035.117-.041.389-.041 1.809c0 1.881-.002 1.857.19 2.049c.257.256.857.256 1.114 0c.192-.192.19-.168.19-2.049c0-1.82-.003-1.852-.151-2.028C8.472.333 8.339.284 8.04.276a1.7 1.7 0 0 0-.334.014M2.753 2.266c-.158.072-.391.3-.472.462a.6.6 0 0 0-.012.525c.074.165 2.398 2.497 2.581 2.59q.39.2.793-.194c.264-.258.334-.538.2-.799c-.093-.183-2.425-2.507-2.59-2.581a.64.64 0 0 0-.5-.003m10.1.016c-.123.057-.333.254-1.335 1.259c-.921.923-1.202 1.221-1.247 1.319a.62.62 0 0 0 .001.518c.07.15.3.386.455.467c.157.082.39.081.553-.002c.167-.086 2.477-2.396 2.563-2.563a.65.65 0 0 0 .003-.551a1.26 1.26 0 0 0-.454-.446a.57.57 0 0 0-.539-.001M.699 7.292q-.442.139-.441.707c.001.387.145.619.44.707c.118.035.381.041 1.81.041c1.489 0 1.688-.005 1.81-.045a.6.6 0 0 0 .384-.384c.086-.265.043-.641-.094-.827a.7.7 0 0 0-.191-.148l-.137-.076l-1.733-.006c-1.395-.004-1.756.002-1.848.031m11.046-.014a.76.76 0 0 0-.353.214c-.137.185-.18.561-.094.826c.058.18.204.326.384.384c.122.04.321.045 1.81.045c1.429 0 1.692-.006 1.81-.041c.295-.088.439-.32.44-.707c0-.385-.147-.616-.452-.708c-.103-.031-.426-.037-1.794-.035c-.918.002-1.706.012-1.751.022m-6.892 3.004c-.123.057-.333.254-1.335 1.259c-.921.923-1.202 1.221-1.247 1.319a.62.62 0 0 0 .001.518c.07.15.3.386.455.467c.157.082.39.081.553-.002c.167-.086 2.477-2.396 2.563-2.563a.65.65 0 0 0 .003-.551a1.26 1.26 0 0 0-.454-.446a.57.57 0 0 0-.539-.001m5.9-.016c-.158.072-.391.3-.472.462a.6.6 0 0 0-.012.525c.074.165 2.398 2.497 2.581 2.59q.39.2.793-.194c.264-.258.334-.538.2-.799c-.093-.183-2.425-2.507-2.59-2.581a.64.64 0 0 0-.5-.003m-3.008 1.011a.77.77 0 0 0-.353.215c-.138.186-.139.199-.139 1.997c0 1.432.006 1.695.041 1.813q.13.44.706.439q.576.002.706-.439c.062-.212.061-3.427-.002-3.612a.53.53 0 0 0-.284-.344c-.11-.06-.174-.075-.363-.082a1.5 1.5 0 0 0-.312.013"/></svg></div></>:
            messages.length === 0 ? (
              <div className="border-[0.5px] border-gray-400/40 m-4 flex justify-center items-center flex-col py-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" fillRule="evenodd">
                    <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                    <path
                      fill="currentColor"
                      d="M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-7.667L8 21.5c-.824.618-2 .03-2-1V19H5a3 3 0 0 1-3-3z"
                    />
                  </g>
                </svg>
                <p>No messages yet</p>
              </div>
            ) : (
              // Display messages
              <>
                {messages.map(({ id, content, senderId }) => (
                  <>
                    {senderId === userInfo.loginId ? (
                      <div className="flex justify-end pr-4 mt-2">
                        <div key={id} className="flex justify-end">
                          <div className="mx-2 py-1 px-2.5 rounded-md border-[0.5px] border-red-500 mb-2 max-w-[300px]">
                            <p className="font-light">{content}</p>
                          </div>
                        </div>

                        <div className="border-[0.5px] rounded-full h-[20px] w-[20px] flex justify-center items-center overflow-hidden">
                          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="" />
                        </div>
                      </div>
                    ) : (
                        <div className="flex justify-start pl-4 mt-2">
                        <div className="border-[0.5px] rounded-full h-[20px] w-[20px] flex justify-center items-center overflow-hidden">
                          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="" />
                        </div>
                        <div key={id} className="flex justify-end">
                          <div className="mx-2 p-1 rounded-md border-[0.5px] border-red-500 my-2 w-fit  max-w-[300px] mt-2">
                            <p className="font-light">{content}</p>
                          </div>
                        </div>

                      </div>
                    //   <div
                    //     key={id}
                    //     className="mx-2 p-1 rounded-md border-[0.5px] border-gray-400/40 my-2 w-fit  max-w-[300px] mt-2"
                    //   >
                    //     <p>{content}</p>
                    //   </div>
                    )}
                  </>
                ))}
              </>
            )
            }

            <div ref={secRef} className="mb-20"></div>

            {/* Message input and send button */}
            <div className="fixed bg-black bottom-0 pb-4 pt-2 px-2 flex justify-between items-center gap-2">
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Start chats"
                value={message}
                rows={1}
                className="w-[340px] p-2 rounded bg-transparent border-[0.5px] border-gray-400/40"
              />
              {
                sending? <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22.5 4.742A13 13 0 1 0 29 16"/></svg></button>:
                <button
                  onClick={sendMessage}
                  className="flex justify-end items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M3.291 3.309a.75.75 0 0 0-.976.996l3.093 6.945H13a.75.75 0 0 1 0 1.5H5.408l-3.093 6.945a.75.75 0 0 0 .976.996l19-8a.75.75 0 0 0 0-1.382z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              }
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MessageComponent;
