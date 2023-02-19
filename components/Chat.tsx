'use client';
import React from 'react';
import {useSession} from "next-auth/react";
import {useCollection} from "react-firebase-hooks/firestore";
import { query } from 'firebase/firestore';
import {collection, orderBy} from "@firebase/firestore";
import {db} from "../firebase";

type Props = {
  chatId: string
}

const Chat = ({chatId}: Props) => {
  const {data: session} = useSession();
  const [messages] = useCollection(session && query(collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'), orderBy('createdAt', 'asc')))

  return (
    <div className="flex flex-1">

    </div>
  );
};

export default Chat;
// by Rokas with ❤️
