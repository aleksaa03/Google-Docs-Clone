import Button from "@material-tailwind/react/Button";
import Head from "next/head";
import Image from "next/image";
import { SignIn } from "../firebase";
import GoogleDocsLogo from "../media/google-docs-logo.png";

function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Image
          src={GoogleDocsLogo}
          height="300"
          width="550"
          objectFit="contain"
        />
        <Button
          className="w-44 mt-10"
          color="blue"
          buttonType="filled"
          ripple="light"
          onClick={SignIn}
        >
          Login
        </Button>
      </div>
    </>
  );
}

export default Login;
