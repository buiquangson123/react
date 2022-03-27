import React, { useEffect, useRef, useState } from "react";

const Drop = () => {
  const [show, setShow] = useState(false);
  const refShow = useRef(null);

  useEffect(() => {
    const handleClickOut = (e) => {
      if (refShow.current && !refShow.current.contains(e.target)) {
        setShow(false);
      }
    };

    document.addEventListener("click", handleClickOut);
    return () => {
      document.removeEventListener("click", handleClickOut);
    };
  }, []);
  return (
    <div className="relative w-[400px] m-auto mt-2" ref={refShow}>
      <div
        className="w-full border border-gray-500 text-green-400 rounded-md cursor-pointer"
        onClick={() => setShow(!show)}
      >
        Selected
      </div>
      {show && (
        <div className="absolute top-full left-0 w-full border border-gray-500 rounded-md">
          <div className="text-green-400 text-base cursor-pointer">
            Jascript
          </div>
          <div className="text-green-400 text-base cursor-pointer">PHP</div>
          <div className="text-green-400 text-base cursor-pointer">Veujs</div>
        </div>
      )}
    </div>
  );
};

export default Drop;
