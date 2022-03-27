import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const refCouter = useRef(null);
  const [count, setCount] = useState(0);

  const handleStart = () => {
    if (refCouter.current) return;
    refCouter.current = setInterval(() => {
      setCount((counter) => counter + 1);
      console.log(">>>check count: ", count);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(refCouter.current);
    refCouter.current = null;
  };

  useEffect(() => {
    return () => clearInterval(refCouter.current);
  }, []);
  return (
    <div>
      <h3>Couter: {count}</h3>
      <div>
        <button
          className="mx-3 bg-lime-400 w-11 rounded-sm shadow-md"
          onClick={handleStart}
        >
          Start
        </button>
        <button
          className="mx-3 bg-lime-400 w-11 rounded-sm shadow-md"
          onClick={handleStop}
        >
          Stop
        </button>
      </div>
    </div>
  );
};

export default Timer;
