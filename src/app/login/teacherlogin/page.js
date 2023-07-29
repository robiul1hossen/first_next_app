"use client";
import { useRouter } from "next/navigation";
import React from "react";

const TeacherLogin = () => {
  const router = useRouter();
  return (
    <div>
      <h2>This is teacher login</h2>
      <button onClick={() => router.push("/login")}>Go to Main Login</button>
    </div>
  );
};

export default TeacherLogin;
