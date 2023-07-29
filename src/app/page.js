"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("Robi");
  const fruit = () => {
    setName("Hossen");
  };
  const router = useRouter();
  return (
    <main>
      {/* <User name="Robi" /> */}
      <Link href="/login">Go to Login</Link>
      <br />
      <br />
      <Link href="/about">Go to About</Link>
      <button
        className="block bg-purple-600 text-white p-3 rounded-lg ms-5"
        onClick={() => router.push("/login")}
      >
        Go to Login
      </button>
      <button onClick={() => fruit()}> Click me</button>
      <h2>My Name Is {name} </h2>
    </main>
  );
}

// export const User = (props) => {
//   return (
//     <div>
//       <h1>first Name {props.name} </h1>
//     </div>
//   );
// };
