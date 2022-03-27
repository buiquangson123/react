import React, { useEffect, useRef, useState } from "react";

const Textarea = () => {
  const refText = useRef(null);
  const [text, setText] = useState("");
  const [textareaHeight, setTextareaHeight] = useState("auto");

  const handleText = (e) => {
    setTextareaHeight("auto");
    setText(e.target.value);
  };

  useEffect(() => {
    setTextareaHeight(`${refText?.current?.scrollHeight}px`);
  }, [text]);

  return (
    <div className="p-5">
      <textarea
        className="overflow-hidden w-full max-w-[300px] p-2 border border-gray-500 focus:border-orange-700 resize-none rounded-sm"
        placeholder="Nhap vao du lieu ..."
        ref={refText}
        value={text}
        style={{
          height: textareaHeight,
        }}
        onChange={handleText}
      />
    </div>
  );
};

export default Textarea;
