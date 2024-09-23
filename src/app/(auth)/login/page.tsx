import { LoginForm } from "@/components/auth/LoginForm";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { FullLogo } from "@/components/FullLogo";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";
import { Button } from "@/components/ui/button";

import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="bg-white dark:bg-neutral-900">
      <div className="flex flex-col lg:grid min-h-screen lg:grid-cols-12">
        <aside className="bg-gradient-to-br from-cyan-500 to-fuchsia-900 relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6"></aside>

        <main className="flex flex-grow items-center justify-center py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <Link href="/">
              <FullLogo />
            </Link>

            <Card className="bg-transparent dark:bg-transparent mt-5 sm:mt-10">
              <CardHeader>
                <CardTitle className="text-3xl text-center">
                  Welcome back
                </CardTitle>
                <CardDescription className="text-md text-center">
                  Log in to your LinkHub
                </CardDescription>
              </CardHeader>
              <CardContent>
                <LoginForm />
              </CardContent>
              <CardFooter className="pb-3 flex flex-col gap-4 sm:flex-row w-full items-center justify-center sm:gap-6">
                <Button variant="outline">
                  <FcGoogle size={20} className="mr-2" />
                  Sign in with Google
                </Button>
                <Button variant="outline">
                  <IoLogoGithub size={20} className="mr-2" />
                  Sign in with Github
                </Button>
              </CardFooter>
              <CardFooter className="flex justify-center">
                <Link href="/signup">
                  <Button variant="link">Don`t have an account?</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LoginPage;
