'use client'
import React, {useState} from 'react';
import {PaperAirplaneIcon} from "@heroicons/react/20/solid";

type Props = {
  chatId: string
}

const ChatInput = ({chatId}: Props) => {
  const [prompt, setPrompt] = useState('')
  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm focus:outline-none">
      <form className="p-5 space-x-5 flex">
        <input type="text"
               className="bg-transparent focus:outline-none flex-1"
               placeholder="Type a message"
               value={prompt}
               onChange={(e) => setPrompt(e.target.value)}
        />
        <button>
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
