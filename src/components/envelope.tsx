"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useState } from "react";

export const Envelope = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);

  const message = searchParams.get("message");

  const handleToggleEnvelope = () => {
    setOpen(!open);
  };

  const renderMessage = message || "Sending you Virtual love <3 💕💕";

  return (
    <main className='flex items-center justify-center min-h-screen w-full flex-col '>
      <div className='envlope-wrapper'>
        <div id='envelope' className={open ? "open" : "close"}>
          <div className='front flap'></div>
          <div className='front pocket'></div>
          <div className='letter'>
            <p className='p-4 text-sm'>{renderMessage}</p>
          </div>
          <div className='hearts'>
            <div className='heart a1'></div>
            <div className='heart a2'></div>
            <div className='heart a3'></div>
          </div>
        </div>
      </div>

      <div className='reset'>
        <button onClick={handleToggleEnvelope} id='open'>
          {open ? "Close" : "Open"}
        </button>
        <button
          onClick={() => {
            router.push("/make-message");
          }}
        >
          Create new Message
        </button>
      </div>
    </main>
  );
};
