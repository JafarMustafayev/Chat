import React, { useState, useEffect } from "react";

const InputContainer = ({ input, setInput, handleSend, status }) => {
  const [overflow, setOverflow] = useState("hidden");
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleInput = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
    setScrollHeight(e.target.scrollHeight);
    setInput(e.target.value);
  };

  useEffect(() => {
    if (scrollHeight > 240) {
      setOverflow("visible");
    } else {
      setOverflow("hidden");
    }
  }, [scrollHeight]);

  useEffect(() => {
    if (input === "") {
      setScrollHeight(0);
    }
  }, [input]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();

      if (status !== "pending") {
        onSend();
      }
    }
  };

  const onSend = () => {
    if (input.trim()) {
      handleSend();
      setInput("");
      setScrollHeight(0);
    }
  };

  return (
    <div className="bg-input p-2 m-2 rounded-3xl w-[95%] md:w-[75%] lg:w-[42%] flex items-end justify-between">
      <div className="w-full items-center ps-4">
        <textarea
          className="w-full resize-none bg-transparent outline-none text-white"
          type="text"
          value={input}
          onChange={handleInput}
          onInput={handleInput}
          autoFocus={true}
          rows={1}
          onKeyDown={handleKeyDown}
          placeholder="Promt daxil edin..."
          style={{
            overflow: overflow,
            maxHeight: "240px",
            backgroundColor: "transparent",
          }}
        />
      </div>
      <div className="justify-end">
        <button
          disabled={status === "pending" || input.trim() === ""}
          onClick={() => {
            onSend();
          }}
        >
          <div
            className={`rounded-full ${
              input.trim() === "" || status !== "success"
                ? "bg-slate-500"
                : "bg-white"
            }`}
          >
            {status === "pending" ? (
              <svg
                width="32"
                height="32"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="icon-2xl"
              >
                <rect
                  x="7"
                  y="7"
                  width="10"
                  height="10"
                  rx="1.25"
                  fill="currentColor"
                ></rect>
              </svg>
            ) : (
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="icon-2xl"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.1918 8.90615C15.6381 8.45983 16.3618 8.45983 16.8081 8.90615L21.9509 14.049C22.3972 14.4953 22.3972 15.2189 21.9509 15.6652C21.5046 16.1116 20.781 16.1116 20.3347 15.6652L17.1428 12.4734V22.2857C17.1428 22.9169 16.6311 23.4286 15.9999 23.4286C15.3688 23.4286 14.8571 22.9169 14.8571 22.2857V12.4734L11.6652 15.6652C11.2189 16.1116 10.4953 16.1116 10.049 15.6652C9.60265 15.2189 9.60265 14.4953 10.049 14.049L15.1918 8.90615Z"
                  fill="currentColor"
                ></path>
              </svg>
            )}
          </div>
        </button>
      </div>
    </div>
  );
};

export default InputContainer;
