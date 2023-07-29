"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  return (
    <div>
      <h2>This is About page</h2>
      <Link href="/">Go to home</Link>
      <br />
      <br />
      <Link href="/login">Go to Login</Link>
      <button className="block bg-purple-600 text-white p-3 rounded-lg ms-5" onClick={() => router.push("/")}>
        Go to Home
      </button>
    </div>
  );
};

export default About;
