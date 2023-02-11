'use client'
import React, {FormEvent, useState} from 'react';
import {PaperAirplaneIcon} from "@heroicons/react/20/solid";
import {useSession} from "next-auth/react";

type Props = {
  chatId: string
}

const ChatInput = ({chatId}: Props) => {
  const [prompt, setPrompt] = useState('')
  const {data: session} = useSession()

  const sendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()


  }

  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm focus:outline-none">
      <form className="p-5 space-x-5 flex">
        <input type="text"
               className="bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300"
               disabled={!session}
               placeholder="Type a message"
               value={prompt}
               onChange={(e) => setPrompt(e.target.value)}
        />
        <button className="bg-[#11A37F] hover:opacity-50 text-white font-bold  px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed" disabled={!session || !prompt}>
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </form>
      <div>

      </div>
    </div>
  );
};

export default ChatInput;
// by Rokas with ❤️
