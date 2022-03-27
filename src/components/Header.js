import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full bg-slate-500 text-white flex justify-around">
      <Link to={`/`}>Timer</Link>
      <Link to={`/timer`}>HackerNews</Link>
      <Link to={`/textarea`}>Textarea</Link>
      <Link to={`/drop`}>Drop</Link>
    </div>
  );
};

export default Header;
