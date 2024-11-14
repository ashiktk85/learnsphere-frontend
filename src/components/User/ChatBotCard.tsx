import React from 'react';
import { JSX } from 'react/jsx-runtime';
import { FaArrowRight } from "react-icons/fa";

interface ICard {
    color : string | null
}

const ChatBotCard:  React.FC <ICard>=  ({color}) => {
    return (
        <div className={`w-[200px] h-full  rounded-md ${color} p-3 cursor-pointer`}>
            <p className='text-lg font-bold text-white'>Start with these prompts</p>
                <div className='flex items-end justify-end'>
                        <FaArrowRight  fill='white' size={22}/>
                </div>
        </div>
    );
}

export default ChatBotCard;
 