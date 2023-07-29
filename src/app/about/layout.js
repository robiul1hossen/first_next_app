"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const layout = ({ children }) => {
  const pathName = usePathname();
  return (
    <div>
      {pathName !== "/about/teacherabout" ? (
        <div className="text-center mx-auto">
          <ul className="flex gap-6 justify-center text-blue-700">
            <li className="font-semibold">
              <Link href="/about">Main About</Link>
            </li>
            <li className="font-semibold">
              <Link href="/about/studentabout">Student About</Link>
            </li>
            <li className="font-semibold">
              <Link href="/about/teacherabout">Teacher About</Link>
            </li>
          </ul>
        </div>
      ) : null}
      <div className="text-center font-bold text-3xl my-10">{children}</div>
    </div>
  );
};

export default layout;
