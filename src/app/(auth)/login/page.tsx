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

const LoginPage = () => {
  return (
    <div className="bg-white dark:bg-neutral-900">
      <div className="flex flex-col lg:grid min-h-screen lg:grid-cols-12">
        <aside className="bg-gradient-to-br from-cyan-500 to-fuchsia-900 relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6"></aside>

        <main className="flex flex-grow items-center justify-center py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <FullLogo />

            <Card className="bg-transparent dark:bg-transparent mx-20 mt-10">
              <CardHeader>
                <CardTitle className="text-3xl">Welcome back</CardTitle>
                <CardDescription>Log in to your LinkHub</CardDescription>
              </CardHeader>
              <CardContent>
                <LoginForm />
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LoginPage;
