"use client"
import { createContext, useState } from "react";
export const Message_data = createContext<any>("lol message");
export default function Context({children}) {
    const [message, setMessage] = useState("lol message");
  
    return (
      <Message_data.Provider value={"lol message"}>
        {children}
      </Message_data.Provider>
    );
  }
  