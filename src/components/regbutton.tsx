"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const RegButton = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const handleSignin = () => {
    router.push("/register");
  };
  if (session && session.user)
    return (
      <>
        <p>{session.user.name}</p>
        <button className="btn btn-primary">SignOut</button>
      </>
    );
  return (
    <>
      <button onClick={handleSignin} className="btn btn-primary">
        Register
      </button>
    </>
  );
};
export default RegButton;
