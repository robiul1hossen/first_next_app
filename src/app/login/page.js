import Link from "next/link";

const Login = () => {
  return (
    <div>
      <h1>this is Login page</h1>
      <Link href="/">Go to Home</Link> <br />
      <br />
      <Link href="/about">Go to About</Link>
      <br />
      <br />
      <br />
      <Link className="my-10 block" href="/login/studentlogin">
        Go to student page
      </Link>
      <Link href="/login/teacherlogin">Go to Teacher page</Link>
    </div>
  );
};

export default Login;
