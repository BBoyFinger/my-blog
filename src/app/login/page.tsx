import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <h1 className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
        Vu Tu<span className="text-accent">.Blog</span>
      </h1>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6">
          <h3 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h3>
          <form action="">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="">Your email</Label>
              <Input type="email" placeholder="Email" id="email" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="">Password</Label>
              <Input type="password" placeholder="password" id="password" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <Input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-green-50 focus:ring-3 focus:ring-primary-300"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <Label className="text-gray-500">Remember Me</Label>
                </div>
              </div>
              <Link
                href="#"
                className="text-sm font-medium text-primary-600 hover:underline"
              >
                Forgot password
              </Link>
            </div>
            <Button>Sign in</Button>
            <p>
              Don't have an account yet <Link href="/register"> Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
