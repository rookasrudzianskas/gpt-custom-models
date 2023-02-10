import React from 'react';
import NewChat from "./NewChat";

const Sidebar = ({}) => {
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/*  New chat*/}
          <NewChat />
          <div>
            {/* GPT */}
          </div>
          {/*  Chat list*/}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
// by Rokas with ❤️
