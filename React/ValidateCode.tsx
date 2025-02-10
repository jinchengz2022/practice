import React, { useState, useEffect } from "react";

export const App = () => {
  const [num, setNum] = useState(0);
  const [isSending, setIsSending] = useState(false);

  const sendCode = () => {
    if (!isSending) {
      setNum(3);
      setIsSending(true);
    }
  };

  useEffect(() => {
    let timer: any;

    if (num !== 0) {
      timer = setInterval(() => {
        setNum((pre) => pre - 1);
      }, 1000);
    } else {
      setIsSending(false);
      setNum(3);
    }

    return () => clearInterval(timer);
  }, [num]);

  return (
    <div>
      <button onClick={sendCode}>
        {isSending ? `${num}s后重试` : "发送验证码"}
      </button>
    </div>
  );
};
