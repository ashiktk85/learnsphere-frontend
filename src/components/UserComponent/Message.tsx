import React from "react";
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
} from "../ui/contextMenu";

interface UserDetails {
    firstName: string;
    lastName: string;
    email: string;
    profileUrl: string;
  }
  

export interface Message {
  userId: string;
  message: string;
  timestamp: Date | string;
  userDetails: UserDetails;
}

export interface MsgProps {
  message: Message;
  onDelete: (messageId: string) => void;
//   onReply: (message: Message) => void;
  isUserMessage: boolean;
}

const Msg: React.FC<MsgProps> = ({ message, onDelete, isUserMessage }) => {
  const handleDelete = () => onDelete(message.userId);
//   const handleReply = () => onReply(message);

  return (
    <div className={`flex ${isUserMessage ? "justify-end" : "justify-start"} mb-2`}>
      <ContextMenu>
        <ContextMenuTrigger>
          <div
            className={`relative max-w-xs p-3 rounded-lg ${isUserMessage ? "bg-blue-100" : "bg-green-100"}`}
          >
            <div className={`text-${isUserMessage ? "right" : "left"} mb-2`}>
              <strong>{`${message.userDetails?.firstName}`}</strong>:
              {" "}
              {message.message}
            </div>
            <span className="text-gray-500 text-xs absolute bottom-1 right-2">
              {new Date(message.timestamp).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
        </ContextMenuTrigger>

        <ContextMenuContent className="bg-white border rounded-md shadow-lg p-1">
          <ContextMenuItem 
        //   onClick={handleReply} 
          className="cursor-pointer px-2 py-1 hover:bg-gray-100">
            Reply
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem onClick={handleDelete} className="cursor-pointer px-2 py-1 hover:bg-gray-100">
            Delete
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  );
};

export default Msg;
