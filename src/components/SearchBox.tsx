
import React from 'react';
import { IoSearch } from "react-icons/io5";
import { cn } from "../utils/cn";

type Props = {
  className?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
};

export default function SearchBox(props: Props) {
  return (
    <form 
      onSubmit={props.onSubmit}
      className={cn(
      "flex relative items-center justify-center h-10",
      props.className
    )}
    >
        <input type="text" 
        value={props.value}
        onChange={props.onChange}
        placeholder='search for city...'
        className= "text-gray-500 font-light px-4 py-2 w-[230px] shadow-l capitalize rounded-md focus:outline-none focus:border-blue-500 placeholder:lowercase"
        />
        <button className="px-4 py-[9px]">
            <IoSearch size={30} className='cursor-pointer text-slate-100 transition ease-out   hover:scale-125' />
        </button>
    </form>
  )
}