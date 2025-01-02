import { FunctionComponent, useEffect, useState } from "react";
import type { Schema } from '../../amplify/data/resource'
import { generateClient } from 'aws-amplify/data'

const client = generateClient<Schema>()

interface MessageComponentProps {}

const MessageComponent: FunctionComponent<MessageComponentProps> = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Schema["Message"]["type"][]>([]);

    const fetchTodos = async () => {
      const { data: items, errors } = await client.models.Message.list();
      setMessages(items);
    };
  
    useEffect(() => {
      fetchTodos();
    }, []);

    const createTodo = async () => {
        await client.models.Message.create({
          content: "New message for fan",
          senderId: "false",
          artistId: "artistId goes here"
        })
      }
    const toggleChats = ()=>{

    }
  return (
    <>
      <div className={isOpen?"bg-gray-900/80 h-full z-50 fixed w-full top-0 left-0":" "}>
        <div className={isOpen?"chatsSection fixed top-0 w-[400px] z-70 right-0 bg-black border-l-[0.5px] border-gray-400/40 h-full overflow-y-scroll":""}>
        <div className="py-6 flex justify-between border-b-[0.5px] border-gray-400/40 px-4 sticky top-0 bg-black">
          <p className=" font-bold ">Your Chats</p>
          <p className="text-2xl font-bold text-gray-500  border-[0.2px] h-[30px] w-[30px] flex justify-center items-center rounded-full">
            x
          </p>
        </div>

        <div className="border-[0.5px] border-gray-400/40 m-4 flex justify-center items-center flex-col py-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <g fill="none" fill-rule="evenodd">
              <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
              <path
                fill="currentColor"
                d="M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-7.667L8 21.5c-.824.618-2 .03-2-1V19H5a3 3 0 0 1-3-3z"
              />
            </g>
          </svg>
          <p>No messages yet</p>
        </div>

        <div className="mx-2 p-1 rounded-md border-[0.5px] border-gray-400/40 my-2 w-fit  max-w-[300px]">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo amet
            error vel excepturi aliquam soluta?
          </p>
        </div>
        <div className="flex justify-end">
          <div className="mx-2 p-1 rounded-md border-[0.5px] border-gray-400/40 mb-2 max-w-[300px]">
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo amet
              error vel excepturi aliquam soluta?
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="mx-2 p-1 rounded-md border-[0.5px] border-gray-400/40 mb-2 max-w-[300px]">
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo amet
              error vel excepturi aliquam soluta?
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="mx-2 p-1 rounded-md border-[0.5px] border-gray-400/40 mb-2 max-w-[300px]">
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo amet
              error vel excepturi aliquam soluta?
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="mx-2 p-1 rounded-md border-[0.5px] border-gray-400/40 mb-2 max-w-[300px]">
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo amet
              error vel excepturi aliquam soluta?
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="mx-2 p-1 rounded-md border-[0.5px] border-gray-400/40 mb-16 max-w-[300px]">
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo amet
              error vel excepturi aliquam soluta?
            </p>
          </div>
        </div>

        <div className="fixed bg-black bottom-0 pb-4 px-2 flex justify-between items-center gap-2">
          <textarea
            name=""
            placeholder="Start chats"
            id=""
            rows={1}
            className="w-[ p-2 rounded w-[340px] bg-transparent border-[0.5px] border-gray-400/40"
          ></textarea>
          <div className="flex justify-end items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M3.291 3.309a.75.75 0 0 0-.976.996l3.093 6.945H13a.75.75 0 0 1 0 1.5H5.408l-3.093 6.945a.75.75 0 0 0 .976.996l19-8a.75.75 0 0 0 0-1.382z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default MessageComponent;
