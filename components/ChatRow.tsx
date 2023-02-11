import React from 'react';
import Link from "next/link";
import {ChatBubbleLeftIcon} from "@heroicons/react/24/outline";
import {TrashIcon} from "@heroicons/react/24/outline";

type Props = {
  id: string
}
const ChatRow = ({id}: Props) => {
  return (
    <Link className={`chatRow justify-center`} href={`chat/${id}`}>
      <ChatBubbleLeftIcon className="h-5 w-5" />
      <p className="flex-1 hidden md:inline-flex truncate">Something</p>
      <TrashIcon className="h-5 w-5 text-gray-700 hover:text-red-700" />
    </Link>
  );
};

export default ChatRow;
// by Rokas with ❤️
