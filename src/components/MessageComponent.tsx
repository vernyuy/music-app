import { FunctionComponent, useEffect, useRef, useState } from "react";
import { generateClient } from "aws-amplify/data";
import { useNavigate } from "react-router-dom";
import type { Schema } from "../../amplify/data/resource";

// Initialize the client for accessing the backend
const client = generateClient<Schema>();

interface MessageComponentProps {
  chatOpen: boolean;
  artistId: string;
}

const MessageComponent: FunctionComponent<MessageComponentProps> = ({ chatOpen, artistId }) => {
  // State hooks
  const [isOpen, setIsOpen] = useState(chatOpen);
  const [message, setMessage] = useState("");
  const [userInfo, setUserInfo] = useState<{ loginId: string; authFlowType: string }>({
    loginId: "",
    authFlowType: "",
  });
  const [messages, setMessages] = useState<Schema["Message"]["type"][]>([]);

  const secRef = useRef<HTMLDivElement | null>(null); // Reference for scrolling

  // Constants
  const key = "CognitoIdentityServiceProvider.4eh0qphj76mh2t1ee3rt744ek4.44088498-b001-70b9-6e9d-9327e6f69e86.signInDetails";

  // Fetch current user details from localStorage
  const fetchCurrentUserDetails = async () => {
    const info = JSON.parse(localStorage.getItem(key)!);
    setUserInfo(info);
  };

  // Effect for subscribing to message updates
  useEffect(() => {
    const sub = client.models.Message.observeQuery(
        {
            filter: { artistId: { eq: artistId } },
        }
    ).subscribe({
      next: ({ items }) => {
        setMessages([...items]);
      },
    });

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

  const navigate = useNavigate();

  // Close the chat and navigate to artist page
  const closeChat = (): void => {
    const artistId = localStorage.getItem('artistId')
    navigate(`/artist/${artistId}`, { state: { openChat: false } });
  };

  // Send a new message
  const sendMessage = async () => {
    await client.models.Message.create({
      content: message,
      senderId: userInfo.loginId,
      artistId: artistId
    });
    setMessage(""); // Clear message input
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
              <p className="font-bold">Your Chats</p>
              <button
                onClick={closeChat}
                className="text-2xl font-bold text-gray-500 border-[0.2px] h-[30px] w-[30px] flex justify-center items-center rounded-full"
              >
                x
              </button>
            </div>

            {/* No messages yet */}
            {messages.length === 0 ? (
              <div className="border-[0.5px] border-gray-400/40 m-4 flex justify-center items-center flex-col py-20">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <g fill="none" fillRule="evenodd">
                    <path
                      d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                    />
                    <path fill="currentColor" d="M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-7.667L8 21.5c-.824.618-2 .03-2-1V19H5a3 3 0 0 1-3-3z" />
                  </g>
                </svg>
                <p>No messages yet</p>
              </div>
            ) : (
              // Display messages
              <>
              {messages.map(({ id, content, senderId, artistId }) => (
                <>
                  {senderId === userInfo.loginId ? (
                    <div className="flex justify-end pr-4">
                        {artistId} Yes
                      <div key={id} className="flex justify-end">
                        <div className="mx-2 p-1 rounded-md border-[0.5px] border-gray-400/40 mb-2 max-w-[300px]">
                          <p className="">{content}</p>
                        </div>
                      </div>

                      <div className="border-[0.5px] rounded-full h-[20px] w-[20px] flex justify-center items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"/></svg>
                      </div>
                    </div>
                  ) : (
                    <div
                      key={id}
                      className="mx-2 p-1 rounded-md border-[0.5px] border-gray-400/40 my-2 w-fit  max-w-[300px]"
                    >
                      <p>{content}</p>
                    </div>
                  )}
                </>
              ))}
            </>
          )}

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
              <button onClick={sendMessage} className="flex justify-end items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <path fill="currentColor" fillRule="evenodd" d="M3.291 3.309a.75.75 0 0 0-.976.996l3.093 6.945H13a.75.75 0 0 1 0 1.5H5.408l-3.093 6.945a.75.75 0 0 0 .976.996l19-8a.75.75 0 0 0 0-1.382z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MessageComponent;
