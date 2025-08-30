import React, { useEffect, useRef, useState } from "react";
import { FaRegUserCircle  } from "react-icons/fa";
import { Link } from "react-router-dom";

export function UserMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="relative z-50" ref={ref}>
      <FaRegUserCircle 
        className="text-xl sm:text-2xl cursor-pointer"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
      />
      {open && (
        <div
          role="menu"
          className="absolute right-0 -mx-10 mt-3 w-30 rounded-2xl bg-white shadow-lg ring-1 ring-black p-2"
        >
          <Link
            to="/order-summary"
            className="block w-full rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100"
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            My Order
          </Link>
          <Link
            to="/track-order"
            className="block w-full rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 "
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            Track Order
          </Link>
        </div>
      )}
    </div>
  );
}
